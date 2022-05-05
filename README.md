# grupo_4_integrador
Para ejecutar la aplicacion:  
Paso a paso  
1)Clonar o descargar el proyecto de la rama main : https://github.com/SebasJS/grupo_4_integrador.git  
2)En mySql ejecutar el script para crear las tablas BasesDeDtos.TXT, que se encuentra dentro del proyecto  
3)En mySql ejecutar el scritpt para llenar la basede datos ScriptParaLlenardb.txt, tambien se encuentra dentro de los archivos del proyecto  
4)Ejecutar en visual studio code dentro del directorio Grupo_4_Integrador npm install  
5)Cambiar la contraseña de la DB en el archivo src/database/config.js  
6)En la terminal ejecutar el comando npx nodemon src/app.js para levantar el servidor  
7)En otra terminal ejecutar abrir el archivo client y ejecutar npm install  
8)Luego de que se instalen los paquetes y estando dentro de la carpeta client en la terminal ejecutar npm start y decir 'y' en consola para iniciar react  
6)En el navegador la ruta http://localhost:3000/ enviara al index de la pagina  
7)Clickear los iconos que se encuentan al lado derecho del header para iniciar sesion o crear nuevo usuario respectivamente  
8)Para realizar crud de usuarios y productos se debe logear como administrador para esto usar el usuario por defecto pepito@gmail.com con contraseña Perez@123  
9)Para administrar usuarios o productos una vez logeado como administrador se debe bajar hasta el footer y clickear sobre administrar usuarios o administrar productos dependiendo lo que se quiera hacer  
10)Para iniciar sesion como usuario usar el usuario por defecto pepitoRamirez@gmail.com y contraseña Ramirez@123, o en su defecto clickear el logo del header del lado derecho para crear un nuevo usuario (si se crea un usuario desde este boton al no estar logeado autoamticamente se le asigna el rol de user y no el de admin), por lo anterior este usuario no puede modificar otros usuarios o productos.  


Descripción
Tienda virtual de todo tipo de artículos deportivos, por ejemplo : ropa, tenis, bicicletas, balones, morrales, etc.

La idea principal es hacer una tienda en la cual el usuario podrá navegar por diferentes categorías, ver diferentes productos y conocer diferentes características de estos, como por ejemplo lugar de fabricación, materiales, colores tamaños, precios, también podrán agregar al carrito, consultar precios de envió y apartar productos.

Publico objetivo: niñas niños jóvenes o adultos deportistas o aficionados a los deportes.

Paginas web de referencia:
Decathlon Colombia | Tienda deportiva , Ropa deportiva y accesorios. 
Atlanta Deportes - Tienda Deportiva Online - Salud recreación y deporte 

Juan Camilo Salazar Restrepo

Joan Sebastian Gomez Vargas

Manuel Alejandro Ropero Mosquera
