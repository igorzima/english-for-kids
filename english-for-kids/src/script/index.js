/* eslint-disable no-restricted-syntax */
// import '../style/style.css';
import '../style/sass/style.scss';
import cards from './cards';
// import createCards from './Card';
import { createMainTrain, createButton, startGame, } from './Functions';
import Mode from './Mode';


const HAMBURGER = document.getElementById('hamburger');
const MENU = document.getElementById('menu');
const NAVIGATION = document.getElementById('navigation');



HAMBURGER.addEventListener('click', () => {
  if (MENU.classList.contains('menu')) {
    MENU.classList.remove('menu');
    if (document.querySelector('input').checked) {
      MENU.classList.add('menu_active', 'train');
    }
    MENU.classList.add('menu_active');
    HAMBURGER.classList.add('hamburger_rotate');
  } else {
    if (document.querySelector('input').checked) {
      MENU.classList.remove('menu_active');
    } else {
      MENU.classList.remove('menu_active', 'train');
    }
    MENU.classList.add('menu');
    HAMBURGER.classList.remove('hamburger_rotate');
  }
})


function createNavigation(arr) {
  let li = `<li class='navigation__item'>Main Page</li>`;
  
  arr[0].map((e) => {
    li += `<li class='navigation__item'>${e}</li>`;
    return li;
  })

  NAVIGATION.innerHTML = li;
  const NAVIGATION_LIST = document.querySelectorAll('.navigation__item');

  for(let i = 0; i < NAVIGATION_LIST.length; i += 1) {
    NAVIGATION_LIST[i].dataset.key = i;
  }
}


createMainTrain(cards);

createNavigation(cards);

if(sessionStorage.mode === undefined || sessionStorage.mode === 'train') {
  Mode('train');
  document.querySelector('input').setAttribute('checked', 'checked');
  sessionStorage.setItem('mode', 'train');
} else if(sessionStorage.mode === 'play') {
  Mode('play');
  document.querySelector('input').removeAttribute('checked');
  sessionStorage.setItem('mode', 'play');
}


document.getElementById('check').addEventListener('click', () => {
  document.querySelector('.slider').classList.add('train');
  const CARDS = document.querySelectorAll('.main-card');

  if(!(document.querySelector('input').checked)) {
    Mode('play');
    sessionStorage.setItem('mode', 'play');

    if (document.querySelector('#cards').classList.contains('set')) {
      if(!document.getElementById('button')) {
        createButton();
      }
      startGame();
    }

    const TRAIN = document.querySelectorAll('.train');

    for (const key of TRAIN) {
      key.classList.remove('train');
    }

    document.querySelectorAll('figcaption').forEach((el) => el.style.display = 'none');
  } else if (document.querySelector('input').checked) {
    Mode('train');
    sessionStorage.setItem('mode', 'train');

    for (const key of CARDS) {
      key.classList.add('train');
    }

    document.getElementById('stars__wrapper').innerHTML = '';

    if(document.getElementById('button')) {
      document.getElementById('button').remove();
    }

    document.querySelectorAll('figcaption').forEach((el) => el.style.display = 'flex');
  }
})
