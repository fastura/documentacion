# 🚀 PRO 7.2 - Mejoras del Sistema

## ✨ Features (Nuevas funcionalidades)

### Panel Administrador
- Nueva **gestión de pagos** para renovaciones del servicio
- Módulo de pago cron completo
- **Accesos personalizados** agregados
- Nuevo endpoint API para **bloquear o reactivar cuentas** (empresas)
- Opción para **mostrar u ocultar columnas** en la lista de empresas
- **Selector de temas** agregado en panel administrador
- Mejoras visuales en la lista de empresas para una navegación más clara
- Agregar red social **TikTok** en configuraciones
- Agregar descripciones amigables en selector de tareas
- Token de usuario añadido
- Funcionalidad de habilitación y deshabilitación según el límite de documentos

### UI/UX
- **Login personalizado** que ahora se adapta a su configuración
- Posibilidad de personalizar el color de fondo en el login de usuarios
- Actualizaciones de iconos, mejoras de espaciados
- Mejoras en la UI de planes en panel admin
- Mejoras en el módulo pagos (UI mejorada)
- Nuevo tema agregado
- Mejoras en la UI del tema default
- Soluciones de estilos en tema black
- Actualización de clases Bootstrap 5
- Pequeñas mejoras en configuraciones del admin
- Estilos mejorados en inputs, header y sidebar de panel administrador
- Actualizaciones en el sidebar, listados y formularios
- Actualizaciones en los filtros del dashboard
- Vista de detalle de pagos del cliente
- Sincroniza título del navegador con módulo y empresa
- Validaciones en el login

### Panel Clientes (Tenant)
- **Campo adicional para "consignado"** en direcciones de guías y comprobantes
- Consignados dentro de nota de venta y CPE (PDF - default)
- Soporte para **guías de remisión con entrega a terceros** (cliente final)
- **Agregar comprador en GRE** (Guía de Remisión Electrónica)
- Productos opcionales en GRE transportista
- Agregar MTC en información de compañía y PDF A4 de transportista
- Aumentar la longitud de observaciones en guías
- Observaciones de nota de venta hacia guías
- Agregar información de observación cuando se genere una nota de venta desde cotización

### E-commerce
- Nueva opción de **venta itinerante**
- Realizar la descarga de todos los productos existentes - WooCommerce & Listado
- Cambiar término "precio" por "total" en listado de documentos en tienda virtual
- Mejorar redirecciones en pedidos y ecommerce

### Reportes
- Reporte en segundo plano de productos generales
- Posibilidad de **reinicio manual de los reportes en cola**

### Facturación y Documentos
- **Validación de caja** antes de generar comprobantes
- **Restringe la selección de fecha anterior y futura** en la generación de CPE
- Mayor claridad en la visualización de **tareas programadas**
- Columna nueva sobre cobros fuera de fecha y total de todas las comisiones

### Sistema
- **Actualización automática del SSL** (con Cloudflare)
- Script de actualización de dependencias
- Documentación del upgrade y script de actualización
- Manual de actualización Laragon (entorno local)

## 🐛 Fixes (Correcciones)

### Backups y Sistema
- Actualizando ejecuciones con Process y solución a error dentro de backups
- Error de rutas repetidas
- Error de merging
- Cambio de estado cuando la cuenta está bloqueada
- Agregar sección de consideración de actualización

### PSE y Facturación Electrónica
- Error al decodificar CDR en PSE SendFact
- Servicio PSE por API
- Cambio de status en OSE SendFact y SendFact
- Error al capturar status cuando era rechazado y se cambiaba a anulado
- Nueva respuesta a la hora de obtener el CDR desde SUNAT

### Guías de Remisión (GRE)
- Error en guías, código 2566
- Habilitar PSE por API en GRE transportista
- Error al establecer un comprador en GRE transportista
- Error en dirección de envío en PDF default para guías
- Validación si existe el key `is_transport_m1l` dentro de DispatchInput
- Quitar validación de transportista en transporte público cuando se elige M1
- Ubigeo en PDF de GRE
- Error en migración para el número del comprador
- Agregar información de conductor y transportista cuando está la opción habilitada

### Notas de Venta y CPE
- Error de fechas que no generaba comprobantes desde nota de venta
- Al realizar la actualización del documento, cambiaba el usuario que lo creó desde un principio

### Reportes
- Búsqueda para reportes de detracción (error #46)
- Error de descarga masiva cuando se colocaba en cola
- Error de reporte general de caja para PDF A4
- Formato HTML para impresión de reporte

### Clientes y Consignados
- Filtrado en direcciones con consignado respecto al cliente seleccionado
- Agregar `has_consigned` cuando se busca cliente por API
- Errores de consignado y seleccionar vendedor respecto al usuario autenticado

### Cajas y Pagos
- Pagos generales en cajas
- Cambios en la descripción de caja

### E-commerce
- No se mostraban algunos ítems en paginados (se repetían productos)

### Otros
- Componente de QR API en configuración
- Precios unitarios respecto al valor del almacén en contrato y pedido
- Rango de valores para fecha de notificación
- No crear órdenes de pago para clientes que no establecieron su fecha de finalización
- Comisión fuera de rango
- Error al usar función `close` cuando el zip ya está cerrado
- Mala referencia en archivos JS
- Reverse app.js
- Editar ChangePass.php para ejecución del comando passwords
- Pequeños bugs en estilos arreglados
- Mejoras en dropdowns

## 🎨 Style (Estilos)

### Panel Administrador
- Ajustes al admin
- Actualizaciones menores en la UI
- Pequeñas mejoras en la UI de pagos
- Pequeñas mejoras en la UI de panel admin
- Mejoras en el módulo pagos
- Traducción de texto en página de error

### Panel Clientes
- Actualizaciones menores en la UI
- Pequeñas actualizaciones en la UI
- Actualización de estilos en listado de clientes y actualización de iconos

## 🚀 Features Destacadas

### Funcionalidad para evitar pasar a producción
- Validación que **evita pasar a producción si tienes documentos** pendientes o en proceso

### Filtros y Columnas
- **Filtros y mostrar/ocultar columnas** agregado en listado de clientes

### Mejoras en Configuraciones
- Mejoras en el orden de formularios en configuraciones

### Restricciones y Validaciones
- Restringe la selección de fecha futura en la generación de CPE
- Agregar mensaje de aviso para abrir caja

---

## 📋 Tecnologías Base
- **Laravel 9 + PHP 8**
- **Ubuntu 24.04 LTS**
- **Bootstrap 5** actualizado
- **Acceso 100% a repositorio + soporte**
- **Cloudflare SSL** automatizado

----

