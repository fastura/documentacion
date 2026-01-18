# Migracion del Pro5 a Pro6

Se presentará los pasos para poder migrar su sistema del Pro5 a la nueva versión de Pro6.

## Pasos

1. Detener el proxy

  ```bash
  docker stop proxy_proxy_1
  ```

  :::note ¿Por qué?
   Este paso se hace principalmente para que ningún cliente pueda acceder al sistema mientras se esta actualizando el sistema
  :::

2. Dirigirse a su contenedor FPM 

  ```bash
  docker exec -ti [contenedor_fpm] bash
  ```

3. Coloque este comando para verificar donde esta apuntado el remoto

  ```bash
  git remote -v 
  # origin https://gitlab.buho.la/buho/facturador/facturador5.git (fetch) 
  # origin https://gitlab.buho.la/buho/facturador/facturador5.git (push) 
  ```
  :::note Tenga en cuenta
   Lo que se muestra arriba es un ejemplo de lo que se podrá ver dentro de su consola. 
  :::

4. Ahora se tiene que establecer el nuevo remoto para que se actualice, coloque el siguiente

  ```bash
  git remote set-url origin https://gitlab.buho.la/pro6/pro6.git
  ```
  
  Alguna veces podria presentar que el **origin** tenga otro nombre ya que es un alias, por ejemplo

  ```bash
  git remote -v 
  # buho https://gitlab.buho.la/buho/facturador/facturador5.git (fetch) 
  # buho https://gitlab.buho.la/buho/facturador/facturador5.git (push) 
  ```

  En estos casos solo tendrías que hacer un cambio
  
  ```bash
  git remote set-url buho https://gitlab.buho.la/pro6/pro6.git
  ```

5. Con todo ya hecho, bajamos los cambios del repositorio

  ```bash
  git pull origin master
  ```

  Y sí se eligió otro alías entonces sería 

  ```bash
  git pull buho master
  ```

6. Luego, tenemos que actualizar las dependencias, sigue los siguientes comandos

  ```bash
  rm -r vendor; composer install
  ```
  
  Posiblemente pueda suceder errores, en la sección final se pondra las posibles soluciones que pueda occurir a la hora de hacer composer install.

  Después de eso, dar permisos con el siguiente comando ```chmod -R 777 vendor/mpdf/mpdf```.

7. Ejecutar migraciones
  ```bash
  php artisan migrate; php artisan tenancy:migrate
  ```

8. Limpiar cache

  ```bash
  php artisan config:cache; php artisan cache clear
  ```

9. Luego ingresar al archivo .env con el siguiente comando ````nano .env``` y luego coloca al final del archvo lo siguiente:

  ```.env
  MULTI_USER_ENABLED=true
  TENANT_SESSION_LIFETIME_ENABLED=true
  SESSION_LIFETIME=60
  ```

  y luego colocar el siguiente comando ```php artisan optimize:clear```

  Con esto, ya tendrás el sistema migrado al Pro6.


## Posibles errores

### Error al ejecutar el composer install

1. Primera opción es ejecutar el siguiente comando

  ```php
  composer self-update
  ```
  Luego volver a ejecutar el comando ```composer install```

2. Segunda opción se debe borrar un archivo con el siguiente comando

  ```bash
  rm composer.lock
  ```
  Luego volver a ejecutar el comando ```composer install```

### Error "**Server certificate verification failed**"

1. Se debe ejecutar el siguiente comando

  ```bash
  git config --global http sslverify false
  ```
  


