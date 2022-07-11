function mostrar()
{
	let edad;

	edad = parseInt=(document.getElementById("txtIdEdad").value);

	if(edad < 13){
		alert("Tu eres un niño")
	}
	else {
		if(edad > 13 && edad < 17){
			alert("Tu eres un adolescente")
		}
		if(edad >= 18){
			alert("Tu eres un adulto")
		}
	}



}//FIN DE LA FUNCIÓN

/*if(edad < 13 ){
	alert("Tu eres un niño")
}
if(edad >= 13 ){
	if(edad <=17){
		alert("Tu eres un adolescente")
	}
	if(edad >= 18){
		alert("Tu eres un adulto")
	}
}
*/