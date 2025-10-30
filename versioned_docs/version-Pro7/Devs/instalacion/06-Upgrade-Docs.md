---
title: Migrar a Pro7.1 o Superior
sidebar_position: 6
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Guía para Migrar a Pro7.1 o Superior

<head>
  <title>Migración a Pro7.1</title>
  <meta
    name="description"
    content="Guía completa para migrar tu sistema desde Laravel 5.7 a Laravel 9.x con Pro7.1, incluyendo cambios en dependencias y proceso paso a paso."
  />
</head>

## Accesos Rápidos

<DocsCards>
  <DocsCard 
    header="Cambios en Laravel"
    href="#cambios-en-dependencias-y-versiones-de-laravel-pro7"
  >
    <p>Conoce las actualizaciones principales del framework y requerimientos de PHP 8.</p>
  </DocsCard>

  <DocsCard
    header="Script de Actualización"
    href="#script-de-actualización"
  >
    <p>Utiliza el script automático para migrar tu sistema de forma rápida y segura.</p>
  </DocsCard>

  <DocsCard
    header="Actualización Manual"
    href="#comandos-para-actualizar"
  >
    <p>Sigue el proceso paso a paso si prefieres realizar la actualización manualmente.</p>
  </DocsCard>

  <DocsCard
    header="Tablas de Dependencias"
    href="#cambios-en-dependencias-de-laravel"
  >
    <p>Revisa todas las librerías actualizadas y sus nuevas versiones.</p>
  </DocsCard>
</DocsCards>

## Cambios en Dependencias y Versiones de Laravel Pro7

> ⚠️ **IMPORTANTE:**  
> Se ha realizado una actualización mayor del Pro7, migrando la base de código desde Laravel 5.7 a Laravel 9.x, con un requerimiento mínimo de PHP 8. Además, se han actualizado la mayoría de las dependencias y librerías para garantizar compatibilidad con las versiones más recientes de Laravel y Symfony.

> Esta actualización implica cambios profundos en el core del sistema. Aunque se ha realizado una validación completa y las pruebas no han mostrado errores, recomendamos ser cuidadoso y validar las funciones críticas de su flujo de trabajo en un entorno de pruebas antes de actualizar en producción.

> En caso de detectar cualquier incidencia, incompatibilidad o comportamiento inesperado, por favor repórtelo lo más rápido posible para obtener soporte y una solución inmediata.

**Upgrade mayor:** Laravel 5.7 → 9.x.

**PHP:** de 7.1.3 a PHP 8 mínimo.

**Librerías:** la mayoría actualizadas a versiones compatibles con Laravel 9/Symfony 6.

**Paquetes reemplazados:**

`barryvdh/laravel-cors` → `fruitcake/laravel-cors`

`fzaninotto/faker` → `fakerphp/faker`

**Paquetes nuevos:** `laravel/ui`, `laravel/sail`.

**Estructura de autoload:** migrada de classmap → PSR-4 con Database\Factories y Database\Seeders.

---

## Cambios en General de Laravel

| Paquete | Antes | Después | Actualización | ¿Para qué sirve? |
| :--- | :--- | :--- | :--- | :--- |
| **laravel/framework** | 5.7.\* | ^8.0 | Actualizado | El framework Laravel en sí (MVC, routing, ORM, etc.) para crear apps. |
| **php** | ^7.1.3 | ^8.0 | Laravel 9 exige PHP 8.0 | Lenguaje base requerido |

---

## Cambios en dependencias de Laravel

