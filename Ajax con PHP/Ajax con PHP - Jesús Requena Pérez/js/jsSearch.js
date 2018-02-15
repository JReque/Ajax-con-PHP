{
	let busqueda;
	let resultado;
	let xhr;

	let buscar = function(){
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = escribir;
		//Creamos la solicitud y le pasamos la busqueda como parametropregunta
		xhr.open("GET", "alumnos.php?solicitud="+busqueda.value , true);
		xhr.send(null);
	}

	let escribir = function(){
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				//Inserta la respuesta de la consulta
				resultado.innerHTML = xhr.responseText;
			}
		}
	}

	let init = function(){
		busqueda = document.getElementById("busqueda");
		resultado = document.getElementById("resultado");
		busqueda.addEventListener("keyup",buscar);
	}
	window.onload = init;	
}