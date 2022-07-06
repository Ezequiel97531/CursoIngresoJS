/*Ezequiel Nandin Div D
Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
let Importe;
let Descuento;
let Resultado;
let Porcentaje

Importe = parseInt(document.getElementById("txtIdImporte").value);

Porcentaje = prompt("ingrese su porcentaje de descuento")

Porcentaje = parseInt(Porcentaje)

Descuento = Importe * Porcentaje / 100

Resultado = Importe - Descuento 

document.getElementById("txtIdResultado").value = "Su precio a pagar es de " + Resultado

alert("Usted recibe " + Descuento + " De descuento")
}

/*
    let Importe;
	let Descuento;
	let Resultado;

	Importe = parseInt(document.getElementById("txtIdImporte").value);

	Descuento = Importe * 25/100 ;

	Resultado = Importe - Descuento;

	document.getElementById("txtIdResultado").value = Resultado;
*/