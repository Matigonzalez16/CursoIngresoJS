function mostrar()

var ancho;

var largo;

var resultado;


ancho = prompt("Ingrese el ancho:");
document.getElementById("ancho").value = ancho;

largo = prompt("Ingrese el largo:");
document.getElementById("largo").value = largo;

resultado = ancho * 2 + largo * 2;
