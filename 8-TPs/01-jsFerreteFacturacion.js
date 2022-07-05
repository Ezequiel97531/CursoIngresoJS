/*Ezequiel Nandin Div D
Trabajo Practico 01 
1.Para el departamento de facturación:
A.Ingresar tres precios de productos y mostrar la suma de los mismos.
B.Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	let PrecioUno; 
    let PrecioDos;
    let PrecioTres;
    let Resultado;
    
    PrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    Resultado = PrecioUno + PrecioDos + PrecioTres;

    alert("Tu suma es de " + Resultado);

}
function Promedio () 
{
    let PrecioUno; 
    let PrecioDos;
    let PrecioTres;
    let Resultado;
    let promedio;

    PrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    Resultado = PrecioUno + PrecioDos + PrecioTres;

    promedio = Resultado / 3;
 
    alert("El promedio es de " + promedio );


}
function PrecioFinal () 
{
	let PrecioUno; 
    let PrecioDos;
    let PrecioTres;
    let Resultado;
    let IVA
    let PrecioFinal

    PrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    Resultado = PrecioUno + PrecioDos + PrecioTres;
    
    IVA = Resultado * 21 / 100;
    
    PrecioFinal= PrecioUno + PrecioDos + PrecioTres + IVA;

    alert("El Precio Final es de " + PrecioFinal);

}


