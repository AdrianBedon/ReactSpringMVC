# Framework
## MVC:
Para el desarrollo de este ejercicio se decidió hacer uso de React para la construcción del Frontend, es decir las vistas que se encargarán de mostrar los datos hacia el usuario, por otro lado para la construcción del backend, es decir el modelo y el controlador, se utilizó el framework Spring Boot (Java) que permitió una manipulación efectiva de los datos almacenados dentro de la base de datos, es decir una correcta recuperación y actulización de los datos, así como la correcta conexión con las vistas desarrolladas en React.

## Arquitectura:
![Alt text](<imagenes_readme/Bedón Adrián - Arquitectura MVC CRUD.jpg>)

## Explicación:
### React:
Por el lado de React tenemos 3 grandes componentes: 
- Enrutador: Es el encargado de mapear las diferentes rutas que se manejan dentro de las vistas
- Componentes de Redux Store: Enargados del almacenamiento de las diferentes vistas en un formato de árbol para su despliegue
- Servicio: Encargado de conectarse con el backend a través de protocolos Http.

Por el lado de Spring Boot de igual manera tenemos 3 componentes:
- Spring RestController: Es el controlador encargado de comunicar con el modelo desarrollado para ello el mismo se expone como una API Rest con sus respectivos métodos GET, POST, PUT y DELETE para asemejar a las operaciones CRUD (CREATE, READ, UPDATE y DELETE)
- Spring Data JPA: Las clases de modelo son las encargadas de mapear los datos obtenidos desde la base de datos para que sean manipulados por la vista a travé del RestController.
- SQL Sever Database: La base de datos utilizada para este ejercicio fue SQL Server donde se almacenan los datos creados y se garantiza su futura manipulación.

