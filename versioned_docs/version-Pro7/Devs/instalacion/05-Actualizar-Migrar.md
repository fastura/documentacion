# 🛠️ Guía para Actualizar o Migrar el Sistema

## 1. Acceso al Servidor

1. Conéctate a tu servidor por SSH:
   ```bash
   ssh [usuario]@[ip]
   ```

2. Verifica los contenedores activos:
   ```bash
   docker ps
   ```

3. Ingresa al contenedor FPM:
   ```bash
   docker exec -it [nombre_contenedor_fpm] /bin/bash
   ```

---

## 2. Preparar el Entorno

:::tip Recomendación
Antes de actualizar, revisa si tienes cambios locales para evitar conflictos.
:::

1. Verifica el estado de tu repositorio:
   ```bash
   git status
   ```

2. Si tienes cambios locales, guárdalos temporalmente:
   ```bash
   git stash
   ```

---

## 3. Descargar Actualizaciones

1. Descarga los últimos cambios del repositorio:
   ```bash
   git pull origin main
   ```
   :::info
   Si se te solicita, ingresa tus credenciales de GitLab (usuario y token).
   :::

2. Si guardaste cambios con `git stash`, recupéralos:
   ```bash
   git stash apply
   ```

---

## 4. Aplicar Migraciones y Optimizar

Ejecuta los siguientes comandos para aplicar migraciones y limpiar cachés:

```bash
php artisan migrate
php artisan tenancy:migrate
php artisan config:cache
php artisan cache:clear
php artisan optimize:clear
```

O bien, puedes ejecutarlos en una sola línea:
```bash
php artisan migrate ; php artisan tenancy:migrate ; php artisan config:cache ; php artisan cache:clear ; php artisan optimize:clear
```

---

## 5. Pasos para Migrar de Sistema Pro6 a Pro7

A continuación, se detallan los pasos recomendados para migrar tu sistema desde Pro6 a Pro7:

1. **Respalda tu información:** Antes de iniciar la migración, realiza una copia de seguridad completa de tu base de datos y archivos del sistema Pro6.
2. **Prepara el entorno:** Asegúrate de que tu servidor cumpla con los requisitos mínimos para Pro7 (versión de PHP, extensiones, etc.).
3. **Verifica la migración:** Revisa que todos los datos y funcionalidades estén correctamente migrados y funcionando en Pro7.
4. **Actualiza configuraciones:** Ajusta las configuraciones necesarias en Pro7 según tus necesidades y preferencias.

:::danger ¡Importante!
Debes tener una **suscripción activa** para poder realizar la migración de Pro6 a Pro7. Si tu suscripción no está vigente, contacta al área comercial para renovarla antes de continuar.
:::

Si necesitas migrar el repositorio remoto o realizar una migración mayor:

1. Cambia la URL del repositorio remoto:
   ```bash
   git remote set-url origin https://gitlab.buho.la/facturaloperu/facturador/pro7.git
   ```

2. Verifica la URL:
   ```bash
   git remote -v
   ```

3. Repite los pasos de verificación y actualización:
   ```bash
   git status
   git add .
   git stash
   git pull origin main
   git reset --hard origin/main
   git stash apply
   ```

:::danger Importante
El comando `git reset --hard origin/main` eliminará todos los cambios locales no guardados. Asegúrate de respaldar tu trabajo antes de ejecutarlo.
:::

---

## 6. Notas y Buenas Prácticas

- El uso de `git stash` es solo necesario si tienes cambios locales pendientes.
- Siempre revisa los mensajes de error y advertencias durante el proceso.
