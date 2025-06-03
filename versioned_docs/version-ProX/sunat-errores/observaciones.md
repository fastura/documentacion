---
title: Observaciones SUNAT
description: "Listado de observaciones (códigos 4000+) en comprobantes electrónicos SUNAT Perú."
sidebar_position: 3
---

# ⚠️ Observaciones SUNAT (4000+)

:::tip Observaciones
Las observaciones:
- No invalidan el documento
- El sistema registra el comprobante como válido
- Las advertencias se informan en la Constancia de Recepción
:::

## Advertencias Generales (4000-4039)

| Código | Descripción |
|--------|-------------|
| 4000 | El documento ya fue presentado anteriormente |
| 4001 | El número de RUC del receptor no existe |
| 4002 | Para el TaxTypeCode, está usando un valor que no existe en el catálogo |
| 4003 | El comprobante fue registrado previamente como rechazado |
| 4004 | El DocumentTypeCode de las guías debe existir y tener 2 posiciones |
| 4005 | El DocumentTypeCode de las guías debe ser 09 o 31 |
| 4006 | El ID de las guías debe tener información de la SERIE-NUMERO de guía |
| 4007 | El XML no contiene el ID de las guías |
| 4008 | El DocumentTypeCode de Otros documentos relacionados no cumple con el estándar |
| 4009 | El DocumentTypeCode de Otros documentos relacionados tiene valores incorrectos |
| 4010 | El ID de los documentos relacionados no cumplen con el estándar |
| 4011 | El XML no contiene el tag ID de documentos relacionados |
| 4012 | El ubigeo indicado en el comprobante no es el mismo que está registrado para el contribuyente |
| 4013 | El RUC del receptor no está activo |
| 4014 | El RUC del receptor no está habido |
| 4015 | Si el tipo de documento del receptor no es RUC, debe tener operaciones de exportación |
| 4016 | El total valor venta neta de oper. gravadas IGV debe ser mayor a 0.00 o debe existir oper. gravadas onerosas |
| 4017 | El total valor venta neta de oper. inafectas IGV debe ser mayor a 0.00 o debe existir oper. inafectas onerosas o de export |
| 4018 | El total valor venta neta de oper. exoneradas IGV debe ser mayor a 0.00 o debe existir oper. exoneradas |
| 4019 | El cálculo del IGV no es correcto |
| 4020 | El ISC no está informado correctamente |
| 4021 | Si se utiliza la leyenda con código 2000, el importe de percepción debe ser mayor a 0.00 |
| 4022 | Si se utiliza la leyenda con código 2001, el total de operaciones exoneradas debe ser mayor a 0.00 |
| 4023 | Si se utiliza la leyenda con código 2002, el total de operaciones exoneradas debe ser mayor a 0.00 |
| 4024 | Si se utiliza la leyenda con código 2003, el total de operaciones exoneradas debe ser mayor a 0.00 |
| 4025 | Si usa la leyenda de Transferencia o Servicio gratuito, todos los ítems deben ser no onerosos |
| 4026 | No se puede indicar Guía de remisión de remitente y Guía de remisión de transportista en el mismo documento |
| 4027 | El importe total no coincide con la sumatoria de los valores de venta más los tributos más los cargos |
| 4028 | El monto total de la nota de crédito debe ser menor o igual al monto de la factura |
| 4029 | El ubigeo indicado en el comprobante no es el mismo que está registrado para el contribuyente |
| 4030 | El ubigeo indicado en el comprobante no es el mismo que está registrado para el contribuyente |
| 4031 | Debe indicar el nombre comercial |
| 4032 | Si el código del motivo de emisión de la Nota de Crédito es 03, debe existir la descripción del ítem |
| 4033 | La fecha de generación de la numeración debe ser menor o igual a la fecha de generación de la comunicación |
| 4034 | El comprobante fue registrado previamente como baja |
| 4035 | El comprobante fue registrado previamente como rechazado |
| 4036 | La fecha de emisión de los rangos debe ser menor o igual a la fecha de generación del resumen |
| 4037 | El cálculo del Total de IGV del Ítem no es correcto |
| 4038 | El resumen contiene menos series por tipo de documento que el envío anterior para la misma fecha de emisión |
| 4039 | No ha consignado información del ubigeo del domicilio fiscal |

## Advertencias de Operación (4040-4059)

| Código | Descripción |
|--------|-------------|
| 4040 | Si el importe de percepción es mayor a 0.00, debe utilizar una leyenda con código 2000 |
| 4041 | El código de país debe ser PE |
| 4042 | Para sac:SUNATTransaction/cbc:ID, se está usando un valor que no existe en el catálogo. Nro. 17 |
| 4043 | Para el TransportModeCode, se está usando un valor que no existe en el catálogo Nro. 18 |
| 4044 | PrepaidAmount: Monto total anticipado no coincide con la sumatoria de los montos por documento de anticipo |
| 4045 | No debe consignar los datos del transportista para la modalidad de transporte 02 – Transporte Privado |
| 4046 | No debe consignar información adicional en la dirección para los locales anexos |
| 4047 | sac:SUNATTransaction/cbc:ID debe ser igual a 06 cuando ingrese información para sustentar el traslado |
| 4048 | cac:AdditionalDocumentReference/cbc:DocumentTypeCode - Contiene un valor no válido para documentos relacionados |
| 4049 | El número de DNI del receptor no existe |
| 4050 | El número de RUC del proveedor no existe |
| 4051 | El RUC del proveedor no está activo |
| 4052 | El RUC del proveedor no está habido |
| 4053 | Proveedor no debe ser igual al remitente o destinatario |
| 4054 | La guía no debe contener datos del proveedor |
| 4055 | El XML no contiene información en el tag cbc:Information |
| 4056 | El XML no contiene el tag o no existe información en el tag SplitConsignmentIndicator |
| 4057 | GrossWeightMeasure – El dato ingresado no cumple con el formato establecido |
| 4058 | cbc:TotalPackageQuantity - El dato ingresado no cumple con el formato establecido |
| 4059 | Número de bultos o pallets - información válida para importación |

