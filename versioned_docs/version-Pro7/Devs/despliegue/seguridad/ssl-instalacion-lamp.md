---
title: Actualizar SSL en Instalación LAMP
description: "Guía para renovar o actualizar certificados SSL en servidores con instalación LAMP."
sidebar_position: 3
---

# Actualizar SSL en Instalación LAMP

Esta guía explica cómo actualizar o renovar certificados SSL en servidores con instalación LAMP (Linux, Apache, MySQL, PHP).

---

## 📋 Pre Requisitos

Antes de comenzar, asegúrate de tener:

- Acceso SSH al servidor
- Permisos de superusuario (root)
- Certbot instalado en el servidor
- Dominio configurado y apuntando al servidor
- Puerto 80 y 443 abiertos en el firewall

---

## Proceso de Actualización

### 1. Conexión al Servidor

Acceda al servidor mediante SSH y conviértase en superusuario:

```bash
ssh usuario@servidor
```

Utilice el siguiente comando para convertirse en superusuario:

```bash
sudo su
```

---

### 2. Ubicación para Ejecutar el Comando

> **⚠️ Importante:** El comando debe ejecutarse **fuera de la carpeta del proyecto**.

Navegue a un directorio seguro, como el home del usuario root:

```bash
cd ~
```

O al directorio raíz:

```bash
cd /
```

---

### 3. Generar Certificado SSL

Ejecute el comando de Certbot para generar el certificado wildcard:

```bash
sudo certbot certonly --manual --preferred-challenges=dns \
  --email admin@example.com \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --agree-tos \
  -d example.com \
  -d *.example.com
```

#### Parámetros a personalizar:

| Parámetro | Descripción                         | Ejemplo           |
| --------- | ----------------------------------- | ----------------- |
| `--email` | Correo electrónico de administrador | `admin@gmail.com` |
| `-d`      | Dominio principal                   | `tudominio.com`   |
| `-d *`    | Subdominio wildcard                 | `*.tudominio.com` |

**Ejemplo completo:**

```bash
sudo certbot certonly --manual --preferred-challenges=dns \
  --email correo@gmail.com \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --agree-tos \
  -d tudominio.com \
  -d *.tudominio.com
```

---

### 4. Verificación DNS

Durante el proceso, Certbot solicitará que agregue registros TXT en su DNS:

1. **Copie el valor TXT** que muestra Certbot
2. **Acceda a su proveedor de DNS** (Cloudflare, GoDaddy, etc.)
3. **Agregue un registro TXT** con estos datos:

   - **Tipo:** TXT
   - **Nombre:** `_acme-challenge`
   - **Valor:** El texto proporcionado por Certbot
   - **TTL:** 120 (o el mínimo permitido)

4. **Espere la propagación DNS** (puede tardar 1-5 minutos)
5. **Verifique la propagación** usando:

   ```bash
   nslookup -type=TXT _acme-challenge.tudominio.com
   ```

6. **Presione Enter en Certbot** cuando esté listo

> **💡 Tip:** Si tiene múltiples dominios (-d), deberá crear un registro TXT para cada uno.

---

### 5. Reiniciar el Servicio Apache

Una vez generado el certificado exitosamente, reinicie Apache:

```bash
service apache2 restart
```

O alternativamente:

```bash
systemctl restart apache2
```

---

### 6. Verificar la Instalación

#### 6.1 Verificar estado de Apache

```bash
systemctl status apache2
```

Debe mostrar `active (running)` en verde.

#### 6.2 Verificar certificado

```bash
sudo certbot certificates
```

Este comando mostrará todos los certificados instalados, su fecha de expiración y los dominios asociados.

#### 6.3 Probar en el navegador

1. Acceda a su dominio usando `https://`
2. Verifique que el candado esté cerrado
3. Revise los detalles del certificado (debe mostrar Let's Encrypt)
4. Confirme la fecha de expiración (90 días desde la emisión)

---

\_Sistema de Facturación Pro 8
