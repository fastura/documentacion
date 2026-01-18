# Guía acceso a base de datos

### Conectarse con un gestor de base de datos

1. Verificar si cuenta con el puerto 3306 aperturado, caso contrario aperturarlo

   **• Google: https://cloud.google.com/vpc/docs/using-firewalls?hl=es-419**

2. Ubicar el usuario y contraseña de base de datos, se los deben haber enviado al realizar la instalacion, tambien puede obtenerla accediendo a su proyecto vía ssh y visualizar el archivo .env

3. Ubicar la IP de su servidor

4. Usar un software como heidi, navicat, mysqlworkbench entre otros e ingresar la ip, usuario y contraseña

**Referencia: https://webenabled.com/using-navicat**

### Conectarse desde la terminal de su servidor - Instalación docker

1. Conectarse vía ssh a su instancia

2. Ubicar el usuario y contraseña de base de datos, se los deben haber enviado al realizar la instalacion, tambien puede obtenerla accediendo a su proyecto vía ssh y visualizar el archivo .env

3. Ejecutar docker ps y verificar el contenedor de la base de datos

| CONTAINER ID | IMAGE               | COMMAND                | CREATED      | STATUS      | PORTS                  | NAMES                     |
| ------------ | ------------------- | ---------------------- | ------------ | ----------- | ---------------------- | ------------------------- |
| 92f43f53f8e4 | stenfrank/php:1.0   | "php-fpm7.2"           | 18 hours ago | Up 18 hours | 9000/tcp               | multifacturalo_fpm2_1     |
| 914a35c72512 | redis:alpine        | "docker-entrypoint.s…" | 18 hours ago | Up 18 hours | 0.0.0.0:6381->6379/tcp | multifacturalo_redis2_1   |
| de282cbbbc15 | mariadb             | "docker-entrypoint.s…" | 18 hours ago | Up 18 hours | 0.0.0.0:3307->3306/tcp | multifacturalo_mariadb2_1 |
| eb049c8dba9c | stenfrank/nginx:1.0 | "nginx"                | 18 hours ago | Up 18 hours | 80/tcp                 | multifacturalo_nginx2_1   |

4. En la lista deberá fijarse en los NAMES que contengan mariadb ya que en él deberá acceder.

   • multifacturalo_mariadb2_1 es el contenedor donde podrá acceder a mysql y utilizar comandos para ello

5. Una vez ubicado el contenedor a acceder, ejecute el siguiente comando:

   • docker exec -ti multifacturalo_mariadb2_1 /bin/bash

6. De esta manera se conectará al contenedor, observará una cambio en el inicio de la terminal

7. Debe ejecutar el siguiente comando

```bash
    • mysql -u root -p
```

**Donde root es su usuario de base de datos**

8. Ingrese la  contraseña de base de datos

9. Habrá accedido a su base de datos, puede ejecutar comandos sql

### GESTIONAR RESPALDOS EN DOCKER

Si desea respaldar o montar un respaldo de una bd puede ejecutar los siguientes comandos

# Backup

```bash
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql

```

```bash
# Restore
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE
```