## Advertencias de Transporte (4060-4085)

| Código | Descripción |
|--------|-------------|
| 4060 | La guía no debe contener datos del transportista |
| 4061 | El número de RUC del transportista no existe |
| 4062 | El RUC del transportista no está activo |
| 4063 | El RUC del transportista no está habido |
| 4064 | /DespatchAdvice/cac:Shipment/cac:ShipmentStage/cac:TransportMeans/cbc:RegistrationNationalityID - El dato ingresado no cumple con el formato establecido |
| 4065 | cac:TransportMeans/cbc:TransportMeansTypeCode - El valor ingresado como tipo de unidad de transporte es incorrecta |
| 4066 | El número de DNI del conductor no existe |
| 4067 | El XML no contiene el tag o no existe información del ubigeo del punto de llegada |
| 4068 | Dirección de punto de llegada - El dato ingresado no cumple con el formato establecido |
| 4069 | CityName - El dato ingresado no cumple con el formato establecido |
| 4070 | District - El dato ingresado no cumple con el formato establecido |
| 4071 | Número de Contenedor - El dato ingresado no cumple con el formato establecido |
| 4072 | Número de contenedor - información válida para importación |
| 4073 | TransEquipmentTypeCode - El valor ingresado como tipo de contenedor es incorrecta |
| 4074 | Número Precinto - El dato ingresado no cumple con el formato establecido |
| 4075 | El XML no contiene el tag o no existe información del ubigeo del punto de partida |
| 4076 | Dirección de punto de partida - El dato ingresado no cumple con el formato establecido |
| 4077 | CityName - El dato ingresado no cumple con el formato establecido |
| 4078 | District - El dato ingresado no cumple con el formato establecido |
| 4079 | Código de Puerto o Aeropuerto - El dato ingresado no cumple con el formato establecido |
| 4080 | Tipo de Puerto o Aeropuerto - El dato ingresado no cumple con el formato establecido |
| 4081 | El XML No contiene El tag o No existe información del Número de orden del ítem |
| 4082 | Número de Orden del Ítem - El orden del ítem no cumple con el formato establecido |
| 4083 | Cantidad - El dato ingresado no cumple con el formato establecido |
| 4084 | Descripción del Ítem - El dato ingresado no cumple con el formato establecido |
| 4085 | Código del Ítem - El dato ingresado no cumple con el formato establecido |

## Advertencias de Sistemas Especiales (4086-4093)

| Código | Descripción |
|--------|-------------|
| 4086 | El emisor y el cliente son Agentes de percepción de combustible en la fecha de emisión |
| 4087 | El Comprobante de Pago Electrónico no está Registrado en los Sistemas de la SUNAT |
| 4088 | El Comprobante de Pago no está autorizado en los Sistemas de la SUNAT |
| 4089 | La operación con este cliente está excluida del sistema de percepción. Es agente de retención |
| 4090 | La operación con este cliente está excluida del sistema de percepción. Es entidad exceptuada de la percepción |
| 4091 | La operación con este proveedor está excluida del sistema de retención. Es agente de percepción, agente de retención o buen contribuyente |
| 4092 | El nombre comercial del emisor no cumple con el formato establecido |
| 4093 | El ubigeo del emisor no cumple con el formato establecido o no es válido |

## Advertencias de Formato de Domicilio (4094-4112)

| Código | Descripción |
|--------|-------------|
| 4094 | La dirección completa y detallada del domicilio fiscal del emisor no cumple con el formato establecido |
| 4095 | La urbanización del domicilio fiscal del emisor no cumple con el formato establecido |
| 4096 | La provincia del domicilio fiscal del emisor no cumple con el formato establecido |
| 4097 | El departamento del domicilio fiscal del emisor no cumple con el formato establecido |
| 4098 | El distrito del domicilio fiscal del emisor no cumple con el formato establecido |
| 4099 | El nombre comercial del cliente no cumple con el formato establecido |
| 4100 | El ubigeo del cliente no cumple con el formato establecido o no es válido |
| 4101 | La dirección completa y detallada del domicilio fiscal del cliente no cumple con el formato establecido |
| 4102 | La urbanización del domicilio fiscal del cliente no cumple con el formato establecido |
| 4103 | La provincia del domicilio fiscal del cliente no cumple con el formato establecido |
| 4104 | El departamento del domicilio fiscal del cliente no cumple con el formato establecido |
| 4105 | El distrito del domicilio fiscal del cliente no cumple con el formato establecido |
| 4106 | El nombre comercial del proveedor no cumple con el formato establecido |
| 4107 | El ubigeo del proveedor no cumple con el formato establecido o no es válido |
| 4108 | La dirección completa y detallada del domicilio fiscal del proveedor no cumple con el formato establecido |
| 4109 | La urbanización del domicilio fiscal del proveedor no cumple con el formato establecido |
| 4110 | La provincia del domicilio fiscal del proveedor no cumple con el formato establecido |
| 4111 | El departamento del domicilio fiscal del proveedor no cumple con el formato establecido |
| 4112 | El distrito del domicilio fiscal del proveedor no cumple con el formato establecido |

## Navegación

:::info Enlaces Relacionados
- [🔙 Volver a Clasificación de Errores SUNAT](/Pro7/sunat-errores)
- [🛑 Ver Excepciones](/Pro7/sunat-errores/excepciones-sunat)
- [❌ Ver Errores que generan Rechazo](/Pro7/sunat-errores/errores-rechazo)
:::