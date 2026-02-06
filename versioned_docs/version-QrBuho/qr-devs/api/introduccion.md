---
sidebar_position: 1
---

# Introducción a la API de QR Buho

Bienvenido a la **documentación oficial de la API de QR Buho** 🚀

Aquí encontrarás todo lo necesario para integrar nuestras potentes funcionalidades de **gestión multi-empresa (multitenant)** y **mensajería avanzada de WhatsApp** directamente en tus aplicaciones, CRMs, bots o sistemas internos.

Con QR Buho puedes automatizar campañas masivas, gestionar sesiones de WhatsApp mediante QR, enviar mensajes multimedia, etiquetar contactos, recibir eventos en tiempo real vía webhooks y mucho más — todo con una arquitectura SaaS segura, escalable y lista para producción.

## Categorías de APIs

Nuestras APIs están organizadas en tres grandes grupos según su propósito:

- **API de Aplicación** → Core del sistema (nuestra propia API multitenant)  
- **API de Mensajería** → Integración externa con Evolution API (funcionalidades avanzadas de WhatsApp)  
- **APIs Externas** → Integraciones complementarias con servicios de terceros

## 🌍 URLs Base

| Rol                | Descripción                                           | URL Base                        | Ejemplo                                           |
|--------------------|-------------------------------------------------------|---------------------------------|---------------------------------------------------|
| **Reseller** | Gestión global: planes, clientes, billing, etc.       | `https://qr.buho.la`           | `https://qr.buho.la/api/plan/list`               |
| **Cliente** | Operaciones específicas de cada empresa              | `https://{cliente_id}.buho.la`  | `https://empresa1.buho.la/api/devices/list`      |

> **Tip dinámico**: En la documentación interactiva puedes cambiar `{cliente_id}` (por defecto `demo`) para probar contra tu propio subdominio.

## 🔐 Autenticación

Todos los endpoints protegidos requieren autenticación mediante **Bearer Token** (JWT).

**Pasos para obtener tu token:**

1. Realiza login según tu rol:
   - **Reseller**: `POST https://qr.buho.la/auth/login`
   - **Cliente**: `POST https://{cliente_id}.buho.la/api/auth/login`

2. Incluye el token en todas las peticiones:

```http
Authorization: Bearer <tu_token_de_acceso>
Content-Type: application/json
```

## 📚 Módulos Principales

### API de Aplicación (Core propio)

**Reseller**
- Gestión de administradores y sesión
- Creación, edición y suspensión de clientes
- Planes y suscripciones
- Reportes globales y billing

**Cliente**
- **Devices** → Vinculación y control de sesiones WhatsApp (QR, reconexión, logout)
- **Campaigns** → Mensajería masiva y programada
- **Send Message** → Envío individual (texto, imágenes, audio, video, documentos, plantillas)
- **Contacts & Labels** → Gestión de contactos y etiquetas
- **Chats & Groups** → Interacción con conversaciones y grupos

### API de Mensajería (Evolution API)

Funcionalidades avanzadas del proveedor externo:
- Envío de mensajes
- Gestión completa de chats
- Webhooks en tiempo real
- Administración de grupos
- Llamadas (voice calls)
- Etiquetas (labels)

### APIs Externas

Integraciones adicionales disponibles (Stripe, Mercado Pago, Firebase, analytics, etc.).

## 🚀 Primeros Pasos Recomendados

**Si eres Reseller** → Ve a **API de Aplicación > Reseller** y crea tu primer cliente.  
**Si eres Cliente** → Dirígete a **Mensajería > Devices**, escanea el QR y vincula tu número de WhatsApp.  
**Luego** → Prueba el endpoint **Send Message** — es el más usado y el mejor para validar que todo funciona.

¡Estás listo para construir integraciones increíbles!