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

	Importe = parseInt(document.getElementById("txtIdImporte").value);

	Descuento = Importe * 25/100 ;

	Resultado = Importe - Descuento;

	document.getElementById("txtIdResultado").value = Resultado;


}
