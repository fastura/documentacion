---
sidebar_position: 3
---
# Valet Linux 

## Requisitos Previos

Para implementar el sistema en un servidor Linux local desde cero, necesitarás:

- Acceso root al servidor
- PHP 8.3 con librerías requeridas por Laravel
- MySQL (opcionalmente PhpMyAdmin)
- Git, Curl y Composer

---

## 1. Preparación del Sistema

### Actualizar el sistema

```bash
apt-get update
```

### Instalar herramientas para agregar repositorios PPA

```bash
apt-get install software-properties-common
apt-get install python-software-properties
```

### Agregar repositorio de PHP 8.3

Ubuntu no incluye PHP 8.3 de forma nativa, por lo que debemos agregarlo:

```bash
add-apt-repository ppa:ondrej/php
apt-get update
```

> **Nota:** En algunos casos se solicitará confirmar con Enter

---

## 2. Instalación de PHP y Extensiones

```bash
apt-get install php8.3 php8.3-mbstring php8.3-soap php8.3-zip php8.3-mysql php8.3-curl php8.3-gd php8.3-xml php8.3-mcrypt
```

---

## 3. Instalación de MySQL y PhpMyAdmin

```bash
apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin
```

Durante la instalación se solicitará establecer una contraseña tanto para MySQL como para PhpMyAdmin.

---

## 4. Instalación de Git y Curl

```bash
apt-get install git
apt-get install curl
```

---

## 5. Instalación y Configuración de Composer

### Instalar Composer

```bash
apt-get install composer
```

### Dar permisos a la carpeta de Composer

```bash
chmod -R 777 ~/.composer
```

### Instalar librerías de Valet

```bash
composer global require cpriego/valet-linux
```

---

## 6. Configuración del PATH

Editar el archivo de perfil:

```bash
nano ~/.profile
```

Agregar la siguiente línea al final del documento:

```bash
PATH="$HOME/.composer/vendor/bin:$PATH"
```

Guardar y aplicar los cambios:

```bash
source ~/.profile
```

---

## 7. Instalación de Dependencias de Valet

```bash
apt install network-manager libnss3-tools jq xsel
```

---

## 8. Configuración de Nginx y Valet

### Detener Apache (si está instalado)

Valet requiere el puerto 80 libre:

```bash
service apache2 stop
```

### Instalar Nginx

```bash
apt install nginx
```

### Verificar que Nginx esté funcionando

```bash
systemctl status nginx
```

### Instalar Valet

```bash
valet install
```

---

## 9. Configuración del Directorio de Trabajo

```bash
mkdir ~/code
cd code
valet park
```

---

## 10. Clonar el Repositorio

Una vez ubicado en `/code` y con acceso al repositorio:

```bash
git clone https://git.buho.la/facturaloperu/facturador/pro8.it
cd pro8
```

---

## 11. Configuración del Proyecto

### Crear archivo de configuración

```bash
cp .env.example .env
```

Editar el archivo `.env` con los siguientes valores:

- **APP_URL_BASE:** pro8.test
- **DB_DATABASE:** Nombre de la base de datos principal
- **DB_USERNAME:** Usuario de MySQL
- **DB_PASSWORD:** Contraseña de MySQL

### Generar clave de aplicación

```bash
php artisan key:generate
composer dump-autoload
```

---

## 12. Crear Base de Datos

Acceder a PhpMyAdmin en `tudominio.com/phpmyadmin` con el usuario root y la contraseña establecida durante la instalación de MySQL, y crear la base de datos correspondiente.

---

## 13. Instalación de Dependencias y Migraciones

```bash
composer install
php artisan migrate --seed
```

Verifica en PhpMyAdmin que la base de datos y las tablas se hayan creado correctamente.

---

## 14. Configuración de Permisos

```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

### Establecer enlace simbólico para archivos

```bash
php artisan storage:link
```

---

## 15. Acceso al Sistema

Si todo se realizó correctamente, podrás acceder al sistema:

### URL de acceso
```
pro8.test
```

### Credenciales por defecto
- **Usuario:** admin@gmail.com
- **Contraseña:** 123456

---

## Solución de Problemas

Si tienes problemas para visualizar el aplicativo, verifica los permisos en las carpetas `storage` y `bootstrap/cache`, ya que son críticos para el funcionamiento del sistema.