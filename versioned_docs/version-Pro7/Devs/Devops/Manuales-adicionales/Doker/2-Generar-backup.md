# Guía para generar backup

Desde la terminal de su servidor - Instalación docker

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

multifacturalo_mariadb2_1 es el contenedor donde podrá acceder a mysql y utilizar comandos para ello

5. Una vez ubicado el contenedor a acceder, ejecute el siguiente comando:

```bash
docker exec -ti multifacturalo_mariadb2_1 /bin/bash
```

6. De esta manera se conectará al contenedor, observará un cambio en el inicio de la terminal, ejecute el siguiente comando.

```bash
mysqldump -v --opt --events --routines --triggers --default-character-set=utf8 -u root -p tenancy_demo > db_backup_your_db_name.sql

```

**Donde:**

1. root es el usuario de su base de datos
2. tenancy_demo el nombre de la base de datos a respaldar
3. db_backup_your_db_name.sql es el nombre backup de su base de datos

4. Luego de ejecutar el comando, debe ingresar la contraseña de su base de datos, seleccione enter.

   **a. Enter password:**

5. Se generará su backup, ejecute el comando ls, visualizara el archivo .sql generado.

6. Salga del contenedor, con el comando

   **a. Exit**

7. Debe copiar el archivo .sql desde el contenedor hacia una carpeta del servidor

```bash
docker cp multifacturalo_mariadb2_1:/db_backup_your_db_name.sql copiabackup.sql
```

**Donde:**

1.  multifacturalo_mariadb2_1 es el contenedor.
2.  copiabackup.sql es el nombre de la copia del archivo .sql, este es el que visualizara fuera del contenedor.
3.  db_backup_your_db_name.sql es el nombre backup de su base de datos

4.  Conectese con un software a su servidor para que pueda extraer el archivo, por ejemplo winscp, etc.

### Con un gestor de base de datos

1. Verificar si cuenta con el puerto 3306 aperturado, caso contrario aperturarlo

**1. Google: https://cloud.google.com/vpc/docs/using-firewalls?hl=es-419**

2. Ubicar el usuario y contraseña de base de datos, se los deben haber enviado al realizar la instalacion, tambien puede obtenerla accediendo a su proyecto vía ssh y visualizar el archivo .env

3. Ubicar la IP de su servidor

4. Usar un software como heidi, navicat, mysqlworkbench entre otros e ingresar la ip, usuario y contraseña

**Referencia: https://webenabled.com/using-navicat**

Exportar BD:

**[https://documentation.alphasoftware.com/documentation/pages/HowTo/Databases/Export%20Tables%20from%20a%20Database.xml](https://documentation.alphasoftware.com/documentation/pages/HowTo/Databases/Export%20Tables%20from%20a%20Database.xml)**

**[https://support.appliedi.net/kb/a1034/how-to-import-and-export-a-mysql-database-using-heidisql.aspx](https://support.appliedi.net/kb/a1034/how-to-import-and-export-a-mysql-database-using-heidisql.aspx)**
