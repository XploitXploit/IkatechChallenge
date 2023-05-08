
# IkatechChallenge
Challenge for Ikatech by Francisco Pellerano Cardús


# Introduccion
Este challenge esta dividido en dos carpetas, backend y frontend. Cada una con la respectiva solucion a los problemas planteados.

 - ## Frontend
	 Este es un clon de la pagina de hushpuppies, cuanta con tres vistas: home, categoria y detalle del producto. Hay un solo link funcional desde el home, **CATEGORIAS**, este te lleva a la pagina de categorias y de ahi, desde el producto a la página de detalle.
	 - ### Tecnologias Utilizadas:
		 - React: la base de nuestra aplicación de front.
		 - React-Router: facil manejo de las rutas de nuestro projecto y manejar la historia de la navegación.
         - Redux: es la tecnologia para nuestra store
         - React-Redux: permite crear un store en nuestra aplicacion de manera mas simple
         - redux-toolkit: nos permite un mas facil manejo de nuestros reductores, facilitandolo con la creación de slices
		 - React-bootstrap: para poder simplificar el manejo de bootstrap en nuestra página.
		 - Nginx: permite montar un servidor para servir los estaticos de la pagina
		 - Docker: facilita la creación de una imagen lista para producción, que contiene el build de nuestros archivos estáticos y el servidor que los sirve.

Para correr el proyecto hay creado un bash run.sh, con correr este archivo deberia poder ingresar al sitio a traves de la url http://localhost:3333/. Para correrlo hay que estar dentro de la carpeta frontend

 - ## Backend
Dentro de la carpeta backend encontrara un archivo .docx con la solucion de todos los problemas planteados por el challenge de backend, para una aplicacion tipo uber. A su vez se adjuntan los diagramas utilizados, estos estan en el archivo .docs, pero para mejor vizualizacion estan en formato .png.


## Conclusión
Al completar este desafío, aplicar diferentes tecnologías y conceptos de desarrollo tanto para frontend como para backend. A continuación, se presentan algunas sugerencias para mejorar el proyecto:

1.  Implementar tests unitarios y de integración utilizando Jest y React Testing Library en el frontend y, por ejemplo, Mocha o Jest en el backend. Esto permitirá asegurar la calidad y estabilidad del código a medida que se agregan nuevas funcionalidades.
    
2.  Mejorar la accesibilidad y la experiencia de usuario (UX) en la página, asegurándose de que todos los elementos sean accesibles y se puedan navegar utilizando el teclado.
    
3.  Considerar la implementación de un sistema de autenticación y autorización para restringir el acceso a ciertas funcionalidades solo a usuarios registrados y con permisos específicos.
    
4.  Optimizar la aplicación para dispositivos móviles y diferentes resoluciones de pantalla utilizando diseño responsive.
    
5.  Asegurar la seguridad de la aplicación utilizando buenas prácticas, como la validación y sanitización de datos de entrada, para evitar vulnerabilidades como inyección SQL o XSS.
    
6.  Implementar un sistema de cache y optimización de consultas en el backend para mejorar la velocidad y eficiencia de las respuestas del servidor.
    
8. Implementar el carrito de compras usando react-redux y redux para mantener las compras del usuario.

9. Crear el componente carrito y que sea visible desde todas las pantallas.

10. Crear un makefile con los alias necesarios para hacer que la experiencia de desarrollador sea mas placentera.

Desde ya muchas gracias por la oportunida, espero quien lo lea, tenga un buen dia.

Francisco Pellerano Cardús.