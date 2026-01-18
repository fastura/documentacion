# Descargas de reportes en cola

Para solucionar el error de las dsecargas de algunos reportes en cola, por favor verificar estos dos puntos.

## Opción 1
1. Verifique que exista un archivo supervisor.conf, recuerda que debe ser un archivo.

  ```config title="supervisor.conf"
  [program:laravel-worker]
  process_name=%(program_name)s_%(process_num)02d
  command=php /var/www/html/artisan queue:work --sleep=3 --tries=3
  autostart=true
  autorestart=true
  stopasgroup=true
  killasgroup=true
  user=root
  numprocs=8
  redirect_stderr=true
  stdout_logfile=/var/www/html/storage/logs/supervisor.log
  stopwaitsecs=3600 
  ```

## Opción 2
2. Si el archivo ya esta creado entonces debe seguir estos pasos:
    
### Linux 
1. Se debe entrar al contenedor del supervisor, para poder omstrar todos los contenedores ```docker ps ```.Ingrese este comando en su terminal: 

  ```bash
  docker exec -it [nombre de su contenedor supervisor] /bin/bash
  ```

2. Una vez ingresado en el contenedor del supervisor, entonces se tiene que colocar estos comando en secuencia: 

    A. Se ingresa este comando:

     ```bash 
     php artisan queue:work --queue=high,default
     ```
     
     En general no demora mucho, pero si tienes demasiada cosas en descarga, con dos minutos debería bastar. Luego de eso solo haga ```Ctrl + C``` para seguir con los siguientes comandos.

    B. Luego colocamos estos comando sucesivamente en la terminal para reiniciar el archivo **supervisor.conf** y empiece a correr de nuevo:

     ```bash
     service supervisor start
     supervisorctl reread
     supervisorctl update
     supervisorctl start all
     ```
