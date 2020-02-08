
function mostrar()
{
var ancho;

var largo;

var perimetro;


ancho = prompt("Ingrese el ancho:");

largo = prompt("Ingrese el largo:");
document.getElementById("FormIngreso").value = ancho;
document.getElementById("FormIngreso").value = largo;

perimetro = ancho * 2 + largo * 2;
alert("El perimetro del rectangulo es : " +  perimetro);

}
