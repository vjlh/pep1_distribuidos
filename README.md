# Pep 1
#### Valentina Ligueño
#### Alberto Rodríguez

# Desarrollo y Análisis de sistema legado

## Sistema
Este sistema consiste en una simulación simplificada del sitio web comisaría virtual, este sitio se creo en contexto de la pandemia provocada por el COVID-19, y se encarga de entregar permisos temporales a los ciudadanos de Chile, en las comunas que se encuentran en cuarentena. Estos permisos se utilizan para la realización distintas actividades necesarias y de primera necesidad dentro del contexto que se vive.

El sistema implementado tiene las distintas funcionalidades:
* Generar de un permiso, a través de un formulario simple, en el cual se debe indicar el motivo de solicitación del permiso, y los datos del solicitante (nombre, apellido, rut, correo y dirección)
* Confirmación del permiso, una vez solicitado el permiso se redirige a una vista de confirmación, con la ID del permiso generado, los datos ingresados y el periodo de validez del permiso, con una duración de 2 horas desde el momento en el que se solicitó
* Confirmación por correo, una vez generado el permiso, el solicitante recibe una confirmación al correo que ingresó, este correo contiene la ID del permiso generado, los datos del solicitante y el periodo de validez del permiso.

A continuación se presentan imágenes de cada funcionalidad en el sistema implementado:

1. Generar un permiso
![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/Funcionalidad1.png "Formulario para generar un permiso")

1. Confirmación del permiso
![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/Funcionalidad2.png "Confirmación del permiso generado")

1. Confirmación por correo
![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/Funcionalidad3.png "Confirmación por correo del permiso generado")

## Arquitectura

La siguiente arquitectura computacional descrita en la siguiente figura, basada en el sitio comisaria virtual

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/Arquitectura.png "Arquitectura")

## Análisis del sistema

| Características | Descripción | ¿Posee el sistema la característica? |
| ------------- | ------------- | ------------- |
| Disponibilidad de recursos | Facilita a los usuario acceder de forma fácil a recursos compartidos y compartir sus propios recursos de forma controlada, de esta forma se puede disminuir el costo y la capacidad de procesamiento (porque los usuarios puede tener equipos sin una gran capacidad de procesamiento).  | Este sistema no cumple este punto, porque no se accede a ningún recurso remoto, ya que la plataforma implementada solo permite solicitar el permiso, si quisiera volver a acceder a él, no se puede porque solo se le muestra una vez, cuando es generado. Además como todos los recursos se encuentran almacenados en un mismo equipo, si llegase a existir una falla, no se tiene cuenta con ninguna estrategia de resguardo para que el sistema siga funcionando. |
| Transparencia | Corresponde a esconder el hecho que los procesos y recursos están físicamente distribuidos en múltiples computadores, para lograr la transparencia debe contar con, acceso, ubicación, migración, re-ubicación, replicación, concurrecia, fallo y persistencia. | El sistema no cumple con este punto tampoco, debido a que los procesos están todos ubicados de manera local, es decir, no existe una distribución   de este en distintos componentes.|
| Apertura | Un sistema distribuido abierto es aquel que ofrece servicios bajo reglas estándar (sintaxis y semántica), es decir, que nuevos servicios se pueden añadir sin perjudicar ni duplicar a los ya existentes | Debido a la simpleza del sistema implementado y como este fue construido, con una sintaxis y semántica clara y estándar, es fácil expandirlo, es decir agregarle más componentes y funcionalidades, puede ser fácilmente extendido. Esto se puede ver por ejemplo, que se implementa la arquitectura mediante API REST, los sistemas se comunican mediante el protocolo HTTP.
| Escalabilidad | Se define como la capacidad que tiene un sistema para aumentar o disminuir su capacidad de respuesta. Existe dos tipos de escalabilidad, la vertical (aumenta la capacidad de sus recursos) y la horizontal (aumenta la cantidad de sus recursos). Existen tres técnicas básicas de escalar: Particionar, Replicación y Caché. | Esta arquitectura no es escalable, porque no cumple ninguna de las técnicas básicas mencionada en la descripción. No existe replica de la base de datos, del backend y frontend. La base de datos no está particionada, por lo que no se puede realizar consultas en distintos equipos, esto aumenta la lentitud de la base de datos. Tampoco se implementa caché, ya que siempre se accede a la base datos, no existe un recurso auxiliar para aumentar el tiempo de respuesta. Es muy probable que si se realiza una alta cantidad de solicitudes, se produzcan cuellos de botella dentro del sistema.|

## Capacidad de respuesta del sistema

Para poder determinar la capacidad de respuesta del sistema backend, se utilizó una herramienta llamada Artillery.io, que permite crear pruebas de carga en aplicaciones. Se realiza un script donde se colocan todos lo parametros para realizar los test. Cada script se compone de dos partes, la configuración (o config) que detallan los ajustes del objetivo a probar y los escenarios que sería la descripción de lo que consultará cada usuario generado.

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/Artillery.png "Test")

En la siguiente tabla se muestra la cantidad de solicitudes que se hicieron por segundo. En la primera columna se muestra la cantidad de solicitudes que se hicieron, para despues en la segunda y tercera columna saber cuantas de las totales se completaron (una muestra el porcentaje completo). Se muestra la cantidad de solicitudes promedio completadas por segundo y al final el mínimo y máximo timepo de respuesta de cada solicitud. (en minisegundos).

| Cantidad | Completado | %       | Respuesta media/seg | Tiempo de respuesta promedio (mseg) |
|----------|------------|---------|---------------------|--------------------|
| 10       | 10         | 100%    | 7,63                | 8,15  |
| 50       | 50         | 100%    | 35,97               | 14,3  |
| 100      | 100        | 100%    | 70,92               | 14,9  |
| 500      | 500        | 100%    | 173,61              | 15,3  |
| 1000     | 1000       | 100%    | 194,55              | 15,55 |
| 2000     | 2000       | 100%    | 225,48              | 18,85 |
| 3000     | 3003       | 100%    | 226,78              | 50,2  |
| 4000     | 3047       | 76,175% | 232,56              | 50,45 |
| 5000     | 3063       | 61,26%  | 307,5               | 52,1  |

Al observar la tabla podemos darnos cuenta, que cuando las solicitudes sobrepasan la cantidad de 4000, disminuye la cantidad de solicitudes completada con éxito, además por cada prueba realizada, aumenta el tiempo de respuesta promedio, el cual pasa de 8,15 mseg con 10 solicitudes a 52,1 con 5000 solicitudes. Con los datos observados en la tabla, el sistema como está implementado ahora, solo es capaz de soportar aproximadamente 3000 solicitudes. Finalmente se concluye que la cantidad de solicitudes aumentaría significativamente si el sistema cumpliera con las características de un sistema distribuido.
