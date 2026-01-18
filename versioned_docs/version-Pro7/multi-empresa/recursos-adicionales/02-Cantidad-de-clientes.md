# Cantidad de clientes

Para colocar la cantidad del sistema que usará un cliente según su **plan R5, R10, etc**. Se tiene que ingresar al contenedor PHP-FPM y editar el archivo **.env**.

1. Primero ingrese al contenedor **PHP-FPM**:

  ```bash
  docker exec -it [nombre del contenedor fpm] /bin/bash
  ```

2. Luego que ingresamos, debe ejecutar ```nano .env```:

  ```.env title=".env"
  APP_NAME=Facturador
  APP_ENV=local
  APP_KEY=base64:...=
  APP_DEBUG=false
  APP_URL_BASE=pro6.test
  LIMITE_RESELLER=9999
  ```

3. Una vez escrito y guardado los cambios, tenemos que ejecutar los siguientes comandos:

  ```bash
  php artisan config:cache
  php artisan cache:clear
  ```
