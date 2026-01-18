---
sidebar_position: 2
---
# Docker - Linux

Se explicará como poder descargar y poder ejecutar el facturador dentro de su máquina Ubuntu

:::danger ¡IMPORTANTE - Migración de Servidor GitLab!
**Hemos migrado nuestro servidor de GitLab.** Si aún no has cambiado la URL del sistema (del git para descargar los cambios, etc.), te sugerimos verificar primero.

**Nueva URL:** `git.buho.la`

Para más información sobre cómo actualizar la URL del repositorio, consulta nuestra **[guía de actualización y migración](https://manual.uio.la/Pro7/devs/instalacion/Actualizar-Migrar)**.
:::

## Requisitos previos

1.	Tener acceso a su servidor, VPS, máquina virtual o local vía SSH
2.	Verificar si su máquina tiene una instalación de SSH para que pueda conectarse de forma remota, para su facilidad podría usar Putty o Winscp
3.	Tener configurado su dominio que este apuntado a su IP, para ello edite el record A y debería colocar la ip de su servidor y el record CNAME con el valor “*” para que se tomen los subdominios registrados por la herramienta. Esto ayudará a agilizar la propagación de los cambios en la DNS por la internet.
4.	Si en su servidor tiene servicios que están usando MySQL, Apache, Nginx, deberá apagarlo ya que ocupan los puertos que pasará a usar el aplicativo con los contenedores de Docker

## Pasos 

1. Acceder a su servidor por SSH y loguearse como super usuario:
 ```bash
 sudo su
 ```

2. Ejecutar este comando en la terminal 
 ```bash
 curl https://git.buho.la/-/snippets/41/raw/main/install.sh -o install.sh && chmod +x install.sh && ./install.sh
 ```

:::danger ⚠️ Importante
Si la instalación del facturador se detiene, por favor vuelva a correr el script de instalación.
Esto solo puede ocurrir una vez.
:::

3. Una vez ejecutado el script se le pedirá que ingrese algunos valores
    * Se le preguntará sobre el dominio, aquí es donde se debe colocar el dominio que se ha colocado a la hora de configurar la DNS.
    * Se le preguntará sobre su número de servicio
        1. Si es la primera instalación entonces presione enter para seguir con la instalación (el número de servicio por defecto se coloca como 1)

            ![alt text](img/number-service-1.png)
        2. Si tienes otros proyectos entonces debes colocar el número correlativo al anterior:

            ![alt text](img/number-service-2.png)
    * Luego le preguntará que versión es la que necesita, en el script va encontrar entre el Pro7 [1] o el ProX [2]

     ![alt text](img/instalacion-facturador-linux.png)
    * Si es la primera vez que se está instalando entonces empezará a actualizar el sistema y a descargar los programas necesarios, esto puede tardar unos minutos. Deberá clonar el repositorio donde deberá colocar su cuenta de usuario con contraseña (verificar que este bien la cuenta de usuario y contraseña porque puede saltar error y por consecuente fallar la instalación).
    * Luego se le preguntará sobre si desea instalar el SSL gratuito, tener en cuenta que debe ser actualizado cada 90 días
        1. Si responde “s” (Si): Se deberá contestar las siguientes preguntas con “y”, son dos en total, después se te mostrará un código que se deberá añadir en un record tipo TXT con el nombre de _acme-challenge.example.com
        2. Si se responde “n” (No): Continuará con la configuración, pero posiblemente en la mayoría de los navegadores salga advertencia por falta de HTTPS, se recomienda agregar SSL. Cabe recalcar que puede configurarlo manualmente si lo desea.

4. Finalizando la instalación, se le mostrará información sobre su facturador como **Ruta del proyecto, URL donde pueda acceder al facturador, el correo del administrador, contraseña, contraseña para acceder al MySQL, clave SSH**
    Cabe decir, que toda la información esta guardada dentro de un archivo de texto que facilmente podra acceder con el siguiente comando: 
    ```bash
    cat [Su dominio].txt
    ```
