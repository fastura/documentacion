---
title: Actualizar o Migrar el Sistema
description: "Guía para actualizar el sistema Pro 8 o migrar desde versiones anteriores."
sidebar_position: 5
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Guía para Actualizar o Migrar el Sistema

## ⚠️ Migración de Servidor GitLab

**Hemos migrado nuestro servidor de GitLab.** Si aún no has actualizado la URL del repositorio, te recomendamos verificar y cambiar la configuración antes de continuar.

**Nueva URL:** `git.buho.la`

---

:::danger IMPORTANTE - Migración desde Pro 7
Si estás actualizando desde **Pro 7 (rama main)** a **Pro 7.2**, **primero debes seguir los pasos del manual de migración**:

👉 [Manual de Upgrade Pro 7 a Pro 7.2](https://manual.uio.la/pro7/devs/despliegue/mantenimiento/actualizar-migrar)

**Nota:** Puede actualizar directamente, pero debe tener en cuenta los cambios importantes en:

- Dependencias del proyecto
- Estructura de archivos y carpetas
- Configuraciones del sistema

Se recomienda **seguir el manual oficial** para evitar problemas durante la migración.
:::

---

## 📋 Pre Requisitos

Antes de comenzar, asegúrate de tener:

- Acceso SSH al servidor
- Credenciales válidas de GitLab (usuario y token)
- Permisos para ejecutar comandos Docker
- Una suscripción activa para migrar desde versiones anteriores

---

## Guías Disponibles

<DocsCards>
  <DocsCard 
    header="Actualización Estándar"
    href="#3-actualización-estándar"
  >
    <p>Para usuarios que ya tienen Pro 7.2 y solo necesitan actualizar a la última versión.</p>
  </DocsCard>

<DocsCard
header="Migración Pro 7 → Pro 7.2"
href="#4-migración-de-pro-7-a-pro-7.2"

>

    <p>Para clientes que desean migrar desde Pro 7 a la nueva versión Pro 7.2. Requiere suscripción activa.</p>

  </DocsCard>

<DocsCard
header="Solución de Problemas"
href="#5-solución-de-problemas-comunes"

>

    <p>Ayuda para resolver errores comunes durante el proceso de actualización.</p>

  </DocsCard>
</DocsCards>

---

## 1. Conexión al Servidor

### 1.1 Acceso por SSH

```bash
ssh [usuario]@[ip]
```

### 1.2 Verificar contenedores activos

```bash
docker ps
```

### 1.3 Acceder al contenedor FPM

```bash
docker exec -it [nombre_contenedor_fpm] /bin/bash
```

---

## 2. Preparación del Entorno

> **💡 Tip:** Antes de actualizar, siempre revisa si tienes cambios locales para evitar conflictos.

### 2.1 Verificar estado del repositorio

```bash
git status
```

### 2.2 Guardar cambios locales (si los hay)

```bash
git stash
```

### 2.3 Verificar la URL del repositorio remoto

```bash
git remote -v
```

Necesitas actualizar la URL:

```bash
git remote set-url origin https://git.buho.la/facturaloperu/facturador/pro7.git
```

---

## 3. Actualización Estándar

### 3.1 Descargar cambios

```bash
git pull origin v7.2
```

> **ℹ️ Nota:** Si se solicitan credenciales, ingresa tu usuario y token de GitLab.

### 3.2 Recuperar cambios guardados (si aplicaste stash)

```bash
git stash apply
```

### 3.3 Aplicar migraciones y optimizaciones

Puedes ejecutar los comandos individualmente:

```bash
php artisan migrate
php artisan tenancy:migrate
php artisan config:cache
php artisan cache:clear
php artisan optimize:clear
```

O ejecutarlos en una sola línea:

```bash
php artisan migrate && php artisan tenancy:migrate && php artisan config:cache && php artisan cache:clear && php artisan optimize:clear
```

---

## 4. Migración de Pro 7 a Pro 7.2

> **⚠️ Importante:** Debes tener una **suscripción activa** para realizar esta migración. Si tu suscripción no está vigente, contacta al área comercial antes de continuar.

:::danger ATENCIÓN
Antes de migrar de Pro 7 a Pro 7.2, **es obligatorio seguir el manual oficial de upgrade**:

**👉 [Manual de Upgrade Pro 7 a Pro 7.2](https://manual.uio.la/pro7/devs/despliegue/mantenimiento/actualizar-migrar)**

Este manual incluye:

- Actualización de dependencias
- Cambios en la estructura del proyecto
- Configuraciones específicas necesarias
- Scripts de migración de base de datos

**No omitas este paso** o podrías experimentar errores críticos en el sistema.
:::

### 4.1 Cambiar repositorio remoto

```bash
git remote set-url origin https://git.buho.la/facturaloperu/facturador/pro7.git
```

### 4.2 Verificar configuración

```bash
git remote -v
```

### 4.3 Proceso de migración completa

```bash
git status
git add .
git stash
git pull origin v7.2
git reset --hard origin/v7.2
git stash apply
```

### 4.4 Verificación post-migración

- Confirma que todos los datos se migraron correctamente
- Verifica el funcionamiento de las principales funcionalidades
- Revisa y ajusta configuraciones según tus necesidades
- Comprueba que las nuevas dependencias de Pro 7.2 estén instaladas

---

## 5. Solución de Problemas Comunes

### Conflictos de merge

Si encuentras conflictos durante `git pull`:

```bash
git status                    # Ver archivos en conflicto
# Resuelve manualmente los conflictos
git add .                     # Agregar cambios resueltos
git commit -m "Resolver conflictos de merge"
```

### Errores de dependencias

Si encuentras errores relacionados con dependencias después de actualizar:

```bash
composer install
composer dump-autoload
```

---

## Precauciones y Recomendaciones

### ⚠️ Precauciones

- El comando `git reset --hard origin/main` eliminará **todos** los cambios locales no guardados
- Siempre usar `git stash` para preservar trabajo no confirmado
- Verificar permisos de archivos después de actualizaciones
- Realizar backup completo antes de migrar de Pro 7 a Pro 7.2

### 🚫 Evitar

- Actualizar en horarios de alta demanda
- Saltar el proceso de respaldo
- Ignorar mensajes de advertencia
- Migrar de Pro 7 a Pro 7.2 sin seguir el manual oficial

---
