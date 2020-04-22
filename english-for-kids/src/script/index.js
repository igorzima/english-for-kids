/* eslint-disable no-restricted-syntax */
// import '../style/style.css';
import '../style/sass/style.scss';
import cards from './cards';
import { createMain, createButton, startGame, cardListener } from './Functions';
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
  let li = `<li class='navigation__item active'>Main Page</li>`;
  
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

NAVIGATION.addEventListener('click', (event) => {
  const NAVIGATION_LIST = document.querySelectorAll('.navigation__item');

  if(event.target !== NAVIGATION) {
    if(document.querySelector('input').checked) {
      NAVIGATION_LIST.forEach(el => el.classList.remove('active'));
      NAVIGATION_LIST.forEach(el => el.classList.remove('active_play'));
      event.target.classList.add('active')
    } else {
      NAVIGATION_LIST.forEach(el => el.classList.remove('active'));
      NAVIGATION_LIST.forEach(el => el.classList.remove('active_play'));
      event.target.classList.add('active_play');
    }
  }
})


createMain(cards, 'train');

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
  const MAINCARDS = document.querySelectorAll('.main-card');
  const CARDS = document.querySelectorAll('.card__image');

  if(!(document.querySelector('input').checked)) {
    Mode('play');
    sessionStorage.setItem('mode', 'play');
    document.getElementById('navigation').style.color = '#000000';

    for (const key of CARDS) {
      key.style.height = 'inherit';
    }

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

    document.querySelectorAll('figcaption').forEach(function(e) {
      e.style.display = 'none';
    });
  } else if (document.querySelector('input').checked) {
    Mode('train');
    cardListener();
    sessionStorage.setItem('mode', 'train');

    for (const key of CARDS) {
      key.style.height = 'auto';
    }

    document.getElementById('menu').classList.add('train');
    document.getElementById('navigation').style.color = '#ffffff';


    for (const key of MAINCARDS) {
      key.classList.add('train');
    }

    document.getElementById('stars__wrapper').innerHTML = '';

    if(document.getElementById('button')) {
      document.getElementById('button').remove();
    }

    document.querySelectorAll('figcaption').forEach(function(e) {
      e.style.display = 'flex';
    });
  }
})
