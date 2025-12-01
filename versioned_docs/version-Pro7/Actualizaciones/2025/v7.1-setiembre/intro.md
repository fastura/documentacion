---
slug: /v7.1
---
# PRO 7.1 - Setiembre

## Introducción

**PRO 7.1** representa una actualización significativa del Sistema de Facturación Pro 7, incorporando nuevas tecnologías, mejoras de rendimiento y funcionalidades avanzadas para optimizar la gestión de tu negocio.

Esta versión trae consigo una modernización completa de la plataforma, nuevas integraciones PSE y mejoras sustanciales en la experiencia del usuario.

---

## 🎯 Características Principales

### Actualizaciones Tecnológicas

- **Laravel 9 + PHP 8**: Framework actualizado para mejor rendimiento y seguridad
- **Ubuntu 24.04 LTS**: Compatible con la última versión LTS de Ubuntu
- **Plantilla PDF Unificada**: Nueva plantilla default unificada para todos los documentos
- **Tema Black Actualizado**: Interfaz modernizada con diseño mejorado

### Nuevas Funcionalidades Core

- **Acceso Maestro**: Control desde superadmin para gestión centralizada
- **Registro Automático**: Simplificación en la creación de subcuentas
- **Correos Automáticos**: Sistema de notificaciones desde el administrador
- **PSE Integradas**: 4 nuevas integraciones de Proveedores de Servicios Electrónicos
- **Diseño POS 100% Responsive**: Interfaz completamente adaptable a cualquier dispositivo

---

## 📊 Resumen de Actualizaciones

### ✨ Nuevas Funcionalidades (Features)

| Categoría | Cantidad | Destacados |
|-----------|----------|------------|
| **E-commerce** | 4 | Gestión de pedidos y filtros avanzados |
| **UI/UX** | 7 | Login personalizable, tooltips mejorados |
| **Facturación** | 3 | Recargos y guías de transportista |
| **Reportes** | 2 | Descarga masiva en segundo plano |
| **POS** | 1 | Diseño 100% responsive |
| **Sistema** | 5 | Panel de soporte, módulo de pagos |

### 🐛 Correcciones (Fixes)

| Categoría | Cantidad | Destacados |
|-----------|----------|------------|
| **PSE** | 9 | 4 nuevas integraciones + correcciones |
| **Documentos** | 4 | Validaciones XML y generación CDR |
| **Inventario** | 2 | Kardex y análisis comercial |
| **Pagos** | 2 | Cálculos y apertura de caja |
| **Otros** | 10+ | Múltiples mejoras de estabilidad |

### 🔧 Mejoras de Código

- Refactorización de módulo de anulaciones
- Optimización de namespaces y estructura
- Mejoras en seeders y factories

---

## 🚀 Actualizaciones Destacadas

### 1. Nuevas Integraciones PSE

Se han integrado **4 nuevos Proveedores de Servicios Electrónicos** al sistema, ampliando las opciones de facturación electrónica:

#### PSE Disponibles

**QPSE**
- Nueva integración completa
- Soporte para facturación y GRE
- Validación de respuestas mejorada

**SendFact**
- Integración añadida
- Gestión automática de estados
- Corrección de cambio de estado en comprobantes rechazados

**Validapse**
- Nueva integración
- Validación avanzada de documentos
- Soporte completo para facturación electrónica

**Gior Technology**
- Integración existente mejorada
- Mayor estabilidad en el envío

#### Mejoras en PSE

- ✅ Corrección de errores en validación de status de respuesta
- ✅ Mejora en validación de errores para PSE y OSE
- ✅ Corrección del retorno de error al firmar XML
- ✅ Parser de JSON mejorado para errores de PSE
- ✅ Gestión automática de estados de comprobantes

---

### 2. Acceso Maestro desde Superadmin

Nueva funcionalidad que permite al administrador principal tener **control centralizado** sobre todas las cuentas del sistema.

#### Beneficios

- 🔐 **Gestión Centralizada**: Control total desde una sola interfaz
- 🚀 **Soporte Rápido**: Acceso directo para resolver incidencias
- 👥 **Gestión de Subcuentas**: Administración simplificada de múltiples clientes
- 🔧 **Configuración Remota**: Ajustes sin necesidad de acceso individual

#### Características

- Acceso directo a cualquier cuenta sin necesidad de credenciales
- Panel de control unificado para todas las instalaciones
- Registro de actividades y auditoría de accesos
- Opciones avanzadas de configuración global

---

### 3. Registro Automático para Subcuentas

Simplifica significativamente el proceso de creación y gestión de nuevas cuentas en el sistema.

#### Ventajas

- ⚡ **Proceso Simplificado**: Reducción del tiempo de registro
- 📧 **Notificaciones Automáticas**: Envío de credenciales por email
- 🔄 **Configuración Predefinida**: Parámetros iniciales automáticos
- ✅ **Validaciones Integradas**: Verificación automática de datos

---

### 4. Correos Automáticos desde el Administrador

Sistema de notificaciones por email completamente automatizado para mantener informados a tus clientes.

#### Funcionalidades

- 📨 **Envío Automático de Comprobantes**: Los documentos se envían automáticamente al email del cliente
- 🔔 **Notificaciones de Estado**: Alertas sobre el estado de documentos electrónicos
- 📋 **Plantillas Personalizables**: Diseña el formato de tus correos
- 📊 **Registro de Envíos**: Historial completo de emails enviados

