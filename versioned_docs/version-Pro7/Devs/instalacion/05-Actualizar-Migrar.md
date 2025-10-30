---
title: Actualizar o Migrar el Sistema
description: "Guía para actualizar el sistema Pro7 o migrar desde Pro6."
sidebar_position: 5
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Guía para Actualizar o Migrar el Sistema

## ⚠️ Migración de Servidor GitLab

**Hemos migrado nuestro servidor de GitLab.** Si aún no has actualizado la URL del repositorio, te recomendamos verificar y cambiar la configuración antes de continuar.

**Nueva URL:** `git.buho.la`

---

## 📋 Pre Requisitos

Antes de comenzar, asegúrate de tener:
- Acceso SSH al servidor
- Credenciales válidas de GitLab (usuario y token)
- Permisos para ejecutar comandos Docker
- Una suscripción activa para migrar de Pro6 a Pro7

---

## Guías Disponibles

<DocsCards>
  <DocsCard 
    header="Actualización Estándar"
    href="#3-actualización-estándar"
  >
    <p>Para usuarios que ya tienen Pro7 y solo necesitan actualizar a la última versión.</p>
  </DocsCard>

  <DocsCard
    header="Migración Pro6 → Pro7"
    href="#4-migración-de-pro6-a-pro7"
  >
    <p>Para clientes que desean migrar desde Pro6 a la nueva versión Pro7. Requiere suscripción activa.</p>
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

Si necesitas actualizar la URL:
```bash
git remote set-url origin https://git.buho.la/facturaloperu/facturador/pro7.git
```

---

## 3. Actualización Estándar

### 3.1 Descargar cambios
```bash
git pull origin main
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

## 4. Migración de Pro6 a Pro7

> **⚠️ Importante:** Debes tener una **suscripción activa** para realizar esta migración. Si tu suscripción no está vigente, contacta al área comercial antes de continuar.

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
git pull origin main
git reset --hard origin/main
git stash apply
```

### 4.4 Verificación post-migración
- Confirma que todos los datos se migraron correctamente
- Verifica el funcionamiento de las principales funcionalidades
- Revisa y ajusta configuraciones según tus necesidades

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

---

## Precauciones y Recomendaciones

### ⚠️ Precauciones
- El comando `git reset --hard origin/main` eliminará **todos** los cambios locales no guardados
- Siempre usar `git stash` para preservar trabajo no confirmado
- Verificar permisos de archivos después de actualizaciones

### 🚫 Evitar
- Actualizar en horarios de alta demanda
- Saltar el proceso de respaldo
- Ignorar mensajes de advertencia

---

