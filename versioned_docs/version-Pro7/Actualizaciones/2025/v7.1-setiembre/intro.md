# 🚀 PRO 7.1 - Mejoras del Sistema

## ✨ Features (Nuevas funcionalidades)

### E-commerce
- Filtro de rango de fechas y validación para emails en el modelo
- Listado de comprobantes y pedidos en tienda virtual
- Cambio de color en tienda virtual/órdenes

### UI/UX
- Login personalizado para cada tema
- Permitir cambiar color de background de login
- Vista de módulo de pago y cron
- Avance de corrección de estilos
- Mejoras de estilos de filtros en comprobantes y órdenes tienda virtual
- Nueva información en el tooltip en componente item (lote, fecha de vencimiento)

### Facturación
- Agregar recargo por consumo en boleta/factura
- Agregar guías de transportista en correlativos
- Vista para motivo de traslado entre establecimiento

### Cotizaciones
- Envío de WhatsApp en el listado de cotización

### Reportes
- Descarga masiva de documentos en segundo plano
- Módulo reporte PDF

### Sistema
- Panel de soporte agregado
- Subir compilados después de merge
- Namespaces y estructura de seeders y factories
- Módulo de pagos en reseller

### POS
- Diseño de Productos POS 100% responsive

## 🐛 Fixes (Correcciones)

### PSE (Nuevas integraciones)
- **QPSE** - Integración añadida
- **SendFact** - Integración añadida
- **Validapse** - Integración añadida
- **Gior** - Ya existente

### PSE - Correcciones
- Error en validación de status de respuesta para PSE (factura y GRE)
- Validación de errores en PSE y OSE
- Retorno de error al envío de PSE al firmar XML
- Parser de JSON en error de PSE
- Cambio de estado en comprobante de rechazado a registrado cuando es OSE SendFact

### Documentos
- Asignar fecha de emisión al generar comprobante desde nota de venta
- Error de XML respecto al Nodo TaxTotal en notas
- Error al extraer información de CDR dentro de guías (error en guías)
- Error de array a string en respuesta al enviar el XML

### Pagos y Caja
- Error de cálculo de total CPE para pagos al contado
- Abrir caja al ir al módulo venta si no hay caja abierta

### Inventario y Kardex
- Error en kardex para notas de crédito con facturas externas
- Validación de categorías en los productos (análisis comercial)

### Compras
- Error de Supplier con el Customer al parsear XML en Importar compras

### Modelos
- Mala referenciación en modelo SaleNote
- Falta del key 'total' en el registro de input para prepayments

### GRE
- Cambio de descripción en mayúscula para GRE transportista

### POS
- Estado mal referenciado al evitar error de enter para código de barras

### Hotel
- Validación del precio de la tarifa de una habitación

### Comisiones
- Error en comisiones para documentos con nota de crédito/débito y en estado anulado

### UI
- Bug de listado de clientes
- Error de código duplicado

### Sistema
- Generación de tenant

## 🔧 Refactor

### Anulaciones
- Se quitó la opción de eliminar en anulaciones

---

## 📋 Tecnologías Base
- **Laravel 9 + PHP 8**
- **Ubuntu 24.04 LTS**
- **Plantilla PDF default unificada**
- **Tema Black actualizado**
- **Acceso Maestro** desde superadmin
- **Registro automático** para subcuentas
- **Correos automáticos** desde el administrador