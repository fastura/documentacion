---
title: Cambiar en MariaDB Docker
---

# Cambiar contraseña root en contenedor de MariaDB Docker

1. Override the entrypoint in docker-compose.yml for the MariaDB Docker container by adding:

```bash
entrypoint: mysqld_safe --skip-grant-tables --user=mysql
```

2. The start up the Docker Compose stack:

```bash
$> docker-compose up -d
```

3. Then login to the Docker container:

```bash
$> sudo docker exec -ti docker-container-name bash
```

4. And login as root without password:

```bash
$> mysql -u root -p
```

5. Change the root password in mysql cli:

```bash
mysql> FLUSH PRIVILEGES;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_secret';
mysql> FLUSH PRIVILEGES;
```

6. Logout of mysql and the Docker container (2x exit), remove the entrypoint line from the docker-compose.yml and reload the Docker Composer stack:

```bash
$> docker-compose up -d
```

7. You can now login to the MariaDB container and connect to the database with the new root password:

```bash
$> sudo docker exec -ti docker-container-name bash
$> mysql -u root -p
```

### For mariadb:

```bash
entrypoint: /usr/bin/mariadbd-safe --skip-grant-tables --user=mysql
mariadb -u root -p
```

All this because I didn't realize it only printed the original root password once, which is long-lost.
