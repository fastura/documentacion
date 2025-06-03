---
title: Clasificación de Errores SUNAT
description: "Clasificación completa de errores, excepciones y observaciones en comprobantes electrónicos SUNAT Perú."
slug: /errores-sunat
sidebar_position: 0
---

# 📑 Clasificación de Errores en SUNAT

:::info Introducción
En el proceso de validación de comprobantes electrónicos, SUNAT distingue tres categorías principales de errores, cada una con sus propias implicaciones y códigos específicos.
:::

## Sistema de Clasificación

:::tip Rangos de Códigos
Los códigos se han clasificado de acuerdo al tipo de error:
- **0100-1999**: Excepciones
- **2000-3999**: Errores que generan rechazo
- **4000+**: Observaciones
:::

## Tipos de Respuestas del Sistema

:::note Respuestas del Sistema
De acuerdo al tipo de error que se genera, el sistema responde de manera distinta al emisor:

1. **Excepción**: Retorna el código de error con su descripción
2. **Error de Rechazo**: Genera CDR con estado rechazada
3. **Observación**: Genera CDR con estado aceptada con advertencias
4. **Sin Errores**: Genera CDR aceptada
:::

## Categorías de Errores

### 🛑 Excepciones (0100-1999)
:::danger Excepciones
Son errores graves que imposibilitan el procesamiento del archivo. En estos casos:
- El documento se considera como no informado
- El emisor deberá corregir el problema
- Se debe volver a enviar el documento
:::

### ❌ Errores que generan rechazo (2000-3999)
:::warning Rechazos
El comprobante se procesa pero se rechaza. Las implicancias varían según el tipo de documento:

#### Para Facturas y Notas:
- La numeración se considera ya utilizada
- La factura o nota no es válida
- No se puede reutilizar el número
- Se debe generar nuevo documento con nueva numeración

#### Para Resúmenes y Bajas:
- Se rechaza todo el documento completo
- No hay procesamiento parcial
- No se invalidan los números
- Se debe reenviar el documento completo
:::

### ⚠️ Observaciones (4000+)
:::tip Observaciones
- No invalidan el documento
- El sistema registra el comprobante como válido
- Las advertencias se informan en la Constancia de Recepción
:::

## 📋 Navegación Rápida

:::info Enlaces Directos
- 👉 [Ver Excepciones](/Pro7/sunat-errores/excepciones-sunat)
- 👉 [Ver Errores que generan Rechazo](/Pro7/sunat-errores/errores-rechazo)
- 👉 [Ver Observaciones](/Pro7/sunat-errores/observaciones)
:::

---


