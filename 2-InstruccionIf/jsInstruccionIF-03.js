function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value)

	if(edad >= 18){
		alert("Eres un mayor de edad");
	}
	else{
		alert("Eres un menor de edad")
	}


}//FIN DE LA FUNCIÓN