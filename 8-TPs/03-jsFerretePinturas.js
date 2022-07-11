/*
Ezequiel Nandin Div D
Trabajo Practico Numero 3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let centígrados;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    centígrados = fahrenheit / 33.8;

    alert(fahrenheit + " grados Fahrenheit son " + centígrados.toFixed(2) + " grados centígrados");


    
}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let centígrados;
	
    centígrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = centígrados * 33.8;

    alert(centígrados.toFixed(2) + " grados centígrados son " + fahrenheit.toFixed(2) + " grados fahrenheit");

}
