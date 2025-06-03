---
title: Excepciones SUNAT
description: "Listado de excepciones (códigos 0100-1999) en comprobantes electrónicos SUNAT Perú."
sidebar_position: 1
---

# 🛑 Excepciones SUNAT (0100-1999)

:::danger Excepciones
Son errores graves que imposibilitan el procesamiento del archivo. En estos casos:
- El documento se considera como no informado
- El emisor deberá corregir el problema
- Se debe volver a enviar el documento
:::

## Errores del Sistema (0100-0199)

| Código | Descripción |
|--------|-------------|
| 100 | El sistema no puede responder su solicitud. Intente nuevamente o comuníquese con su Administrador |
| 101 | El encabezado de seguridad es incorrecto |
| 102 | Usuario o contraseña incorrectos |
| 103 | El Usuario ingresado no existe |
| 104 | La Clave ingresada es incorrecta |
| 105 | El Usuario no está activo |
| 106 | El Usuario no es válido |
| 109 | El sistema no puede responder su solicitud. (El servicio de autenticación no está disponible) |
| 110 | No se pudo obtener la información del tipo de usuario |
| 111 | No tiene el perfil para enviar comprobantes electrónicos |
| 112 | El usuario debe ser secundario |
| 113 | El usuario no está afiliado a Factura Electrónica |
| 125 | No se pudo obtener la constancia |
| 126 | El ticket no le pertenece al usuario |
| 127 | El ticket no existe |
| 130 | El sistema no puede responder su solicitud. (No se pudo obtener el ticket de proceso) |
| 131 | El sistema no puede responder su solicitud. (No se pudo grabar el archivo en el directorio) |
| 132 | El sistema no puede responder su solicitud. (No se pudo grabar escribir en el archivo zip) |
| 133 | El sistema no puede responder su solicitud. (No se pudo grabar la entrada del log) |
| 134 | El sistema no puede responder su solicitud. (No se pudo grabar en el storage) |
| 135 | El sistema no puede responder su solicitud. (No se pudo encolar el pedido) |
| 136 | El sistema no puede responder su solicitud. (No se pudo recibir una respuesta del batch) |
| 137 | El sistema no puede responder su solicitud. (Se obtuvo una respuesta nula) |
| 138 | El sistema no puede responder su solicitud. (Error en Base de Datos) |

## Errores en Archivos (0150-0199)

| Código | Descripción |
|--------|-------------|
| 151 | El nombre del archivo ZIP es incorrecto |
| 152 | No se puede enviar por este método un archivo de resumen |
| 153 | No se puede enviar por este método un archivo por lotes |
| 154 | El RUC del archivo no corresponde al RUC del usuario |
| 155 | El archivo ZIP está vacío |
| 156 | El archivo ZIP está corrupto |
| 157 | El archivo ZIP no contiene comprobantes |
| 158 | El archivo ZIP contiene demasiados comprobantes para este tipo de envío |
| 159 | El nombre del archivo XML es incorrecto |
| 160 | El archivo XML está vacío |
| 161 | El nombre del archivo XML no coincide con el nombre del archivo ZIP |

## Errores de Procesamiento de Solicitud (0200-0299)

| Código | Descripción |
|--------|-------------|
| 200 | No se pudo procesar su solicitud. (Ocurrió un error en el batch) |
| 201 | No se pudo procesar su solicitud. (Llegó un requerimiento nulo al batch) |
| 202 | No se pudo procesar su solicitud. (No llegó información del archivo ZIP) |
| 203 | No se pudo procesar su solicitud. (No se encontró archivos en la información del archivo ZIP) |
| 204 | No se pudo procesar su solicitud. (Este tipo de requerimiento solo acepta 1 archivo) |

## Errores de Compresión/Descompresión (0250-0299)

| Código | Descripción |
|--------|-------------|
| 250 | No se pudo procesar su solicitud. (Ocurrió un error desconocido al hacer unzip) |
| 251 | No se pudo procesar su solicitud. (No se pudo crear un directorio para el unzip) |
| 252 | No se pudo procesar su solicitud. (No se encontró archivos dentro del zip) |
| 253 | No se pudo procesar su solicitud. (No se pudo comprimir la constancia) |

