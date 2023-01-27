# Entrega de portafolio M3

## Requerimientos:

### 1. Desarrollar la lógica de carro de compras de una tienda. El carro de compras debe permitir agregar, quitar productos, aplicar descuentos, sumar el total de los productos en el carro.
###
### 2. Desarrollar el registro/ingreso de usuarios al frontend. Esto se puede hacer como una parte independiente del proyecto o como un Branch del mismo

## Cuenta Github : https://github.com/noyanedelparada

## link Github pages: [Deploy Github Pages](https://noyanedelparada.github.io/Portafolio-M-3/)


## Comandos utilizados en Github:



### git. init --> Para crear un repositorio
### 
### git add . --> Agregamos los cambios al stage area
### 
### git status --> Permite ver los cambios que se han preparado, los que no y los archivos en los que Git no va a realizar el seguimiento
### 
### git commit -m "texto" --> Confirmamos los cambios para versionarlo
### 
### git push origin main/gh-pages --> Subimos los cambios al repositorio remoto (Github) y al deploy
### 
### git log --> Permite ver el historial del proyecto, filtrarlo y buscar cambios concretos
### 
### git checkout -b gh-pages --> Creamos rama para agregar un GitHub pages
### 
### git checkout (nombre-rama) --> Para cambiar de una rama a otra
### 
### git branch --> Nos permite ver las ramas locales
### 
### git merge main/gh-pages --> Con el fin de, desde la rama main fusionar los cambios a la rama gh-pages

## Herramientas utilizadas:

### HTML: Para crear la estructura base de las páginas (carrito, index, registrarse, usuarios), además de agregar imágenes, tablas y links para navegar a otras paginas recomendadas según la categoría seleccionada.

### Bootstrap: Para elaborar una barra de navegación funcional, crear cartas de productos en la página, diseñar los botones en las diferentes paginas, se elaboró una tabla para la pagina de carrito y para la interfaz de registro y login de usuario.

### CSS: Para agregar colores a los títulos y párrafos, además de añadir imágenes y un fondo a la página.

### FontAwesome: Para agregar iconos a la página.

### Javascript y Jquery: Para agregar la funcionalidad a todas las pagina. 
###
### Para la pagina principal: Agregar un contador al carrito, alarmas al agregar productos, generar las tarjetas de productos con sus respectivos elementos y atributos. 
###
### Para la pagina del carrito: Agregar la funcionalidad de agregar y quitar un producto através de botones, generar la tabla de productos con sus precios, descuentos y precio total respecto a la cantidad de productos; generar la funcion para vaciar el carro y para aplicar descuentos, alarmas para confirmar la eliminación un producto, para validar un cupon o para invalidarlo; y finalmente calcular el precio de todos los productos juntos con los descuentos correspondientes. 
###
### Para la pagina de Login y registro: Se desarrollo la logica del ingreso de la pagina asignandole usuarios predeterminados en un "array", además de incorporar alarmas al momento de ingresar tanto los datos validos como invalidos, redirigiendo a la pagina principal al momento de ingresar datos validos; por ultimo, agregar un "registro de la pagina" añadiendo al "array" de los usuarios los nuevos datos registrados con un "push", para finalmente redirigir a la pagina de ingreso.


## Usuarios validos para ingresar
### Usuario 1:
### Nombre: Nicolas 
### Password: 123456 

### Usuario 2:
### Nombre: Ignacio 
### Password: 123456 

## Cupones validos para ingresar

### codigo: 10%            
### codigo: 20%           