| Paquete | Antes | Después | Actualización | ¿Para qué sirve? |
| :--- | :--- | :--- | :--- | :--- |
| **barryvdh/laravel-dompdf** | ^0.8.4 | ^2.0 | Actualizado | Generar PDFs desde vistas Blade/HTML |
| **barryvdh/laravel-cors** | ^0.11.3 | N/A | Reemplazado | Middleware CORS (Cross-Origin Resource Sharing) |
| **fruitcake/laravel-cors** | N/A | ^2.0.5 | Nuevo | Middleware CORS oficial en Laravel 7+ |
| **binarytorch/larecipe** | ^2.4 | ^2.6 | Actualizado | Genera documentación tipo Docs UI para Laravel |
| **graham-campbell/markdown** | ^11.2 | ^13.0 | Actualizado | Renderizar Markdown a HTML con facilidad |
| **guzzlehttp/guzzle** | ^6.0 | ^7.2 | Actualizado | Cliente HTTP para consumir APIs |
| **hyn/multi-tenant** | 5.\* | ^5.8 | Actualizado | Manejo de multi-tenancy (multi-clientes) en Laravel |
| **ifsnop/mysqldump-php** | ^2.9 | ^2.11 | Actualizado | Generar backups SQL programáticamente |
| **intervention/image** | ^2.5 | ^2.7 | Actualizado | Manipulación de imágenes (resize, crop, filtros) |
| **jenssegers/agent** | ^2.6 | ^3.6 | Actualizado | Detecta dispositivo/navegador/sistema operativo |
| **laravel/tinker** | ^1.0 | ^2.7 | Actualizado | Consola interactiva REPL para Laravel |
| **laravelcollective/html** | ^5.4.0 | ^6.2 | Actualizado | Helpers para formularios y HTML en Laravel |
| **mercadopago/dx-php** | 2.0.0 | ^2.5 | Actualizado | SDK oficial de Mercadopago |
| **mpdf/mpdf** | ^8.0.0 | ^8.1.13 | Actualizado | Generación avanzada de PDFs desde HTML |
| **mpride/qrcode** | ^1.0 | ^1.2 | Actualizado | Generar códigos QR dentro de PDFs |
| **nwidart/laravel-modules** | ^5.0 | ^9.0 | Actualizado | Modulariza y organiza Laravel en módulos independientes |
| **picqer/php-barcode-generator** | ^2.0 | ^2.2 | Actualizado | Generación de códigos de barras |
| **rap2hpoutre/laravel-log-viewer** | ^1.3 | ^2.2 | Actualizado | Visualizar logs desde el navegador |
| **robrichards/xmlseclibs** | 3.0.\* | ^3.1 | Actualizado | Seguridad y firmas digitales XML |
| **setasign/fpdi** | ^1.8.\* | ^1.8 | Operación modernizada | Generación de PDFs básica |
| **setasign/fpdf** | ^2.0 | ^2.3 | Actualizado | Importar y manipular PDFs existentes |
| **stevebauman/location** | ^6.3 | ^6.6 | Actualizado | Detecta la ubicación geográfica por IP |
| **symfony/process** | ^4.4 | ^6.2 | Actualizado | Ejecuta comandos/procesos en el servidor |
| **thiagoalessio/tesseract-ocr** | ^2.7 | ^2.9 | Actualizado | Interfaz Tesseract (extraer texto de imágenes) |
| **zanysoft/laravel-zip** | ^1.0 | ^2.0 | Actualizado | Manejo de archivos ZIP en Laravel |
| **laravel/ui** | N/A | ^4.0 | Nuevo | Scaffolding de la interfaz (Bootstrap/Vue/etc.) |

---

## Cambios en dependencias de Desarrollo y Testing en Laravel

| Paquete | Antes | Después | Actualización | ¿Para qué sirve? |
| :--- | :--- | :--- | :--- | :--- |
| **fzaninotto/faker** | ^1.4 | N/A | Reemplazado | Generación de datos falsos (faker clásico, abandonado) |
| **fakerphp/faker** | N/A | ^1.9.1 | Nuevo | Reemplazo oficial de Faker para Laravel 8/9 |
| **phpunit/phpunit** | ^7.0 | ^9.5.10 | Actualizado | Framework de testing unitario |
| **nunomaduro/collision** | ^2.0 | ^6.1 | Actualizado | Mejora errores en CLI con mensajes claros |
| **laravel/dusk** | ^4.0 | ^7.0 | Actualizado | Testing de navegadores web con automatización |
| **barryvdh/laravel-debugbar** | ^3.2.3 | ^3.6 | Actualizado | Barra de debug visual en el navegador |
| **filp/whoops** | ^2.0 | ^2.14 | Actualizado | Pantallas de error con stacktrace bonito |
| **mockery/mockery** | ^1.0 | ^1.4.4 | Actualizado | Framework de mocks para testing |
| **laravel/sail** | N/A | ^1.0.1 | Nuevo | Entorno Docker oficial de Laravel |

---

## Actualización de dependencias

