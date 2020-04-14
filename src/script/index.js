import '../style/style.css';
import '../style/sass/style.scss';
import cards from './cards';
import createCards from './Card';

const HAMBURGER = document.getElementById('hamburger');
const MENU = document.getElementById('menu');
const NAVIGATION = document.getElementById('navigation');



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

createMain(cards);

createNavigation(cards);



function cardListener() {
  const RETURN = document.querySelectorAll('.card');

  RETURN.forEach((el) => {
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

  PLAY.forEach((el) => {
    el.addEventListener('click', (event) => {
      const audio = document.querySelector(`audio[data-key='${el.className}']`);

      if(!(event.target.className === 'icon')) {
        audio.play();
      }
    })
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

mainPage()




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
