function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	var maximoExcluido = 11;
	var minimoExcluido = 1;
	//numeroAleatorio = Math.floor(Math.random() * (maximoExcluido - minimoExcluido)) + 1;
	numeroAleatorio = Math.random();
	numeroAleatorio *= maximoExcluido - minimoExcluido;
	numeroAleatorio = Math.floor(numeroAleatorio);
	numeroAleatorio += minimoExcluido;
	alert(numeroAleatorio);

	//	 numero = numero + 1;
	//	 numero += 1;
	//	 numero ++;
	// Math.floor = redondea al entero mas cercano hacia abajo  y Math.ceil= redondea al entero mas cercano hacia arriba


}//FIN DE LA FUNCIÓN