# Pizza Planeta API - CRUD con MongoDB

**Materia:** Temas Especiales de Programación 1
**Alumno:** Ian Alexander Tranquilino Madariaga

## Introducción
El presente proyecto forma parte de las actividades prácticas de la asignatura Temas Especiales de Programación 1. Tiene como objetivo principal demostrar la implementación de una arquitectura de backend, integrando un entorno de desarrollo local con Node.js y un contenedor de bases de datos NoSQL.

## Descripción del Proyecto
Este repositorio contiene la refactorización de una API RESTful encargada de gestionar el catálogo de una pizzería ("Pizza Planeta"). Se migró la persistencia de datos, que originalmente operaba en la memoria volátil del servidor, hacia una base de datos **MongoDB** (desplegada localmente mediante Docker). 

Para asegurar la integridad de la información y mantener un estándar estricto en los documentos almacenados, se implementó **Mongoose** como ODM (Object Document Mapper), el cual define los esquemas de datos, facilita el mapeo de los objetos y maneja la conexión directa con la base de datos "PizzaMongo".

## Tecnologías Utilizadas
* **Backend:** Node.js, Express.js, CORS.
* **Base de Datos:** MongoDB (Dockerizado).
* **ODM:** Mongoose.
* **Pruebas:** Postman, MongoDB Compass.

## Instrucciones de Ejecución
1. **Requisitos Previos:**
   - Tener el motor de Docker encendido.
   - Contar con un contenedor de MongoDB corriendo en el puerto `27017` (por ejemplo, el contenedor local `mongoFes`).
   - Tener instalado Node.js y el gestor de paquetes `pnpm` (o en su defecto `npm`).

2. **Instalación de Dependencias:**
   Abrir la terminal en la raíz del proyecto (`PizzaServiceMongoDB`) y ejecutar el siguiente comando para descargar los módulos necesarios (Express, Mongoose, CORS, etc.):
   ```bash
   pnpm install
   ```

3. **Ejecutar el Servidor:**
   Para iniciar la API en el entorno de desarrollo, ejecutar en la terminal:
   ```bash
   node servicios/index.js
   ```
   *(Nota: Si se tiene configurado un script con nodemon, se puede utilizar `pnpm test` o el comando equivalente definido en el package.json).* 
   
   Al ejecutarse correctamente, la terminal mostrará que el servidor está escuchando en el puerto 3000 y confirmará la conexión exitosa a la base de datos "PizzaMongo".

   ## Pruebas en Postman (Testing)

La API soporta los métodos HTTP estándar del protocolo RESTful (`GET`, `POST`, `PATCH`, `DELETE`). A continuación, se adjunta la evidencia de las pruebas realizadas en el entorno de Postman. 

En la captura se observa la correcta ejecución de los endpoints, incluyendo la creación de un nuevo recurso mediante `POST` y su posterior validación de lectura a través de `GET`, donde se comprueba la persistencia exitosa en MongoDB al visualizar el identificador único `_id` autogenerado por la base de datos.
