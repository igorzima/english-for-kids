import '../style/style.css';
import '../style/sass/style.scss';
import cards from './cards';
import createCards from './Card';

const HAMBURGER = document.getElementById('hamburger');
const MENU = document.getElementById('menu');


HAMBURGER.addEventListener('click', () => {
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

const NAVIGATION = document.getElementById('navigation');

function createNavigation(arr) {
  let li = `<li class='navigation__item'>Main Pagen</li>`;

  arr[0].map((e) => {
    li += `<li class='navigation__item'>${e}</li>`;
    return li;
  })
  NAVIGATION.innerHTML = li;
}


// document.addEventListener('click', (event) => {console.log(event.target)})

// const check = document.getElementById('check');
// function isCheck() {
//   check.addEventListener('click', () => {
//   })

createNavigation(cards);
createCards(cards[1]);


const RETURN = document.querySelectorAll('.card');

Array.from(RETURN).map((el) => {
  el.addEventListener('click', (event) => {
    if(event.target.className === 'icon') {
      el.classList.add('reverse');
    }
  })

  el.addEventListener('mouseleave', () => {
    el.classList.remove('reverse');
  })
})

const PLAY = document.querySelectorAll('figure');

Array.from(PLAY).map((el) => {
  el.addEventListener('click', (event) => {
    const audio = document.querySelector(`audio[data-key='${el.className}']`);

    if(!(event.target.className === 'icon')) {
      audio.play();
    }
  })
})