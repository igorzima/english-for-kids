const HAMBURGER = document.getElementById('hamburger');
const MENU = document.getElementById('menu');


HAMBURGER.addEventListener('click', (event) => {
  if (MENU.classList.contains('menu')) {
    MENU.classList.remove('menu');
    MENU.classList.add('menu_active');
    HAMBURGER.classList.add('hamburger_rotate');
  } else {
    MENU.classList.remove('menu_active');
    MENU.classList.add('menu');
    HAMBURGER.classList.remove('hamburger_rotate');
  }
})