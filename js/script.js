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