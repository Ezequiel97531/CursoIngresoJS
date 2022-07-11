function mostrar()
{
	let numero;
	let maximo = 10;
	let minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(numero >= 9){
		alert(numero + " Una nota Excelente")
	}
	else{
		if(numero < 4  == numero > 9){
			alert(numero + " Usted aprobo")
		}
		else{
			if(numero < 4){
				alert(numero + " Vamos,la proxima se puede")
			}
		}
	}

}//FIN DE LA FUNCIÓN

/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/