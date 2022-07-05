/*Ezequiel Nandin Div D
Ejercicio 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numerouno;

	let numerodos;
   
	let resultado;
   
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno + numerodos 
   
	alert("La suma es " + resultado);	
}

function restar()
{
	let numerouno;

	let numerodos;
   
	let resultado;

	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno - numerodos 
   
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	let numerouno;

	let numerodos;
   
	let resultado;

	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno * numerodos 
   
	alert("El Multiplicacion es " + resultado);
}

function dividir()
{
	let numerouno;

	let numerodos;
   
	let resultado;

	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno / numerodos 
   
	alert("El cociente es " + resultado);
}

//Es obligatorio volver a reescribir las variables,esto debido a que de normal general el programa no funcionaria si no lo hacemos.