## Errores de Estructura XML (0300-0399)

| Código | Descripción |
|--------|-------------|
| 300 | No se encontró la raíz documento xml |
| 301 | Elemento raíz del xml no está definido |
| 302 | Código del tipo de comprobante no registrado |
| 303 | No existe el directorio de schemas |
| 304 | No existe el archivo de schema |
| 305 | El sistema no puede procesar el archivo xml |
| 306 | No se puede leer (parsear) el archivo XML |
| 307 | No se pudo recuperar la constancia |

## Errores de Permisos y Validación (0400-0499)

| Código | Descripción |
|--------|-------------|
| 400 | No tiene permiso para enviar casos de pruebas |
| 401 | El caso de prueba no existe |
| 402 | La numeración o nombre del documento ya ha sido enviado anteriormente |
| 403 | El documento afectado por la nota no existe |
| 404 | El documento afectado por la nota se encuentra rechazado |

## Errores de Validación de Documento (1000-1999)

| Código | Descripción |
|--------|-------------|
| 1001 | ID - El dato SERIE-CORRELATIVO no cumple con el formato de acuerdo al tipo de comprobante |
| 1002 | El XML no contiene información en el tag ID |
| 1003 | InvoiceTypeCode - El valor del tipo de documento es inválido o no coincide con el nombre del archivo |
| 1004 | El XML no contiene el tag o no existe información de InvoiceTypeCode |
| 1005 | CustomerAssignedAccountID - El dato ingresado no cumple con el estándar |
| 1006 | El XML no contiene el tag o no existe información de CustomerAssignedAccountID del emisor del documento |
| 1007 | AdditionalAccountID - El dato ingresado no cumple con el estándar |
| 1008 | El XML no contiene el tag o no existe información de AdditionalAccountID del emisor del documento |
| 1009 | IssueDate - El dato ingresado no cumple con el patrón YYYY-MM-DD |
| 1010 | El XML no contiene el tag IssueDate |
| 1011 | IssueDate - El dato ingresado no es válido |
| 1012 | ID - El dato ingresado no cumple con el patrón SERIE-CORRELATIVO |
| 1013 | El XML no contiene información en el tag ID |
| 1014 | CustomerAssignedAccountID - El dato ingresado no cumple con el estándar |
| 1015 | El XML no contiene el tag o no existe información de CustomerAssignedAccountID del emisor del documento |
| 1016 | AdditionalAccountID - El dato ingresado no cumple con el estándar |
| 1017 | El XML no contiene el tag AdditionalAccountID del emisor del documento |
| 1018 | IssueDate - El dato ingresado no cumple con el patrón YYYY-MM-DD |
| 1019 | El XML no contiene el tag IssueDate |
| 1020 | IssueDate - El dato ingresado no es válido |
| 1021 | Error en la validación de la nota de crédito |
| 1022 | La serie o número del documento modificado por la Nota Electrónica no cumple con el formato establecido |
| 1023 | No se ha especificado el tipo de documento modificado por la Nota electrónica |
| 1024 | CustomerAssignedAccountID - El dato ingresado no cumple con el estándar |
| 1025 | El XML no contiene el tag o no existe información de CustomerAssignedAccountID del emisor del documento |
| 1026 | AdditionalAccountID - El dato ingresado no cumple con el estándar |
| 1027 | El XML no contiene el tag AdditionalAccountID del emisor del documento |
| 1028 | IssueDate - El dato ingresado no cumple con el patrón YYYY-MM-DD |
| 1029 | El XML no contiene el tag IssueDate |
| 1030 | IssueDate - El dato ingresado no es válido |
| 1031 | Error en la validación de la nota de débito |
| 1032 | El comprobante fue informado previamente en una comunicación de baja |
| 1033 | El comprobante fue registrado previamente con otros datos |
| 1034 | Número de RUC del nombre del archivo no coincide con el consignado en el contenido del archivo XML |
| 1035 | Número de Serie del nombre del archivo no coincide con el consignado en el contenido del archivo XML |
| 1036 | Número de documento en el nombre del archivo no coincide con el consignado en el contenido del XML |
| 1037 | El XML no contiene el tag o no existe información de RegistrationName del emisor del documento |
| 1038 | RegistrationName - El nombre o razón social del emisor no cumple con el estándar |
| 1039 | Solo se pueden recibir notas electrónicas que modifican facturas |
| 1040 | El tipo de documento modificado por la nota electrónica no es válido |
| 1041 | cac:PrepaidPayment/cbc:ID - El tag no contiene el atributo @SchemaID que indica el tipo de documento que realiza el anticipo |
| 1042 | cac:PrepaidPayment/cbc:InstructionID – El tag no contiene el atributo @SchemaID que indica el tipo de documento del emisor del documento del anticipo |
| 1043 | cac:OriginatorDocumentReference/cbc:ID - El tag no contiene el atributo @SchemaID que indica el tipo de documento del originador del documento electrónico |
| 1044 | cac:PrepaidPayment/cbc:InstructionID – El dato ingresado no cumple con el estándar |
| 1045 | cac:OriginatorDocumentReference/cbc:ID – El dato ingresado no cumple con el estándar |
| 1046 | cbc:Amount - El dato ingresado no cumple con el estándar |
| 1047 | cbc:Quantity - El dato ingresado no cumple con el estándar |
| 1048 | El XML no contiene el tag o no existe información de PrepaidAmount para un documento con anticipo |
| 1049 | ID - Serie y Número del archivo no coincide con el consignado en el contenido del XML |
| 1050 | El XML no contiene información en el tag DespatchAdviceTypeCode |
| 1051 | DespatchAdviceTypeCode - El valor del tipo de guía es inválido |
| 1052 | DespatchAdviceTypeCode - No coincide con el consignado en el contenido del XML |
| 1053 | El XML no contiene información en el tag /DespatchAdvice/cac:OrderReference/cbc:ID |
| 1054 | cac:OrderReference/cac:DocumentReference/cbc:ID - El dato SERIE-número no cumple con el formato de acuerdo a la Guía |
| 1055 | Serie - No cumple con el formato de acuerdo a guía electrónica (EG01 ó TXXXX) |
| 1056 | El XML no contiene información en el tag /DespatchAdvice/cac:OrderReference/cbc:OrderTypeCode |
| 1057 | El XML no contiene información en el tag cac:AdditionalDocumentReference/cbc:ID |
| 1058 | El XML no contiene información en el tag cac:AdditionalDocumentReference/cbc:DocumentTypeCode |
| 1059 | El XML no contiene firma digital |
| 1060 | El XML no contiene el tag o no existe información del número de RUC del Remitente |
| 1061 | El número de RUC del Remitente no existe |
| 1062 | El XML no contiene el tag o no existe información en el tag /DespatchAdvice/cac:Shipment/cbc:HandlingCode |
| 1063 | cbc:ShippingPriorityLevelCode: El dato ingresado no es válido |
| 1064 | El XML no contiene el tag o no existe información en el tag cac:DespatchLine de bienes a transportar |
| 1065 | El XML no contiene información en el tag cbc:TransportModeCode |
| 1066 | El XML no contiene el tag o no existe información en el tag cac:CarrierParty de datos del transportista |
| 1067 | El XML no contiene el tag o no existe información en el tag cac:TransportMeans de datos del vehículo |
| 1068 | El XML no contiene el tag o no existe información en el tag cac:DriverPerson de datos del conductor |
| 1069 | StartDate: El XML no contiene fecha de inicio de traslado |
| 1070 | StartDate - El dato ingresado no cumple con el patrón YYYY-MM-DD |
| 1071 | StartDate - El dato ingresado no es válido |
| 1072 | Starttime - El dato ingresado no cumple con el patrón HH:mm:ss.SZ |
| 1073 | StartTime - El dato ingresado no es válido |
| 1074 | No ha consignado punto de llegada |
| 1075 | No ha consignado punto de partida |

## Navegación

:::info Enlaces Relacionados
- [🔙 Volver a Clasificación de Errores SUNAT](/Pro7/sunat-errores)
- [❌ Ver Errores que generan Rechazo](/Pro7/sunat-errores/errores-rechazo)
- [⚠️ Ver Observaciones](/Pro7/sunat-errores/observaciones)
:::
