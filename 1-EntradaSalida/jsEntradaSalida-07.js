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
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno - numerodos 
   
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno * numerodos 
   
	alert("El producto es " + resultado);
}

function dividir()
{
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno / numerodos 
   
	alert("El cociente es " + resultado);
}

//En este ejercicio no hace falta reescribir las variables