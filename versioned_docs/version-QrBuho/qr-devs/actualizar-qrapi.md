---
title: Actualizar QR API
description: "Guía completa para actualizar el sistema QR API después de la migración del servidor GitLab."
sidebar_position: 1
---

# 🔄 Actualizar QR API

:::danger ¡IMPORTANTE - Migración de Servidor GitLab!
**Hemos migrado nuestro servidor de GitLab.** Este proceso de actualización es necesario para conectar con la nueva URL del repositorio.
:::

## 📋 Descripción General

Esta guía te ayudará a actualizar tu sistema QR API después de la migración de nuestro servidor de GitLab. El proceso incluye cambiar la URL del repositorio y actualizar todas las dependencias.

:::info Nota Importante
Este proceso **solo se debe realizar una vez** después de la migración del servidor.
:::

## 🎯 Pasos de Actualización

### Paso 1: Cambiar URL del Repositorio

El primer paso es actualizar la URL del repositorio remoto para apuntar al nuevo servidor:

```bash
git remote set-url origin https://git.buho.la/qr-api/app.git
```

:::tip Verificación
Puedes verificar que la URL se cambió correctamente con:
```bash
git remote -v
```
:::

### Paso 2: Descargar Cambios

Descarga los últimos cambios del repositorio:

```bash
git pull origin main
```

:::info Credenciales
Si se te solicita, ingresa tus credenciales de GitLab (usuario y token).
:::

### Paso 3: Instalar Dependencias

#### 3.1 Instalar pnpm Globalmente

Si no tienes pnpm instalado globalmente:

```bash
npm i -g pnpm
```

#### 3.2 Instalar Dependencias del Proyecto

```bash
pnpm install
```

### Paso 4: Compilar el Proyecto

Genera los archivos de producción:

```bash
pnpm run build
```

### Paso 5: Ejecutar Migraciones

#### 5.1 Migración Principal

```bash
php artisan migrate
```

#### 5.2 Migración de Tenants

```bash
php artisan tenants:migrate
```

## 🔧 Comandos Completos

Si prefieres ejecutar todo en secuencia, puedes usar estos comandos:

```bash
# Cambiar URL del repositorio
git remote set-url origin https://git.buho.la/qr-api/app.git

# Descargar cambios
git pull origin main

# Instalar pnpm globalmente
npm i -g pnpm

# Instalar dependencias
pnpm install

# Compilar proyecto
pnpm run build

# Ejecutar migraciones
php artisan migrate
php artisan tenants:migrate
```

## ⚠️ Consideraciones Importantes

### Antes de Actualizar

:::warning Preparación
- **Respalda** tu base de datos antes de ejecutar las migraciones
- **Verifica** que tienes permisos de escritura en el directorio
- **Asegúrate** de que el servidor tiene suficiente espacio en disco
:::

### Durante la Actualización

- **No interrumpas** el proceso de migración
- **Revisa** los mensajes de error si aparecen
- **Espera** a que cada comando termine antes de ejecutar el siguiente

### Después de la Actualización

- **Verifica** que la aplicación funciona correctamente
- **Prueba** las funcionalidades principales
- **Revisa** los logs por posibles errores

## 🚨 Solución de Problemas

### Error de Conexión Git

Si tienes problemas para conectar con el nuevo repositorio:

```bash
# Verificar configuración de Git
git config --list

# Limpiar credenciales si es necesario
git config --global --unset credential.helper
```

### Error en Migraciones

Si las migraciones fallan:

```bash
# Limpiar caché
php artisan config:clear
php artisan cache:clear

# Reintentar migración
php artisan migrate --force
```

### Error en Dependencias

Si hay problemas con pnpm:

```bash
# Limpiar caché de pnpm
pnpm store prune

# Reinstalar dependencias
rm -rf node_modules
pnpm install
```

## 📋 Resumen de Comandos

| Paso | Comando | Descripción |
|------|---------|-------------|
| 1 | `git remote set-url origin https://git.buho.la/qr-api/app.git` | Cambiar URL del repositorio |
| 2 | `git pull origin main` | Descargar cambios |
| 3 | `npm i -g pnpm` | Instalar pnpm globalmente |
| 4 | `pnpm install` | Instalar dependencias |
| 5 | `pnpm run build` | Compilar proyecto |
| 6 | `php artisan migrate` | Ejecutar migración principal |
| 7 | `php artisan tenants:migrate` | Ejecutar migración de tenants |


---

:::success ¡Actualización Completada!
Una vez que hayas ejecutado todos los pasos, tu sistema QR API estará actualizado y funcionando con el nuevo servidor GitLab.
:::