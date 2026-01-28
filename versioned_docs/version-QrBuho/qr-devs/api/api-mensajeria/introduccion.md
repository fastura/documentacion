---
id: introduccion
title: "QR Buho – Comunicación WhatsApp"
description: "Envía mensajes, gestiona conversaciones, crea grupos, organiza contactos y lanza campañas en WhatsApp de forma profesional."
sidebar_label: Comunicación WhatsApp
sidebar_position: 2
hide_title: true
custom_edit_url: null
---

import Heading from "@theme/Heading";
import SchemaTabs from "@theme/SchemaTabs";
import TabItem from "@theme/TabItem";
import Admonition from "@theme/Admonition";

<Heading
  as={"h1"}
  className={"openapi__heading"}
  children={"QR Buho – Comunicación WhatsApp"}
>
</Heading>

¡Bienvenido al módulo **Comunicación WhatsApp** de QR Buho!  

Aquí tienes todo lo que necesitas para conectar tu negocio con los clientes por WhatsApp de manera efectiva y profesional.

Con este módulo puedes:
- Enviar mensajes individuales o masivos (texto, fotos, videos, audios, encuestas, ubicaciones y más).
- Gestionar tus conversaciones diarias (ver chats, marcar como leídos, archivar o eliminar).
- Crear y administrar grupos (para comunidades, promociones o clientes VIP).
- Organizar contactos con etiquetas (por ejemplo: "Interesado", "Compró", "Pendiente").
- Configurar alertas automáticas para saber al instante cuando alguien responde o interactúa.
- Lanzar campañas de mensajería con seguimiento de resultados.

<Admonition type="info" title="Importante: Requiere clave de acceso">
  **Todos los endpoints necesitan tu clave de acceso (Bearer Token)**.  
  Inclúyela siempre en el header de cada petición:

¿Aún no tienes clave? Sigue los pasos abajo para obtenerla.
</Admonition>

### Autenticación – Cómo obtener tu clave de acceso

1. **Conecta tu WhatsApp**:
 - Envía una petición POST a `/devices/connect` o `/api/auth/login` (ver ejemplos en la sección correspondiente).
 - La API te responderá con un **código QR** (en formato base64 o como enlace).

2. **Escanea el QR**:
 - Abre WhatsApp en tu celular → Ajustes → Dispositivos vinculados → Vincular dispositivo.
 - Escanea el QR que te dio la API.

3. **Obtén tu clave**:
 - Una vez escaneado, la API genera tu **clave de acceso segura** (Bearer Token / JWT).
 - Guárdala en un lugar seguro – ¡la necesitarás para todo!

<SchemaTabs className={"openapi-tabs__security-schemes"}>
<TabItem label={"Clave de acceso (Bearer)"} value={"bearerAuth"}>
  - **Tipo**: HTTP Bearer
  - **Formato**: JWT
  - **Header obligatorio**:
</TabItem>
</SchemaTabs>

### ¿Listo para empezar?
1. Conecta tu WhatsApp escaneando el QR.
2. Prueba enviando un mensaje simple.
3. Organiza tus chats y contactos.
4. Lanza tu primera campaña.

Explora las funciones disponibles y ¡potencia tu comunicación con WhatsApp hoy mismo!
