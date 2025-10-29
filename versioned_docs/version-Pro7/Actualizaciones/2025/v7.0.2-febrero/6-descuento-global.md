# Implementación de Descuento Global en Comprobantes de Venta

## Descripción
Se ha implementado la funcionalidad de aplicar descuentos globales en la generación de comprobantes de venta, incluyendo:

![alt text](img/descuento-global-1.png)

- Facturas
- Boletas
- Notas de crédito
- Notas de débito

## Funcionalidad
- Se habilitó una opción para aplicar un descuento global al total del comprobante.
- El descuento se puede especificar manualmente en un campo de entrada.
- Se muestra el valor del descuento aplicado en el desglose de la factura.

## Beneficios
- Permite gestionar descuentos de manera uniforme en todos los comprobantes.
- Facilita la aplicación de promociones o ajustes comerciales sin necesidad de modificar producto por producto.
- Mejora la transparencia en la facturación al incluir el descuento en el desglose del comprobante.

## Consideraciones
- El descuento global afecta el subtotal antes de impuestos.
- La validación asegura que el descuento no sea mayor al monto total del comprobante.
- Se ha probado la funcionalidad en modo DEMO con conexión a SUNAT.


