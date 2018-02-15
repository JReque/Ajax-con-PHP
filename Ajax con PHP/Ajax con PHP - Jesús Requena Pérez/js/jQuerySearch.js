{
  $(document).ready(function() {
    let busqueda = $("#busqueda");
    let coincidencias = $("#coincidencias");

    busqueda.keyup(function(){
      $.ajax({
        url: "alumnos.php?solicitud="+busqueda.val()
      })
      .done(function(data){
        coincidencias.html(data);
      });
    });
  });
}