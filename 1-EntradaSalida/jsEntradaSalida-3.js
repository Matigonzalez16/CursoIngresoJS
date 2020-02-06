/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    var errorMessage;

    nombre = document.getElementById("elNombre").value;
    errorMessage = "El nombre ingresado no es valido";

    if (!nombre){
        alert(errorMessage);
        console.log("termino con error la validacion del nombre");
    } else {
        alert(nombre);
        console.log("termino satisfactoriamente la validacion del nombre");
    }
}


