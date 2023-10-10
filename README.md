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

### Spring Boot:
Por el lado de Spring Boot de igual manera tenemos 3 componentes:
- Spring RestController: Es el controlador encargado de comunicar con el modelo desarrollado para ello el mismo se expone como una API Rest con sus respectivos métodos GET, POST, PUT y DELETE para asemejar a las operaciones CRUD (CREATE, READ, UPDATE y DELETE)
- Spring Data JPA: Las clases de modelo son las encargadas de mapear los datos obtenidos desde la base de datos para que sean manipulados por la vista a travé del RestController.
- SQL Sever Database: La base de datos utilizada para este ejercicio fue SQL Server donde se almacenan los datos creados y se garantiza su futura manipulación.

# Login
Dentro del aplicativo se muestra en la pantalla de inicio un único botón que permite abrir el formulario de login y registro, una vez que este es llenado correctamente, la pantalla de inicio cambia permitiendo acceder a la tabla del ejercicio MVC realizado previamnete, para el desarrollo del login dentro del aplicativo fue necesario la creación de nuevas clases dentro del Backend (Modelos y Controladores) así como en el Frontend.

## Diagrama Login
![Alt text](<imagenes_readme/Bedón Adrián - Diagrama Login.jpg>)

## Explicación:
Para el funcionamiento completo del login el usuario interactúa con tres componentes: el Frontend, el Backend y la Base de Datos (SQL Server) y es esta interacción la que se describirá a continuación.

Dentro del Frontend el usuario interactuará con el formulario de Login o Registro dependiendo de la opción que este seleccione se continuará con uno de los siguientes flujos:

### Login:
Una vez que el usuario haya completado el formualario de Login y de click en el botón "Sign in" se inicia la función onLogin(), la cual lleva como parámetros el usuario y contraseña a través de una petición POST a la API del backend, una vez llega la petición se busca el registro en la Base de Datos a través del nombre de usuario con la función findByLogin() para validarlo, cuando se validan las credenciales el UserService se encarga de generar un token que durará 60 minutos y que permitirá al usuario acceder a la funcionalidades del aplicativo, y lo devuelve dentro de la respuesta al Frontend donde es almacenado en la clase axios-helper para su uso en las diferentes peticiones.

### Registro:
Una vez que el usuario haya completado el formulario de Registro y de click en el botón "Sign up" se inicia la función onRegister(), la cual lleva como parámetros el nombre, apellido, usuario y contraseña a través de una petición POST a la API del backend, una vez llega la petición se hace una búsqueda previa en la base de datos con la función findByLogin() para asegurarse de que no exista un registro de este usuario, posterior a esto con la función save() se registran los datos dentro de la base de datos y el UserService comienza el proceso de generación de toke para retornarlo en la respuesta, cuando la respuesta llega al Frontend el token es almacenado en la clase axios-helper para su uso posterior.

