RoadTrip (alfa)
========

una aplicación para entusiastas de los viajes en carro o moto y la fotografía digital.

* Se usa tumblr para subir las fotos 
* Las fotos deben ser tomadas con un dispositivo con gps (porque no siempre se cuenta con conexión a internet)
* La aplicación lee las imágenes desde el servidor de tumblr 
* extrae la ubicación donde se tomo la foto (latitud, longitud) usando exif
* La aplicación georeferenciara los puntos donde las fotos fueron tomadas


Preguntas & Respuestas
========

P - Por que?
R - porque quiero dejar una guía de cuál fue el recorrido que se realizo por medio de un registro fotográfico

P - por que tumblr?
R - porque no tengo tiempo para escribir mi propio "servidor" de imagenes

P - por que no leer la ubicación de donde se suben las imágenes?
R - porque las imágenes ya tienen la información donde fueron tomadas y no siempre se va contar con internet.

P - por que no hacer una app nativa?
R – no tener tiempo


frameworks usados
========
* twitter bootstrap
* google maps api
* tumblr rest api (json)
* jquery
* exif.js
* binaryajax.js
