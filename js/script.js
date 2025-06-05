// HEADER Y MENÚ
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menuppal');
  const body = document.body;
  const links = document.querySelectorAll('.menuppal a');
  const logo = document.getElementById('logo');

  // Click en el logo recarga la página
  logo.addEventListener('click', () => {
    window.location.reload();
  });

  // Toggle del menú
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is_active');

    // Bloquear o restaurar scroll
    body.style.overflow = menu.classList.contains('is_active') ? 'hidden' : 'auto';
  });

  // Links del menú: cerrar menú y hacer scroll suave
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      // Cerrar menú
      hamburger.classList.remove('is-active');
      menu.classList.remove('is_active');
      body.style.overflow = 'auto';

      // Esperar a que se cierre antes de hacer scroll
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350); // debe coincidir con la transición del menú
    });
  });
});

// Hacer que al dar clic en el <li> se dispare el enlace interno
const menuItems = document.querySelectorAll('.menuppal li');

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Si se hizo clic en el <a>, dejamos que lo maneje el listener original
    if (e.target.tagName.toLowerCase() === 'a') return;

    // Buscar el <a> dentro del <li> y disparar su click
    const link = item.querySelector('a');
    if (link) {
      link.click();
    }
  });
});



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

    // Si el viewport es tablet o desktop (mayor o igual a 768px)
    if (width >= 768) {
      if (!infoContainer.contains(buttons)) {
        infoContainer.appendChild(buttons);
      }
    } else {
      // Si es mobile (menor a 768px), devolverlo a su lugar original
      if (!heroContent.contains(buttons)) {
        heroContent.appendChild(buttons);
      }
    }
  }

  // Ejecutar cuando la página carga y al redimensionar
  window.addEventListener('DOMContentLoaded', moveButtonsContainer);
  window.addEventListener('resize', moveButtonsContainer);



// Invertir orden de reviews y mantener scroll al inicio
window.addEventListener('DOMContentLoaded', () => {
  const scroller = document.querySelector('.reviews-scroller');
  const items = Array.from(scroller.children);
  items.reverse().forEach(item => scroller.appendChild(item));
});



// FAQ SECTION
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const currentlyOpen = document.querySelector('.faq-question.active');
      if (currentlyOpen && currentlyOpen !== q) {
        currentlyOpen.classList.remove('active');
        currentlyOpen.nextElementSibling.style.maxHeight = null;
      }

      q.classList.toggle('active');
      const answer = q.nextElementSibling;
      if (q.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });



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