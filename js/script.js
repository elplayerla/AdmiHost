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


// Rotación Modelo 3D
const viewer = document.getElementById('modelo3d');

  function rotacionPersonalizada(velocidad = .1) { // ← Aumenta este valor para mayor velocidad
    function rotar() {
      const theta = (performance.now() / 1000 * velocidad * 360) % 360;
      const distancia = viewer.cameraOrbit.split(' ')[2];
      viewer.cameraOrbit = `${theta}deg 90deg ${distancia}`;
      requestAnimationFrame(rotar);
    }
    rotar();
  }

  window.addEventListener('DOMContentLoaded', () => {
    rotacionPersonalizada(.1); // ← Puedes subir a 2, 3, etc.
  });


// Mover DIV en el HTML
function moveButtonsContainer() {
    const buttons = document.getElementById('buttons-container');
    const infoContainer = document.getElementById('info-buttons-container');
    const heroContent = document.querySelector('.hero-section');

    const width = window.innerWidth;

    // Si el viewport es tablet o desktop (mayor o igual a 426px)
    if (width >= 426) {
      if (!infoContainer.contains(buttons)) {
        infoContainer.appendChild(buttons);
      }
    } else {
      // Si es mobile (menor a 426px), devolverlo a su lugar original
      if (!heroContent.contains(buttons)) {
        heroContent.appendChild(buttons);
      }
    }
  }

  // Ejecutar cuando la página carga y al redimensionar
  window.addEventListener('DOMContentLoaded', moveButtonsContainer);
  window.addEventListener('resize', moveButtonsContainer);



// Lottie
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: false, // importante: desactiva el loop automático
  autoplay: true,
  path: 'lottie/house.json' // ruta al archivo .json
});

let goingForward = true;

animation.addEventListener('complete', () => {
    goingForward = !goingForward;
    animation.setDirection(goingForward ? 1 : -1);
    animation.play();
});