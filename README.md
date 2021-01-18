# Pep 2
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

## Nueva Arquitectura

La nueva arquitectura se presenta en la imagen de a continuación, donde gracias a Kubernetes se tiene 1 instancias de backend, que puede replicarse cuando es necesario, esto será explicado con mayor detalle más adelante, por ejemplo en la arquitectura son 3 veces, pueden ser mínimo 1 y máximo 5 réplicas. Además se tiene 3 réplicas de la base de datos, estas son solo de lectura.

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/Arquitectura-PEP2.png "Nueva arquitectura")


## Análisis del sistema

### Nuevas herramientas utilizadas

1. Docker
2. Kubernetes
3. Google Cloud

## Características y Modificaciones

Para la primera implementación, en base al análisis hecho al sistema, se concluyó que la aplicación no cumplía con ninguna característica de un sistema distribuido. En esta entrega se intentó mejorar esto, esto a través de la selección de dos características de sistemas distribuidos y su posterior implementación en la plataforma. Las características implementadas son entonces:

1. Escalabilidad: Para lograr este punto se replicó el Backend, con la herramienta Kubernetes, a través de la plataforma de Google Cloud. Las características de esta replicación consistieron en desplegar la imagen del backend desarrollado en Springboot en un clúster de Kubernetes, con este despliegue se creó una carga de trabajo con la importante característica de la replicación, con un número mínimo de 1 pods y un máximo de 5. Finalmente para poder gestionar estas réplicas se crea servicio para exponer la carga de trabajo, este servicio permite acceder al backend desde una IP única, y este gestiona internamente a qué réplica enviar las consultas. Estas réplicas son autoescalables, lo que quiere decir que se van generando a medida que van siendo requeridos, como se ve en la siguiente imagen:

![Adaptación dinámica horizontal](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/car-ct.png)

Por ejemplo cuando sometimos el backend a las pruebas de rendimiento con Artillery, los pods se gestionaron de la siguiente forma:

* Con un número prueba de 2000 consultas se gestionaron 2 pods

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/2000-req-pod.png)

* Con un número prueba de 5000 consultas se gestionaron 3 pods

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/5000-req-pod.png)

* Con un número prueba de 10000 consultas se gestionaron los 5 pods, que es la máxima cantidad.

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/10000-req-pod.png)

Sin embargo, a pesar del perfil de autoescalado del backend, el rendimiento del programa solo permitió elevar el número de consultas de aproximadamente 3.000 a aproximadamente 6000, esto se puede explicar porque sin importar el número de instancias que se tenga del backend, la base de datos es la causante de un "cuello de botella" que no permite alojar más de 50 consultas simultáneas, sin importar el número de consultas que le hicimos con Artillery este número no aumentó como se ve en la imagen siguiente.

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/Max-consultas.png)

De hecho en el siguiente gráfico, que muestra el número de byte de entrada y de salida, se puede ver cuando el sistema deja de responder bien, en un principio estos dos números iban parejos y cuando ya se le hizo un número de consultas muy grande, el número de byte de entrada se disparó y no así el de salida, ya que no fue capaz de dar abasto con tal cantidad de peticiones.

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/byte-in-off-2.png)


2. Disponibilidad de Recursos: Esto se logra a través de las 3 réplicas de lectura hechas a la base de datos, la lectura se utiliza una vez generado el permiso, cuando este se muestra por pantalla y se le envía por correo al usuario solicitante, estas réplicas fueron creados desde de Google Cloud, específicamente a través Cloud SQL, sin embargo como el fuerte de la aplicación corresponde a la escritura, la realización de esta replicación no influyó en gran medida a aumentar el nivel de respuesta de la plataforma.

![Replicas de Lectura](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/Replicas%20db.png)

## Capacidad del sistema

### Herramienta de prueba utilizada

Para conocer la capacidad de respuesta que tiene el nuevo sistema se utiliza nuevamente la herramienta Artillery.io, la cual permite crear pruebas de cargas en las aplicaciones. Es importante destacar que las conexiones que crea Artillery son mediante el protocolo TCP, por lo que en general se presenta latencia en las solicitudes, sim embargo, pueden ocurrir errores si el tiempo de respuesta por defecto es excedido. El caso de prueba realizada corresponde a un POST al backend. Para esto se utilizó el archivo que aparece en la siguiente imagen:

![alt text](https://github.com/vjlh/pep1_distribuidos/blob/master/images/pep2/Artillery-pep2.png)

Como se dijo en el punto anterior son realizadas pruebas desde 2000 peticiones en adelante (como las 2000 peticiones se completaron exitosamente, se asume que un número inferior de peticiones será igual). Se realizó 2000, 4000, 8000 y 10000 peticiones en cada prueba, arrojando la siguiente tabla:

| Cantidad | Completado | %       | Respuesta media/seg | Tiempo de respuesta max (seg) |
|----------|------------|---------|---------------------|--------------------|
| 2000     | 2000       | 100%    | 18.48              | 60.7  |
| 4000     | 4000       | 100% | 27.78              | 78.4  |
| 5000     | 4758       | 95,16%  | 32.48              | 88.3  |
| 8000     | 6081       | 76,01%  | 36.52              | 103.3  |
| 10000    | 6865       | 68,65%  | 45.66               | 189.9 | 

## Conclusiones

En base a los resultados obtenidos se puede determinar que:

* Respecto a las solicitudes completadas con éxito, claramente al probar de manera local estas tendrán un mayor porcentaje, ya que no se enfrentan a problemas de conexión al viajar por la red como el resto de los casos. Sin embargo, la implementación de kubernetes permite brindar una mayor respuesta, pero sigue sin lograr responder a todas las solicitudes, lo cual puede ser debido a que se genera un cuello de botella en la base de datos, por lo que la opción para solucionarlo es particionarla.

* La importancia de la arquitectura de google cloud, ya que permite generar de manera rápida sistemas distribuidos.

* Si bien los sistemas distribuidos ayudan a mejorar el rendimiento de un sistema, su implementación se vuelve más compleja.
