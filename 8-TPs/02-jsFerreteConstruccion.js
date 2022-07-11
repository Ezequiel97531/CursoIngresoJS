/*2
Ezequiel Nandin Div D
Trabajo Practico Numero 3
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambre;
    let perimetro;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

    alert("Se necesita comprar una cantidad de " + alambre + "m");

}
function Circulo () 
{
    let alambre;
    let radio;
    let perimetro; 
    const pi = 3.14;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * pi * radio;

    alambre = perimetro * 3

    alert("La cantidad de alambre que necesitamos es de " + alambre);




}
function Materiales () 
{
    let ancho;
	let area;
    let largo;
    
    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo + ancho ;

    cemento = area * 3;
    cal = area * 2;

    alert("Para construir un contrapiso de " + area + " m2 necesito comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}



/*
/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let hiladas;
    let alambre;

    hiladas= 3;

    largo= document.getElementById("txtIdLargo").value;
    ancho= document.getElementById("txtIdAncho").value;

    largo= parseFloat(largo);
    ancho= parseFloat(ancho);

    //perimetro: suma de todos los lados;
    //perimetro= largo + largo + ancho + ancho;
    //perimetro= (2 * largo) + (2 * ancho);
    perimetro= (largo + ancho) * 2;

    alambre= perimetro * hiladas;

    alert("Se necesita " + alambre.toFixed(2) + " metros de alambre");

}

/*
entradas: largo y ancho, cantidad de hiladas/vueltas (3)
procesos: calcular el perimetro por la cantidad de vueltas 
salidas: mensaje mostrando el resultado
*/
/*function Circulo () 
{
	
    var radio;
    var perimetro;
    var hiladas;
    var resultado;
    var mensaje;
    const Pi = 3.14;

    hiladas = 3

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    //perimetro = 2 * 3.14 * radio; 
    //perimetro = 2 * Pi * radio;
    //alert(Math.PI);
    perimetro = 2 * Math.PI * radio;
    resultado = perimetro * hiladas;

    mensaje = "Se necesitan " + resultado.toFixed(2) + " metros de alambre";
    alert(mensaje);

}

/* 
entradas: definir variables
procesos: calcular perimetro, calcular diametro(2*r),calcular cantidad de alambre 
salidas: mostrar resultado


function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    var mensaje; 

    cemento = 2
    cal = 3

    
}


entradas:Definir largo y ancho,parsear
procesos:Calcular el area,y la cantidad de bolsas de cemento y de cal
salidas:cantidad de bolsas de cemento y cal
*/


