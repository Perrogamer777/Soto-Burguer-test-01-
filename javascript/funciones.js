$(document).ready(function () {
  irArriba();
  $("#alertRojo").hide();
  $("#alertVerde").hide();


});



// Ventana modal
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];





// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
  });


// wea pal google map :)
function initMap() {
  //coordernas
  var coord = { lat: -41.4727879, lng: -72.9369317};
  
  var map = new google.maps.Map(document.getElementById("divmap"), {
    zoom: 15,
    center: coord,
  });
  //marcador
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}


// validar correo
function validarCorreo (correo){
  var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido= expReg.test(correo);

  if(esValido==true){
    $("#alertVerde").show();
    $("#alertRojo").hide();

  }
  else{
    $("#alertRojo").show();
    $("#alertVerde").hide();
  }

}

//funcion ir arriba
function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}

