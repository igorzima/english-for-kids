import '../style/style.css';
import '../style/sass/style.scss';
import cards from './cards';
// import createCards from './Card';
import { createMain } from './Functions';
import Mode from './Mode';


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



createMain(cards);

createNavigation(cards);

Mode('train');





document.getElementById('check').addEventListener('click', () => {
  if(!(document.querySelector('input').checked)) {
    Mode('play');
    // console.log(document.querySelector('input').checked)
    // const button = document.createElement('button');
    // button.innerText = 'Hello';
    // document.querySelector('#main__wrapper').appendChild(button);

    // const audio = document.querySelectorAll('audio');

    // const r = function makeRandomArr() {
    //   return Math.random() - 0.5;
    // }
    // const sort = Array.from(audio).sort(r);

    // const play = function play() {
    //   sort[sort.length - 1].play();
    // }

    // setTimeout(play, 2000);



    // const GAME = document.querySelectorAll('figure');

    // GAME.forEach(el => {
    //   el.addEventListener('click', () => {
    //     if(el.querySelector('audio').dataset === sort[sort.length-1].dataset) {
    //       setTimeout(play, 2000);
    //       sort.pop()
    //     }

    //   })
    // })
  } else if (document.querySelector('input').checked) {
    Mode('train');
  }
})

