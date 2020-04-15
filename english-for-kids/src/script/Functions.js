import cards from './cards'
import createCards from './Card';

const HAMBURGER = document.getElementById('hamburger');
const MENU = document.getElementById('menu');


function createMain(arr) {
  let div = '';
  
  for(let i = 1; i < arr.length; i += 1) {
    for(let x = 0; x < 1; x += 1) {
      div += `<div class="main-card train"><img src='${arr[i][x].image}' alt=""><span>${arr[0][i-1]}</span></div>`;
    }
  }

  document.getElementById('cards').innerHTML = div;
  const DIV_MAIN = Array.from(document.getElementsByClassName('main-card'));
  for(let i = 0; i < DIV_MAIN.length; i += 1) {
    DIV_MAIN[i].dataset.main = i + 1;
  }
}



function cardListener() {
  const RETURN = document.querySelectorAll('.card');

  const reverse = function(event) {
    if(event.target.className === 'icon') {
      return this.classList.add('reverse');
    }
  }

  const leave = function() {
    return this.classList.remove('reverse');
  }

  RETURN.forEach((el) => {
    if(document.querySelector('input').checked) {
      el.addEventListener('click', reverse);
      el.addEventListener('mouseleave', leave);
    } else {
      el.removeEventListener('click', reverse);
      el.removeEventListener('mouseleave', leave);
    }
  })

  const CARD = document.querySelectorAll('figure');

  const audioPlay = function(event) {
    const audio = document.querySelector(`audio[data-key='${this.className}']`);

    if(!(event.target.className === 'icon')) {
      audio.play();
    }
  }

  CARD.forEach((el) => {
    if(document.querySelector('input').checked) {
      el.addEventListener('click', audioPlay);
    } else {
      el.removeEventListener('click', audioPlay);
    }
  })
}



function mainPage() {
  const DIV_MAIN = Array.from(document.getElementsByClassName('main-card'));

  DIV_MAIN.forEach((el) => {
    el.addEventListener('click', () => {
      switch(el.dataset.main) {
        case  '1':
          createCards(cards[1]);
          cardListener();
          break;
        case '2':
          createCards(cards[2]);
          cardListener();
          break;
        case '3':
          createCards(cards[3]);
          cardListener();
          break;
        case '4':
          createCards(cards[4]);
          cardListener();
          break;
        case '5':
          createCards(cards[5]);
          cardListener();
          break;
        case '6':
          createCards(cards[6]);
          cardListener();
          break;
        default:
          break;
      }
    })
  })
}


function mainPagePlay() {
  const DIV_MAIN = Array.from(document.getElementsByClassName('main-card'));

  DIV_MAIN.forEach((el) => {
    el.addEventListener('click', () => {
      switch(el.dataset.main) {
        case  '1':
          createCards(cards[1]);
          break;
        case '2':
          createCards(cards[2]);
          break;
        case '3':
          createCards(cards[3]);
          break;
        case '4':
          createCards(cards[4]);
          break;
        case '5':
          createCards(cards[5]);
          break;
        case '6':
          createCards(cards[6]);
          break;
        default:
          break;
      }
    })
  })
}



function navigation() {
  const NAVIGATION_LIST = document.querySelectorAll('.navigation__item');

  NAVIGATION_LIST.forEach((el) => {
    el.addEventListener('click', () => {
      MENU.classList.remove('menu_active');
      MENU.classList.add('menu');
      HAMBURGER.classList.remove('hamburger_rotate');

      switch(el.dataset.key) {
        case '0':
          createMain(cards);
          mainPage();
          break;
        case  '1':
          createCards(cards[1]);
          cardListener();
          break;
        case '2':
          createCards(cards[2]);
          cardListener();
          break;
        case '3':
          createCards(cards[3]);
          cardListener();
          break;
        case '4':
          createCards(cards[4]);
          cardListener();
          break;
        case '5':
          createCards(cards[5]);
          cardListener();
          break;
        case '6':
          createCards(cards[6]);
          cardListener();
          break;
        default:
          break;
      }
    })
  })
}

function navigationPlay() {
  const NAVIGATION_LIST = document.querySelectorAll('.navigation__item');

  NAVIGATION_LIST.forEach((el) => {
    el.addEventListener('click', () => {
      MENU.classList.remove('menu_active');
      MENU.classList.add('menu');
      HAMBURGER.classList.remove('hamburger_rotate');

      switch(el.dataset.key) {
        case '0':
          createMain(cards);
          mainPagePlay();
          break;
        case  '1':
          createCards(cards[1]);
          break;
        case '2':
          createCards(cards[2]);
          break;
        case '3':
          createCards(cards[3]);
          break;
        case '4':
          createCards(cards[4]);
          break;
        case '5':
          createCards(cards[5]);
          break;
        case '6':
          createCards(cards[6]);
          break;
        default:
          break;
      }
    })
  })
}


export {cardListener, mainPage, navigation, createMain, mainPagePlay, navigationPlay};