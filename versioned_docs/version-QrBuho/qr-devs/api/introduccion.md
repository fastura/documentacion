---
sidebar_position: 1
---

# API Documentation

Bienvenido a la documentación de la API de **QR Búho**.

## Introducción

Esta documentación describe la **API pública de integración** de QR Búho, diseñada para permitir a sistemas externos operar **mensajería tipo WhatsApp** y **funcionalidades operativas del tenant** de forma programática, segura y escalable.

La API expone una capa **HTTP (REST)** orientada a integraciones *server-to-server*, permitiendo a aplicaciones backend **enviar mensajes, gestionar conversaciones, administrar grupos, etiquetas y dispositivos**, así como **recibir eventos** mediante webhooks, sin depender de interacciones manuales en una interfaz de usuario.

Esta documentación **no cubre funcionalidades de backoffice interno** ni operaciones exclusivas de administración de la plataforma.

## Características principales

- **Mensajería programática**: envío de mensajes de texto, multimedia e interactivos desde sistemas propios.
- **Gestión de conversaciones**: consulta, organización y control de chats y mensajes.
- **Administración de contactos y grupos**: verificación de números, gestión de grupos, participantes e invitaciones.
- **Clasificación operativa mediante etiquetas (labels)**.
- **Integración por eventos**: recepción de notificaciones mediante webhooks.
- **Soporte multi-tenant**: cada integración opera dentro del contexto de un tenant y sus dispositivos/instancias.

## Endpoints disponibles

### API del Tenant (Sistema)

Endpoints orientados a la **operación del tenant** desde sistemas externos:

- Gestión de dispositivos e instancias
- Configuración operativa
- Campañas
- Webhooks
- Estados y control de sesión

### API de Mensajería

Endpoints para operar mensajería y conversaciones:

- **Mensajes**
- **Chats**
- **Contactos**
- **Grupos**
- **Labels**
- **Presencia**
- **Estados**
- **Pruebas y simulaciones**

### API de Administración (limitada)

Endpoints administrativos **expuestos de forma controlada**, exclusivamente para:

- Bloqueo y desbloqueo de tenants
- Consulta de estado del tenant

> Las operaciones de creación, configuración comercial, branding, planes y subdominios forman parte del **backoffice interno** y no están expuestas como API pública.

## Autenticación

El acceso a la API requiere credenciales de autenticación válidas asociadas a un tenant.  
Los detalles de generación, rotación y uso de tokens se describen en la sección de **Seguridad y Autenticación**.

## Soporte

Para consultas técnicas, incidencias o soporte de integración, contacta con el equipo de soporte de QR Búho a través de los canales oficiales.
