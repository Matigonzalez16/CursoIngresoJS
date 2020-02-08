/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuento = -25;
	var total = 100;
	var resultado;

	sueldo = document.getElementById("importe").value;
	sueldo = parseInt(sueldo);

	resultado = sueldo * descuento / total;
	document.getElementById("resultado").value = resultado;
	
}
