# Documentación Facturación Electrónica

Repositorio de documentación de nuestro sistema de facturación electrónica [Fastura](https://buho.la/fastura/). Aquí encontrarás guías y tutoriales para maximizar el uso de nuestra plataforma. 

Si estas colaborando con nosotros usa los siguientes comandos:

# Requerimiento

- NodeJS <= v18

### Instalación

```
$ npm install
```

### Iniciar entorno Local

```
$ npm start
```
Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin tener que reiniciar el servidor.

### Build

```
$ npm build
```
Este comando genera contenido estático en el directorio `build` y se puede usar en cualquier hosting. Esta carpeta es ignorado en el repositorio.

### Deployment

Usando SSH:

```
$ USE_SSH=true npm run deploy
```

Sin usar SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```
Este comando publica el contenido estatico a través de la rama `gh-pages`.
