/*Ezequiel Nandin Div D
Ejercicio 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numerouno;

	let numerodos;
   
	let resultado;
   
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
   
	numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
   
	resultado = numerouno + numerodos 
   
	alert("la suma es " + resultado)
	
	
}

/*
Forma larga

 let numerouno;

 let numerodos;

 let resultado;

 numerouno = document.getElementById("txtIdNumeroUno").value;
 
 numerouno = parseInt(numerouno);

 numerodos = document.getElementById("txtIdNumeroDos").value;

 numerodos = parseInt(numerodos)

 resultado = numerouno + numerodos
 
 alert("La suma es " + resultado) 
------------------------------------------------------------------
Forma corta 
 let numerouno;

 let numerodos;

 let resultado;

 numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);

 numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);

 resultado = numerouno + numerodos 

 alert("la suma es " + resultado)

*/
