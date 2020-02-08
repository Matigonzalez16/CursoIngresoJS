function mostrar()
{
  var nombre;
  var localidad;

  document.getElementById('elNombre').value = nombre;
  document.getElementById("laLocalidad").value = localidad;

  alert(`Usted es ${nombre} y vive en la localidad de ${localidad}` );

}
