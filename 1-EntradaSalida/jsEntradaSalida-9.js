/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento = 10;
	var total = 100;
	var resultado;


	sueldo = document.getElementById("sueldo").value;
	
	sueldo = parseInt(sueldo);

	resultado = aumento * sueldo / total;

	document.getElementById("resultado").value = resultado;

	
}
