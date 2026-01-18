---
title: Mozo en cPanel
sidebar_position: 2
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# 🚀 Instalación de Mozo en cPanel

## 🔴 Avisos Importantes

::::danger ⚠️ IMPORTANTE - Migración de Servidor GitLab
**Hemos migrado nuestro servidor de GitLab.** Si aún no has cambiado la URL del sistema (del git para descargar los cambios, etc.), te sugerimos verificar primero.

**Nueva URL:** **`git.buho.la`**
::::

::::danger ⚠️ IMPORTANTE - Descargar FileZilla
Para el **Método Recomendado** va a necesitar descargar **FileZilla Client** desde:

**https://filezilla-project.org/**
::::

---

## ✅ Requisitos Previos

- 📦 **[Compilado Mozo](https://git.buho.la/mozo/compilado)** disponible
- 👤 Acceso a cuenta cPanel con privilegios de administrador
- 🌐 Navegador web actualizado
- 📡 Conexión a internet estable
- 🛠️ FileZilla instalado (para método recomendado)

---

## 📋 Proceso de Instalación

### 🌍 Paso 1: Creación del Dominio

1. **Acceso a cPanel**

   - Ingresar con credenciales de administrador

2. **Navegación**

   - Ir a: **Dominios** → **Crear un Nuevo Dominio**

3. **Configuración del dominio**
   - ✏️ Ingresar el nombre del dominio deseado
   - ⚠️ **CRÍTICO:** Desmarcar la casilla de configuración automática
   - 📁 Agregar `/public_html/` al final del campo "nombre de carpeta"

![Interfaz de creación de dominio](../devs/despliegue/plataformas/img/mozo_crear_nuevo_dominio.png)

::::warning NOTA CRÍTICA
Es fundamental desmarcar la casilla y agregar `/public_html/` para que la instalación funcione correctamente.
::::

---

### 📥 Paso 2: Descarga de Mozo Compilado

#### 2.1 Acceso al Repositorio

1. **Ingreso al portal**

   - 🔗 Navegar a: **https://git.buho.la/**

2. **Localización del proyecto**

   - 🔍 Buscar: `Mozo/Compilado`

3. **Descarga del código**

   - 🔵 Hacer clic en el botón **"Code"**
   - 📦 Seleccionar **"Download source code"**
   - 🗜️ Elegir formato **.zip**

   ![Descarga del código compilado](../devs/despliegue/plataformas/img/mozo_descargar_codigo_compilado.png)

4. **Almacenamiento local**
   - 💾 Guardar en carpeta de fácil acceso

---

### 📤 Paso 3: Subida de Archivos al Servidor

Elige el método que prefieras para subir los archivos. Te recomendamos el **Método FileZilla** para mayor confiabilidad:

<DocsCards>
  <DocsCard 
    header="🌐 Método cPanel"
    href="#método-1-cpanel-básico"
  >
    <p><strong>Rápido y sencillo</strong></p>
    <p>Subida directa desde la interfaz de cPanel. Ideal para instalaciones básicas sin personalización.</p>
    <ul>
      <li>✅ No requiere software adicional</li>
      <li>⚠️ Limitaciones con archivos grandes</li>
      <li>❌ No permite personalizar logos</li>
    </ul>
  </DocsCard>

<DocsCard
header="🛠️ Método FileZilla (Recomendado)"
href="#método-2-filezilla-recomendado"

>

    <p><strong>Método profesional</strong></p>
    <p>Subida avanzada con cliente FTP. Recomendado para instalaciones profesionales y personalización.</p>
    <ul>
      <li>✅ Mayor confiabilidad</li>
      <li>✅ Permite personalizar logos</li>
      <li>✅ Manejo de archivos grandes</li>
      <li>✅ Control total del proceso</li>
    </ul>

  </DocsCard>
</DocsCards>

---

## Método 1: cPanel (Básico)

::::note MÉTODO ALTERNATIVO
En caso de errores con este método, utilice el **Método 2 - FileZilla** que se encuentra más abajo.
::::

### 3.1 Navegación en cPanel

1. **Acceso a dominios**
   - 🏠 En cPanel → **Dominios**

![Panel de dominios](../devs/despliegue/plataformas/img/mozo_panel_dominios.png)

2. **Acceso al dominio**
   - 📂 Ingresar a la ruta del dominio creado

![Acceso al dominio](../devs/despliegue/plataformas/img/mozo_acceso_dominio.png)

3. **Función de carga**
   - ⬆️ Seleccionar **"Cargar"** o **"Upload"**

![Función de carga](../devs/despliegue/plataformas/img/mozo_funcion_carga.png)

### 3.2 Carga del Archivo ZIP

1. **Selección del archivo**
   - 📁 Elegir el archivo `.zip` descargado

![Selección de archivo](../devs/despliegue/plataformas/img/mozo_seleccion_archivo.png)

2. **Proceso de carga**
   - ⏳ Esperar que la barra indique "Completado"
   - 🔄 Regresar a la carpeta raíz del dominio

![Proceso completado](../devs/despliegue/plataformas/img/mozo_proceso_completado.png)

**👉 Si usaste este método, continúa con el [Paso 4: Extracción y Organización](#paso-4-extracción-y-organización)**

---

## Método 2: FileZilla (Recomendado)

::::success MÉTODO RECOMENDADO
✅ Mayor confiabilidad  
✅ Permite personalizar logos e imágenes  
✅ Mejor manejo de errores  
✅ Control total del proceso
::::

### Requisitos de Conexión

Antes de comenzar, necesitará obtener de su cPanel:

1. **📡 Shared IP Address** (Dirección IP compartida)
2. **👤 Usuario actual** de cPanel
3. **🔐 Contraseña** de cPanel

### 3.1 Conexión y Configuración

1. **Interfaz de FileZilla**

FileZilla funciona con una interfaz dividida:

- **📁 Sección izquierda:** Sus archivos locales (PC/laptop)
- **🌐 Sección derecha:** Carpetas de su cPanel

![Interfaz de FileZilla](../devs/despliegue/plataformas/img/mozo_filezilla_interfaz.png)

2. **Localización de la carpeta del dominio**

En su cPanel necesitará buscar la carpeta del dominio que creó:

- **📍 Recordar:** La creamos con el prefijo `/public_html/`
- **🎯 Ubicación:** Esto es crucial para localizar correctamente nuestra carpeta de trabajo

![Localización de carpeta](../devs/despliegue/plataformas/img/mozo_filezilla_localizacion_carpeta.png)

### 3.2 Acceso y Subida

1. **Acceso a la carpeta del dominio**

- **🖱️ Clic derecho** sobre la carpeta para abrirla
- **👁️ Visualizar** los dominios disponibles
- **✅ Seleccionar** el dominio donde instalaremos Mozo Compilado

![Acceso a carpeta de dominio](../devs/despliegue/plataformas/img/mozo_filezilla_acceso_carpeta_dominio.png)

2. **Subida de archivos**

::::info PREPARACIÓN PREVIA
En la sección izquierda debe tener su compilado **ya extraído** (en carpeta, no en ZIP).
::::

- **📂 Localizar** la carpeta del compilado en la sección izquierda
- **🖱️ Clic derecho** sobre la carpeta
- **⬆️ Seleccionar** la opción **"Subir"**
- **✅ Confirmar** la transferencia

![Subida de archivos](../devs/despliegue/plataformas/img/mozo_filezilla_subida_archivos.png)

::::success PROCESO COMPLETADO
Con esto habrá terminado la subida de archivos a cPanel usando el método recomendado de FileZilla.

**👉 Si usaste este método, ve directamente al [Paso 5: Configuración del Sistema](#paso-5-configuración-del-sistema)**
::::

---

### 📂 Paso 4: Extracción y Organización

::::note SOLO PARA MÉTODO 1
Si utilizó FileZilla (Método 2), puede omitir este paso ya que los archivos se subieron directamente extraídos. Vaya directamente al [Paso 5](#paso-5-configuración-del-sistema).
::::

#### 4.1 Extracción del ZIP

1. **Localización del archivo**

   - 🔍 Buscar el archivo ZIP en la carpeta raíz

2. **Proceso de extracción**
   - 🖱️ Clic derecho sobre el archivo
   - 📦 Seleccionar **"Extract"** (Extraer)

![Proceso de extracción](../devs/despliegue/plataformas/img/mozo_proceso_extraccion.png)

::::info LIMPIEZA
Ya puedes eliminar el archivo ZIP tras la extracción.
::::

#### 4.2 Organización de Archivos

1. **Acceso a la carpeta compilado**
   - 📁 Ingresar a la carpeta `compilado` creada

![Carpeta compilado](../devs/despliegue/plataformas/img/mozo_carpeta_compilado.png)

2. **Selección de archivos**

   - ☑️ Usar "Seleccionar todo"
   - ✅ Verificar que todos los archivos estén marcados

3. **Movimiento a raíz**
   - 🔄 Hacer clic en **"Mover"**

![Mover archivos](../devs/despliegue/plataformas/img/mozo_mover_archivos.png)

- 🎯 En el modal: seleccionar carpeta raíz del dominio
- 🧹 Eliminar prefijo `compilado-main` para dejar solo el nombre del dominio

![Selección de destino](../devs/despliegue/plataformas/img/mozo_seleccion_destino.png)

::::tip LIMPIEZA
Elimina la carpeta `compilado` vacía para mantener el orden.
::::

---

### ⚙️ Paso 5: Configuración del Sistema

#### 5.1 Configuración del .htaccess

1. **Creación del archivo**
   - 📄 Crear archivo `.htaccess` en la carpeta raíz

![Crear htaccess](../devs/despliegue/plataformas/img/mozo_crear_htaccess.png)

**Si el archivo no aparece:**

::::note Configuración de visibilidad
**Solución:** Ir al botón **"Configuración"** (esquina superior derecha) y activar **"Mostrar archivos ocultos"**
::::

![Configuración de archivos ocultos](../devs/despliegue/plataformas/img/mozo_configuracion_archivos_ocultos.png)

![Mostrar archivos ocultos](../devs/despliegue/plataformas/img/mozo_mostrar_archivos_ocultos.png)

2. **Contenido del archivo**
   - ✏️ Editar el archivo y agregar:

![Editar htaccess](../devs/despliegue/plataformas/img/mozo_editar_htaccess.png)

```apache
# Archivo necesario para funcionamiento SPA en Apache
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Condición: si el archivo o directorio solicitado no existe
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d

    # Redirigir todas las peticiones al index.html
    RewriteRule ^ index.html [L]
</IfModule>
```

3. **Guardado**
   - 💾 Guardar cambios y cerrar editor

#### 5.2 Configuración del config.json

1. **Localización del archivo**
   - 🔍 Buscar y abrir `config.json` en la raíz

![Localizar config.json](../devs/despliegue/plataformas/img/mozo_localizar_config_json.png)

2. **Verificación de rutas**
   - ✅ Verificar que la ruta principal esté configurada según su dominio

![Configurar config.json](../devs/despliegue/plataformas/img/mozo_configurar_config_json.png)

::::danger CRÍTICO - apiUrl
El `apiUrl` debe apuntar al sistema del cliente final. El cliente debe existir primero antes de configurar Mozo.

**📍 Importante:** Este es el dominio que usted creó cuando configuró al cliente en su panel de administración.

**Ejemplo:** Si su dominio principal es `pro8.com`, el apiUrl del cliente sería `cliente.pro8.com`
::::

3. **Ajustes finales**
   - 🔧 Realizar ajustes según configuración específica
   - 💾 Guardar cambios y cerrar archivo

---

## ✅ Verificación de la Instalación

### 🧪 Pasos de Verificación

1. **Acceso inicial**

   - 🌐 Ingresar al dominio desde navegador web

2. **Verificación de carga**

   - ✅ Confirmar que Mozo se carga correctamente

3. **Prueba de navegación**

   - 🔗 Probar navegación entre secciones

4. **Verificación de errores**
   - ❌ Confirmar ausencia de errores 404

### 🔐 Ruta de Acceso al Sistema

Una vez completada la instalación exitosamente:

```
{su_dominio}/auth/login
```

**📋 Ejemplos:**

- `mirestaurante.com` → `https://mirestaurante.com/auth/login`
- `pedidos.miempresa.com` → `https://pedidos.miempresa.com/auth/login`

---

## 🔧 Solución de Problemas

| 🚨 Problema               | 🔍 Posible Causa                | 💡 Solución                                     |
| ------------------------- | ------------------------------- | ----------------------------------------------- |
| Error 404 en navegación   | `.htaccess` mal configurado     | Verificar configuración del archivo `.htaccess` |
| Aplicación no carga       | Ruta incorreta en `config.json` | Revisar y corregir rutas en configuración       |
| Archivos no encontrados   | Archivos mal ubicados           | Verificar que archivos estén en carpeta raíz    |
| Error de subida en cPanel | Archivo muy grande o timeout    | Usar Método 2 - FileZilla                       |

---

## 📝 Notas Finales

::::info Recomendaciones

- **📋 Respaldo:** Mantener copia de seguridad antes de cambios
- **🔒 Seguridad:** Usar credenciales seguras para cPanel
- **📞 Soporte:** Consultar documentación o equipo de soporte ante problemas
- **🔄 Actualizaciones:** Mantenerse al día con actualizaciones del sistema
  ::::

---

::::success ¡Instalación Completada!
Su sistema Mozo debería estar funcionando correctamente. Si encuentra problemas, revise cada paso o consulte con soporte técnico.
::::
