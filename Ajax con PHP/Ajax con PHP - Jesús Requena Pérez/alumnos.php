<?php

$alumnos = array(
	"Nieves Borrero",
	"Guillermo Boquizo Sánchez",
	"Rafael Carmona Arrabal",
	"Soledad Mª Cruz Moleón",
	"Mario Ferrer Nieto",
	"Dario Fernandez",
	"Miguel Ángel Gavilán Merino",
	"Daniel Gestino Notario",
	"Victor Gomez",
	"Isabel María Gómez Palomeque",
	"Jorge Granados",
	"Pablo Leon",
	"Jose Lucena",
	"David Mateo Cuenca");

$busqueda = $_GET["solicitud"];

if ($busqueda != "") {
	foreach ($alumnos as $alumno) {
		//stristr es para buscar en el array el texto pasado por busqueda
		if(stristr($alumno,$busqueda)){
			if(!isset($resultado)){
				$resultado = "<li>".$alumno."</li>";
			}else{
				$resultado .= "<li>" . $alumno."</li>";
			}
		}
	}
}

if (!isset($resultado)) {
	echo "No hay coincidencias";
}else{
	echo "<ol>".$resultado."</ol>";
}
?>