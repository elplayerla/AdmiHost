// Selecciona la imagen usando su ID
document.getElementById("logo").addEventListener("click", () => {
    // Recarga la página
    window.location.reload();
});

// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);


function mostrarFondoAdecuado() {
  const desktopVideo = document.querySelector('.desktop-video');
  const phoneGif = document.querySelector('.phone-gif');

  if (window.innerWidth <= 767) {
      desktopVideo.style.display = 'none';
      phoneGif.style.display = 'block';
  } else {
      desktopVideo.style.display = 'block';
      phoneGif.style.display = 'none';
  }
}

// Llamar a la función al cargar la página y al redimensionar la ventana
window.onload = mostrarFondoAdecuado;
window.onresize = mostrarFondoAdecuado;