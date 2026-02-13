---
id: introduccion
title: "Comunicación WhatsApp"
description: "Envía mensajes, gestiona conversaciones, crea grupos, organiza contactos y lanza campañas en WhatsApp de forma profesional."
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
children={"Comunicación WhatsApp"}
>
</Heading>

¡Bienvenido al módulo **Comunicación WhatsApp** de QR Buho!  

Aquí tienes todo lo que necesitas para conectar tu negocio con los clientes por WhatsApp de manera efectiva y profesional.

Con este módulo puedes:
- Enviar mensajes individuales o masivos (texto, fotos, videos, audios, encuestas, ubicaciones y más).
- Gestionar tus conversaciones diarias (ver chats, marcar como leídos, archivar o eliminar).
- Crear y administrar grupos (para comunidades, promociones o clientes VIP).
- Organizar contactos con etiquetas.
- Lanzar campañas de mensajería con seguimiento de resultados.

<Admonition type="info" title="Importante: Requiere clave de acceso">
**Todos los endpoints necesitan tu clave de acceso (Bearer Token)**.  
Inclúyela siempre en el header de cada petición:

```json
Authorization: Bearer TU_TOKEN_DE_ACCESO
```

¿Aún no tienes tu clave de acceso? Sigue los pasos abajo para obtenerla.
</Admonition>

---

### Autenticación – Cómo obtener tu clave de acceso (Bearer Token)

1. **Inicia sesión en el sistema**:
 - Envía una petición POST al endpoint `/api/login` con tus credenciales de usuario (usuario y contraseña).
 - La API te responderá con un **Bearer Token** (clave de acceso segura).

   Ejemplo de cabecera para autenticación:
   ```json
   {
     "Authorization": "Bearer TU_TOKEN_DE_ACCESO"
   }
   ```

   **Nota:** Este token es único para tu cuenta de tenant y es necesario para autenticar todas las solicitudes a la API. Guárdalo en un lugar seguro.

    <Admonition type="note" title="Obten tu token">
      Ingresa [**aquí**](../api-aplicacion/tenant/auth/tenant-login.api.mdx) para obtener tu token. 
    </Admonition>

2. **Conecta tu número de WhatsApp**:
 - Envía una petición POST al endpoint `/devices/create`.
 - La API te responderá con un **código QR** (en formato base64 o como enlace).
 - Abre WhatsApp en tu celular → Ajustes → Dispositivos vinculados → Vincular dispositivo.
 - Escanea el QR que te dio la API para conectar tu número de WhatsApp al sistema Evolution.
 
    <Admonition type="note" title="Registra tu dispositivo">
      Ingresa [**aquí**](../api-aplicacion/tenant/device/create-device.api.mdx) para crear tu dispositivo. 
    </Admonition>

<Admonition type="note" title="Nota importante">
El QR **no genera el Bearer Token**. El QR solo sirve para conectar tu número de WhatsApp al sistema Evolution. El token que necesitas para autenticarte debe ser obtenido al iniciar sesión en el sistema.
</Admonition>

---

<SchemaTabs className={"openapi-tabs__security-schemes"}>
<TabItem label={"Clave de acceso (Bearer)"} value={"bearerAuth"}>
- **Tipo**: HTTP Bearer
- **Formato**: JWT
- **Header obligatorio**:
  ```json
  {
    "Authorization": "Bearer TU_TOKEN_DE_ACCESO"
  }
  ```
</TabItem>
</SchemaTabs>

---

### ¿Listo para empezar?
1. Inicia sesión para obtener tu Bearer Token (clave de acceso segura).
2. Conecta tu número de WhatsApp escaneando el QR proporcionado por la API.
3. Prueba enviando un mensaje simple.
4. Organiza tus chats y contactos.
5. Lanza tu primera campaña de mensajes.

Explora las funciones disponibles y ¡potencia tu comunicación con WhatsApp hoy mismo!