---
title: Cambio de Dominio
description: "Guía completa para cambiar el dominio en una instalación activa con Docker."
sidebar_position: 6
---

# Cambio de Dominio

Esta guía explica cómo cambiar el dominio en una instalación activa del sistema de facturación utilizando Docker.

---

## 📋 Pre Requisitos

Antes de comenzar, asegúrate de tener:

- Acceso SSH al servidor
- Permisos de superusuario (root)
- El nuevo dominio configurado y apuntando al servidor
- Backup reciente de la base de datos

> **⚠️ Importante:** Este proceso requiere detener temporalmente los servicios. Planifica el cambio en un horario de baja demanda.

---

## Pasos para el Cambio de Dominio

### 1. Conexión al Servidor

Conéctese mediante SSH:

```bash
ssh usuario@servidor
```

Y acceda como superusuario:

```bash
sudo su
```

---

### 2. Navegar a la Carpeta del Proyecto

Acceda a la carpeta del facturador:

```bash
cd /ruta/facturador
```

> **💡 Tip:** La ruta común suele ser `root/{tudominio}`

---

### 3. Actualizar Archivo de Configuración `.env`

Edite el archivo de entorno:

```bash
nano .env
```

Modifique el parámetro `APP_URL_BASE` con el nuevo dominio:

```env
APP_URL_BASE=nuevoDominio.com
```

**Ejemplo:**

```env
APP_URL_BASE=example.com
```

Guardar los cambios:

- Presione `Ctrl + X`
- Presione `Y` para confirmar
- Presione `Enter`

---

### 4. Actualizar Configuración de Docker

Edite el archivo Docker Compose:

```bash
nano docker-compose.yml
```

Busque y modifique el parámetro `VIRTUAL_HOST`:

```yaml
VIRTUAL_HOST: nuevoDominio.com, *.nuevoDominio.com
```

**Ejemplo:**

```yaml
VIRTUAL_HOST: example.com, *.example.com
```

Guardar los cambios (`Ctrl + X`, `Y`, `Enter`)

---

### 5. Reiniciar Servicios Docker

#### 5.1 Detener los servicios del proyecto

```bash
docker-compose down
```

#### 5.2 Reiniciar el proxy

```bash
docker restart proxy_proxy_1
```

> **ℹ️ Nota:** El nombre del contenedor proxy puede variar. Use `docker ps -a` para verificar el nombre exacto.

#### 5.3 Iniciar los servicios del proyecto

```bash
docker-compose up -d
```

---

### 6. Limpiar Caché del Sistema

#### 6.1 Listar contenedores activos

```bash
docker ps
```

Identifique el contenedor `fpm` (usualmente termina en `_fpm_1`)

#### 6.2 Acceder al contenedor FPM

```bash
docker exec -it [nombre_contenedor_fpm] bash
```

**Ejemplo:**

```bash
docker exec -it facturador_fpm_1 bash
```

#### 6.3 Limpiar caché de Laravel

Dentro del contenedor, ejecute:

```bash
php artisan config:cache
php artisan cache:clear
php artisan optimize:clear
```

#### 6.4 Salir del contenedor

```bash
exit
```

---

### 7. Actualizar Base de Datos (Si tiene clientes registrados)

Si existen clientes registrados en el sistema, debe actualizar la tabla de hostnames:

1. Acceda a la base de datos de administrador
2. Localice la tabla `hostnames`
3. Edite el campo `fqdn` actualizando los dominios registrados

### 8. Configurar SSL (Si aplica)

Si su instalación utiliza certificados SSL, debe actualizar los certificados para el nuevo dominio:

👉 **[Manual de Instalación/Actualización SSL](../../../despliegue/seguridad/instalar-ssl.md)**

---

### 9. Verificación Final

#### 9.1 Limpiar caché del navegador

En su navegador:

- **Chrome/Edge:** `Ctrl + Shift + Delete`
- **Firefox:** `Ctrl + Shift + Delete`
- Seleccione "Todo el tiempo" y limpie caché e imágenes

#### 9.2 Verificar acceso

1. Acceda al nuevo dominio desde el navegador
2. Verifique que cargue correctamente
3. Pruebe el login y funciones principales
4. Revise que no haya errores en la consola del navegador

---

## Solución de Problemas

### El sitio no carga después del cambio

**Posibles causas:**

- El dominio no está apuntando correctamente al servidor
- Los servicios Docker no se reiniciaron correctamente
- Problemas con el certificado SSL

**Solución:**

```bash
# Verificar estado de contenedores
docker ps

# Revisar logs del contenedor nginx
docker logs [nombre_contenedor_nginx]

# Reiniciar servicios si es necesario
docker-compose restart
```

---

### Error 502 Bad Gateway

**Solución:**

```bash
# Reiniciar el proxy
docker restart proxy_proxy_1

# Verificar que el contenedor FPM esté activo
docker ps | grep fpm
```

---

### Certificado SSL no válido

Si el sitio muestra advertencia de certificado:

1. Verifique que siguió el manual de SSL
2. Regenere el certificado con Let's Encrypt
3. Reinicie el contenedor nginx

---

## Checklist de Verificación

Antes de dar por finalizado el cambio, verifique:

- [ ] El nuevo dominio carga correctamente
- [ ] El login funciona sin errores
- [ ] Los certificados SSL están activos (si aplica)
- [ ] La tabla `hostnames` fue actualizada (si hay clientes)
- [ ] Las funciones principales del sistema operan normalmente
- [ ] No hay errores en los logs de Docker
- [ ] Los clientes pueden acceder a sus subdominios (si aplica)

_Sistema de Facturación Pro 8_
