# Migración de su proyecto entre servidores

En esta sección se presentará como migrar un proyecto de un servidor a otro.

## Tener en cuenta

1. En el servidor se tiene que revisar que puertos y nombres del contenedor esta disponible para evitar conflictos.

2. Tener un backup de sus datos.

## Pasar datos dentro de un servidor a otro

Con los siguientes comandos traslada sus datos al otro servidor.

```bash
# Copia los certificados del proyecto
rsync -avzh /root/certs {ip del servidor a migrar}:/root/ 

# Copia el el datos del proxy del proyecto al servidor
rsync -avzh /root/proxy {ip del servidor a migrar}:/root/              

# Copia todo el proyecto al root del servidor
rsync -avzh -q /root/ {ip del servidor a migrar}:/root/                

# Copia los volumenes de la base de datos
rsync -avzh -q /var/lib/docker/volumes/ {ip del servidor a migrar}:/var/lib/docker/volumes/ 
```

Una vez se haya terminado la transferencia de datos, tiene que dirigrse dentro de ```cd /var/lib/docker/volumes/```, acá se encontrará las carpetas de mysql y redis.

Se tiene que cambiar los nombre de la carepta respecto a lo que se ha elegido previamente. Con estos comandos se puede cambiar los nombres de la carpeta.
```bash
#Se esta usando nombres de ejemplos
# |nombre de carpeta actual | nombre de carpeta modificada |    
mv pro6.buho.xyz_mysqldata1   pro6.buho.xyz_mysqldata2
```

## Configurar archivos 

Antes de levantar el proyecto, se tiene que configurar algunos archivos.

### Editar el archivo de docker-compose

En este ejemplo se tomará como ejemplo que la carpeta tenga el nombre de **pro6.buho.xyz**.

```yaml title="docker-compose.yml"
version: '3'

services:
    nginx{numero nuevo}:
        image: rash07/nginx
        container_name: nginx_pro6_buho_xyz
        working_dir: /var/www/html
        environment:
            VIRTUAL_HOST: pro6.buho.xyz, *.pro6.buho.xyz
        volumes:
            - ./:/var/www/html
            - /root/proxy/fpms/pro6.buho.xyz:/etc/nginx/sites-available
        restart: always
    fpm{numero nuevo}:
        image: rash07/php-fpm:2.0
        container_name: fpm_pro6_buho_xyz
        working_dir: /var/www/html
        volumes:
            - ./ssh:/root/.ssh
            - ./ssh:/var/www/.ssh
            - ./:/var/www/html
        restart: always
    mariadb{numero nuevo}:
        image: mariadb:10.5.6
        container_name: mariadb_pro6_buho_xyz
        environment:
            - MYSQL_USER=\${MYSQL_USER}
            - MYSQL_PASSWORD=\${MYSQL_PASSWORD}
            - MYSQL_DATABASE=\${MYSQL_DATABASE}
            - MYSQL_ROOT_PASSWORD=\${MYSQL_ROOT_PASSWORD}
            - MYSQL_PORT_HOST=\${MYSQL_PORT_HOST}
        volumes:
            - mysqldata{numero nuevo}:/var/lib/mysql
        ports:
            - "\${MYSQL_PORT_HOST}:3306"
        restart: always
    redis{numero nuevo}:
        image: redis:alpine
        container_name: redis_pro6_buho_xyz
        volumes:
            - redisdata{numero nuevo}:/data
        restart: always
    scheduling{numero nuevo}:
        image: rash07/scheduling
        container_name: scheduling_pro6_buho_xyz
        working_dir: /var/www/html
        volumes:
            - ./:/var/www/html
        restart: always
    supervisor{numero nuevo}:
        image: rash07/php7.4-supervisor
        container_name: supervisor_pro6_buho_xyz
        working_dir: /var/www/html
        volumes:
            - ./:/var/www/html
            - ./supervisor.conf:/etc/supervisor/conf.d/supervisor.conf
        restart: always

networks:
    default:
        external:
            name: proxynet

volumes:
    redisdata{numero nuevo}:
        driver: "local"
    mysqldata{numero nuevo}:
        driver: "local"
```

* En el ejemplo de arriba, el texto de **"\{numero nuevo\}"**, se tiene que cambiar a un nombre disponible (por ejemplo **nginx12**) que se encunetra dentro de tu servidor. Puedes nombrar los contenedores con ```docker ps```.

### Cambiar el puerto de FPM dentro del proxy

Tienes que dirigir a ```cd ~/proxy/fpms/{nombre de tu proyecto}/```, se verá el archivo **default**, ingresa con ```nano default```.

```nginx title="default"
server {
    listen 80 default_server;
    root /var/www/html/public;
    index index.html index.htm index.php;
    server_name *._;
    charset utf-8;
    server_tokens off;
    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }
    location = /robots.txt {
        log_not_found off;
        access_log off;
    }
    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass fpm{numero nuevo}:9000;
        fastcgi_read_timeout 3600;
    }
    error_page 404 /index.php;
    location ~ /\.ht {
        deny all;
    }
}
```

* En la **fastcgi_pass** se tiene que cambiar con el nombre que se puso para el fpm dentro del docker-compose.


### Cambiar el host de la base de datos en el .env 

```bash title=".env"
DB_HOST={nombre del contenedor de la base dedatos}
```

* En **DB_HOST** se tiene que colocar el nombre de la base de datos que lo colocaste en el docker-compose.yml.

Después de ello, tiene que buscar lo siguiente
```bash title=".env"
MYSQL_PORT_HOST={puerto libre de tu vps}
```

* Aquí debes colocar un puerto libre de tu sistema para que la base de datos funcione.

## Posibles errores

### Identificar posibles errores

Para poder ver si hay errores dentro de los contenedores, primero visualizalos con ```docker ps```

Si encuentras que dentro del rseultado, en uno de los contenedores dentro de us categoría **STATUS** no aparece levntando (UP), entonces en ese contenedor hubo un error.

Para poder mostrar los logs del contenedor, puede usar el siguiente comando

```bash
docker logs --tail 20 {contenedor}
```

Gracias a esto podemos revisar sus registros e identificar sus posibles errores.

