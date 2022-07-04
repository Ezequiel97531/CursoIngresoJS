/* Ezequiel Nandin Div D
Ejercicio 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre=prompt("Ingrese su nombre aqui");
	txtIdNombre.value=(nombre)

}

/* 

1)Reservo espacio para la guardar el nombre de usuario 

Let nombre;
   
2)Le pido al usuario que ingrese la variable nombre,mediante un prompt

nombre = prompt("Ingrese su nombre aqui");
   
3)Hacemos que el placeholder(txtIdNombre)Tenga el mismo valor que nuestra variable nombre 

document.getElementById("txtIdNombre").value = nombre;  */