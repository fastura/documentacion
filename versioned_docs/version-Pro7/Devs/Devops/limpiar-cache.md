# Guía para Limpiar Cache de Laravel 

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
docker exec -it [nombre_contenedor_fmp] /bin/bash
```

## 2. Limpieza de Cache del Sistema

Una vez dentro del contenedor, ejecutar los siguientes comandos de Laravel para limpiar el cache:

```bash
php artisan config:cache && php artisan cache:clear && php artisan optimize:clear
```

### Descripción de los comandos:
- `php artisan config:cache`: Reconstruye el cache de configuración
- `php artisan cache:clear`: Limpia todo el cache de la aplicación
- `php artisan optimize:clear`: Limpia todos los archivos de optimización compilados

