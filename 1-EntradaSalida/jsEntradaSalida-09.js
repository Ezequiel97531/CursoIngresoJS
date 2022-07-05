/*Ezequiel Nandin Div D
Ejercicio 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;

	let importe;
	
	let aumento;

	sueldo =parseInt(document.getElementById("txtIdSueldo").value);
	
	aumento = sueldo * 10 / 100;
	
	importe = sueldo + aumento;

	document.getElementById("txtIdResultado").value = "Tu importe total es de " + importe;
}


/*
Forma de crear el programa con el usuario determinando el % de aumento.
    let sueldo;

	let importe;
	
	let aumento;

	let Porcentaje

    
	sueldo =parseInt(document.getElementById("txtIdSueldo").value);
	
	Porcentaje = prompt("Ingrese su porcentaje")
	
	Porcentaje = parseInt(Porcentaje)
	
	aumento = sueldo * Porcentaje / 100;
	
	importe = sueldo + aumento;

	document.getElementById("txtIdResultado").value = "Tu importe total es de " + importe;*/

	