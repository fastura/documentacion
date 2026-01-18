# Gestion Externa 

## Pasos para Configurar HTTPS

### 1. Instalación Inicial

Al ejecutar el script de instalación, **evita instalar el SSL** cuando se te consulte durante el proceso. Deberás ingresar **"n"**.

---

### 2. Dirigirse a la Ruta de Instalación

Una vez finalizada la instalación, accede al directorio del proyecto:

```bash
cd /root/{tudominio}
```

---

### 3. Editar el Archivo de Configuración

Abre el archivo `.env` con el editor nano:

```bash
nano .env
```

---

### 4. Modificar los Parámetros

Dentro del editor, ubica los siguientes parámetros y cámbielos:

| Parámetro | Antes | Después |
|-----------|-------|---------|
| APP_URL | `http://${APP_URL_BASE}` | `https://${APP_URL_BASE}` |
| FORCE_HTTPS | `false` | `true` |

**Ejemplo de cambios:**

```env
# Antes
APP_URL=http://${APP_URL_BASE}
FORCE_HTTPS=false

# Después
APP_URL=https://${APP_URL_BASE}
FORCE_HTTPS=true
```

---

### 5. Guardar y Salir del Editor

- Presiona `Ctrl + O` para guardar
- Presiona `Enter` para confirmar
- Presiona `Ctrl + X` para salir

---

### 6. Limpiar la Caché de la Aplicación

Ejecuta el siguiente comando para aplicar los cambios:

```bash
php artisan config:cache
```

---

## Importante

⚠️ **Consideraciones:**

- Con estos pasos habrás completado la configuración del lado de la herramienta
- **Hasta no tener un certificado SSL configurado, no podrás acceder a la herramienta**
- Recuerda **habilitar el puerto 443** en tu firewall para poder tener acceso a la aplicación mediante HTTPS

---

## Habilitar Puerto 443

Para habilitar el puerto 443 en tu firewall (UFW):

```bash
ufw allow 443/tcp
ufw reload
```

Verifica el estado del firewall:

```bash
ufw status
```