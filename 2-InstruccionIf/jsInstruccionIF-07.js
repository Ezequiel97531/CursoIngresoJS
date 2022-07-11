function mostrar()
{
	let Edad;
	let EstadoCivil;

	Edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = document.getElementById("estadoCivil").value;

	if(Edad < 18 && EstadoCivil != "Soltero" ){
		alert("Usted es demasiado pequeño para no ser soltero")	
	}

	


}//FIN DE LA FUNCIÓN

/* 
&& 	Logical and	Returns true if both statements are true	x < 5 &&  x < 10	
|| 	Logical or	Returns true if one of the statements is true	x < 5 || x < 4	
!=	Logical not	Reverse the result, returns false if the result is true	!(x < 5 && x < 10)
*/