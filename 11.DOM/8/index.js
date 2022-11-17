/* A través del DOM, los programas pueden acceder y modificar el contenido, estructura y estilo de los documentos mencionados, 
que es para lo que se diseñó principalmente.
De esta manera el DOM permite acceso dinámico a través de la programación para acceder, añadir y cambiar dinámicamente
contenido estructurado en documentosñ.*/

/* <div id="IdiomasWiki">
	<li>Deutsch</li>
	<li>English</li>
	<li>Français</li>
</div> */

//Para hacer referencia a este elemento se puede usar la función getElementById
document.getElementById("IdiomasWiki")
//Y realizar alguna operación sobre el mismo, en este caso agregamos un nuevo elemento:
document.getElementById("IdiomasWiki").innerHTML += "<li>Português</li>"