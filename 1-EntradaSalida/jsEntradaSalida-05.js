/*Ezequiel Nandin Div D
Ejercicio 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;

	let edad;

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;
	
    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
	
	
}


/* 
    Manera mas sencilla 

    let Nombre;

	let Edad;

	Nombre = txtIdNombre.value;

	Edad = txtIdEdad.value;

	alert("Usted se llama " + Nombre + " y tiene " + Edad + " Años");

	------------------------------------------------------------------------
    Manera mas profesional 

	let nombre;

	let edad;

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value; 

    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
	
	Atencion al uso de comillas antes de invocar archivos del html ("txtId-")


	------------------------------------------------------------------------
	Template string 

	alert(`Usted se llama ${nombre} y tiene ${edad} años`)


*/