#### Configuración

- Configuración desde el panel del administrador
- Selección de eventos que disparan emails
- Personalización de remitente y contenido
- Gestión de listas de distribución

---

### 5. Diseño de Productos POS 100% Responsive

Interfaz completamente rediseñada para ofrecer una experiencia óptima en cualquier dispositivo.

#### Características

- 📱 **Adaptable a Cualquier Pantalla**: Desde smartphones hasta tablets y monitores
- 🎨 **Interfaz Moderna**: Diseño actualizado y más intuitivo
- ⚡ **Rendimiento Optimizado**: Carga rápida y navegación fluida
- 👆 **Touch Friendly**: Optimizado para pantallas táctiles

#### Mejoras Visuales

- Grid de productos adaptable
- Imágenes optimizadas con lazy loading
- Tooltips mejorados con información detallada (lote, fecha de vencimiento)
- Filtros y búsqueda más accesibles

---

### 6. Plantilla PDF Default Unificada

Nueva plantilla profesional y estandarizada para todos los documentos del sistema.

#### Beneficios

- 📄 **Uniformidad**: Todos los documentos con el mismo aspecto profesional
- 🎨 **Diseño Moderno**: Actualizado con las últimas tendencias de diseño
- 📱 **Optimización**: Mejor rendimiento en generación de PDFs
- 🔧 **Personalizable**: Fácil de adaptar a tu marca

---

### 7. Tema Black Actualizado

El tema oscuro ha sido completamente renovado con mejoras visuales y de usabilidad.

#### Mejoras

- 🌙 **Contraste Optimizado**: Mejor legibilidad en pantallas
- 🎨 **Paleta de Colores Actualizada**: Tonos más modernos
- 💻 **Performance Mejorado**: Carga más rápida de estilos
- ⚙️ **Login Personalizable**: Cambia el color de background del login

---

### 8. Módulo de Reportes Mejorado

Sistema de generación y descarga de reportes completamente renovado.

#### Nuevas Funcionalidades

- 📥 **Descarga Masiva en Segundo Plano**: Genera múltiples documentos sin bloquear el sistema
- 📊 **Módulo Reporte PDF**: Nueva interfaz para generación de reportes
- 📈 **Análisis Comercial Mejorado**: Validación de categorías en productos
- 🔍 **Filtros Avanzados**: Mejor control sobre la información mostrada

---

## 🔄 Otras Mejoras Significativas

### E-commerce y Tienda Virtual

- **Filtro de Rango de Fechas**: Mayor control sobre pedidos y comprobantes
- **Validación de Emails**: Mejora en la calidad de datos de clientes
- **Listado de Comprobantes**: Vista unificada de documentos de tienda
- **Cambio de Color**: Personalización visual de la tienda

### Facturación Avanzada

- **Recargo por Consumo**: Añade recargos en boletas y facturas
- **Guías de Transportista**: Nuevos correlativos y tipos de documento
- **Motivo de Traslado**: Vista específica para traslados entre establecimientos

### Cotizaciones

- **Envío por WhatsApp**: Comparte cotizaciones directamente desde el listado
- **Mejoras de Flujo**: Proceso de cotización más ágil

---

## 🛠️ Correcciones Técnicas

### Documentos Electrónicos

- ✅ Corrección de fecha de emisión en comprobantes desde nota de venta
- ✅ Error de XML en Nodo TaxTotal en notas corregido
- ✅ Extracción de información de CDR en guías mejorada
- ✅ Error de array a string en respuesta XML solucionado

### Pagos y Caja

- ✅ Cálculo correcto de total CPE para pagos al contado
- ✅ Apertura automática de caja al ingresar al módulo de venta

### Inventario y Kardex

- ✅ Error en kardex para notas de crédito con facturas externas
- ✅ Validación de categorías en análisis comercial

### Guías de Remisión

- ✅ Descripción en mayúscula para GRE transportista normalizada
- ✅ Mejor gestión de errores en envío de guías

---

## 📦 Mejoras de Arquitectura

### Código y Estructura

- **Namespaces Optimizados**: Mejor organización del código
- **Seeders y Factories**: Estructura mejorada para datos de prueba
- **Refactorización**: Módulo de anulaciones optimizado
- **Eliminación de Código Duplicado**: Mayor eficiencia

### Sistema

- **Panel de Soporte**: Nueva interfaz para gestión de tickets
- **Módulo de Pagos Reseller**: Gestión centralizada de suscripciones
- **Generación de Tenant**: Proceso optimizado

---

## 💡 Recomendaciones de Uso

### Para Nuevos Usuarios

1. Familiarízate con el nuevo diseño POS responsive
2. Configura los correos automáticos desde el inicio
3. Explora las nuevas integraciones PSE disponibles
4. Personaliza el login con los colores de tu marca

### Para Usuarios Actuales

1. Revisa la nueva plantilla PDF unificada
2. Actualiza tus configuraciones de PSE
3. Aprovecha el sistema de descarga masiva de reportes
4. Explora las mejoras en el módulo de e-commerce

---

## 📞 Soporte y Asistencia

¿Necesitas ayuda con la actualización o tienes preguntas sobre las nuevas funcionalidades?

Nuestro equipo de soporte está disponible para asistirte en:
- Migración desde versiones anteriores
- Configuración de nuevas PSE
- Personalización de plantillas y temas
- Capacitación sobre nuevas funcionalidades