Ingresar como usuario root, nos dirigimos a la carpeta del servicio y cambiamos a la rama de actualización con el siguiente comando: 

```bash
git checkout -b v7.1 origin/v7.1
```

> **NOTA:** Si hay cambios en el storage que le impide el cambio de rama puede ejecutar: `git checkout -- storage/app/public/skins/*.css`

### Script de Actualización

Verificar si se encuentra el script `upgrade-script.sh` dentro del proyecto y darle permisos necesarios con el siguiente comando:

```bash
chmod +x upgrade-script.sh
```

> **NOTA:** Verificar el número de servicio de los contenedores `fpm` y `mariadb` dentro del archivo `docker-compose.yml` dentro del proyecto, también es importante tener la contraseña root de la base de datos la puede encontrar el `.env`.

Ejecutamos el script con el comando `./upgrade-script.sh` e ingresamos el número del servicio y la contraseña root de la base de datos.

Finalmente actualizará su sistema.

### Comandos para actualizar

Detenemos los contenedores con el comando:

```bash
docker compose down
```

Entramos al archivo `docker-compose.yml` y actualizamos las imágenes:

`rash07/php-fpm:2.0` → `rash07/php-fpm:8.2`

`rash07/scheduling` → `rash07/scheduling:8.2`

`rash07/php7.4-supervisor` → `rash07/supervisor-php:8.2`

Levantamos los contenedores con las imágenes actualizadas con el comando:

```bash
docker compose up -d
```

Ingresamos al contenedor fpm con el comando:

```bash
docker exec -it <CONTAINER_FPM> bash
```

Dentro del contenedor fpm borramos las siguientes carpetas con el comando:

```bash
rm -rf vendor node_modules composer.lock package-lock.json
```

Dentro del contenedor fpm instalamos las nuevas dependencias con el comando:

```bash
composer install
```

Dentro del contenedor fpm otorgamos permisos con los siguientes comandos:

```bash
mkdir -p bootstrap/cache
mkdir -p storage/framework/{cache,sessions,testing,views}
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache
```

Dentro del contenedor fpm ejecutamos el comando:

```bash
composer dump-autoload
```

Ingresamos al contenedor mariadb con el comando:

```bash
docker exec -it <CONTAINER_MARIADB> bash
```

Dentro del contenedor mariadb iniciamos sesión root en la base de datos con el comando:

```bash
mysql -u root -p
```

Dentro del contenedor mariadb ingresamos a la base datos `mysql` con este comando:

```sql
USE mysql;
```

Dentro del contenedor mariadb en la base de datos `mysql` ingresamos la siguiente función:

```sql
DELIMITER $$

CREATE PROCEDURE drop_tenancy_users()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE username VARCHAR(100);
    DECLARE userhost VARCHAR(100);
    DECLARE cur CURSOR FOR
        SELECT User, Host FROM mysql.user WHERE User LIKE 'tenancy_%';
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO username, userhost;
        IF done THEN
            LEAVE read_loop;
        END IF;
        SET @s = CONCAT('DROP USER IF EXISTS `', username, '`@`', userhost, '`;');
        PREPARE stmt FROM @s;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
    END LOOP;

    CLOSE cur;
END$$

DELIMITER ;
```

Dentro del contenedor mariadb ejecutamos la función con el siguiente comando:

```sql
CALL drop_tenancy_users();
```

Dentro del contenedor mariadb borramos la función utilizada con el siguiente comando:

```sql
DROP PROCEDURE drop_tenancy_users;
```

Dentro del contenedor mariadb ejecutamos el comando:

```sql
FLUSH PRIVILEGES;
```

Ingresamos al contenedor fpm con el comando:

```bash
docker exec -it <CONTAINER_FPM> bash
```

Dentro del contenedor fpm refrescamos las contraseñas y user tenancy con el comando:

```bash
php artisan passwords
```

Dentro del contenedor fpm recreamos las bases de datos tenancy con el comando:

```bash
php artisan tenancy:recreate
```

Dentro del contenedor fpm optimizamos con el siguiente comando:

```bash
php artisan optimize:clear
```

Dentro del contenedor fpm otorgamos permisos con el siguiente comando:

```bash
chmod -R 777 vendor/mpdf
```

Finalmente el sistema está actualizado.