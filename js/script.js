// Selecciona la imagen usando su ID
document.getElementById("logo").addEventListener("click", () => {
  // Recarga la página
  window.location.reload();
});

// selector
var menu = document.querySelector('.hamburger');
var body = document.querySelector('body'); // Selecciona el elemento body

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();

  // Verifica si el menú está activo para controlar el scroll
  if (this.classList.contains('is-active')) {
      // Si el menú está activo, deshabilita el scroll en el body
      body.style.overflow = 'hidden';
  } else {
      // Si el menú no está activo, habilita el scroll en el body
      body.style.overflow = 'auto';
  }
}

// event
menu.addEventListener('click', toggleMenu, false);