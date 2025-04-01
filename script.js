const menuToggle = document.getElementById('menu-toggle');
const menuLista = document.getElementById('menu-lista');

menuToggle.addEventListener('click', () => {
    menuLista.classList.toggle('mostrar');
    menuToggle.classList.toggle('activo');
});

// Detecta clics fuera del menú para cerrarlo
document.addEventListener('click', (event) => {
    const esClickEnMenu = menuLista.contains(event.target) || menuToggle.contains(event.target);
    const esMenuAbierto = menuLista.classList.contains('mostrar');

    if (!esClickEnMenu && esMenuAbierto) {
        menuLista.classList.remove('mostrar');
        menuToggle.classList.remove('activo');
    }
});