/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-inner-declarations */
import cards from './cards'
import createCards from './Card';

const HAMBURGER = document.getElementById('hamburger');
const MENU = document.getElementById('menu');


function createMain(arr, mode) {
  let div = '';
  document.getElementById('stars__wrapper').innerHTML = '';
  
  for(let i = 1; i < arr.length; i += 1) {
    for(let x = 0; x < 1; x += 1) {
      if(mode === 'train'){
        div += `<div class="main-card train"><img src='${arr[i][x].image}' alt=""><span>${arr[0][i-1]}</span></div>`;
      } else {
        div += `<div class="main-card"><img src='${arr[i][x].image}' alt=""><span>${arr[0][i-1]}</span></div>`;
      }
    }
  }

  document.getElementById('cards').innerHTML = div;
  const DIV_MAIN = Array.from(document.getElementsByClassName('main-card'));
  for(let i = 0; i < DIV_MAIN.length; i += 1) {
    DIV_MAIN[i].dataset.main = i + 1;
  }
}


function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Start game';
  button.classList.add('button');
  button.id = 'button';
  document.querySelector('#main__wrapper').appendChild(button);
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

function createStarWin() {
  const star = `<object type='image/svg+xml' data='./img/star-win.svg' class='star-win'></object>`;
  document.getElementById('stars__wrapper').insertAdjacentHTML('beforeend', star);
}

function createStarWrong() {
  const star = `<object type='image/svg+xml' data='./img/star.svg' class='star-win'></object>`;
  document.getElementById('stars__wrapper').insertAdjacentHTML('beforeend', star);
}


function startGame() {
  const audio = document.querySelectorAll('audio');

  const r = function makeRandomArr() {
    return Math.random() - 0.5;
  }

  const sort = Array.from(audio).sort(r);

  const play = function play() {
    sort[sort.length - 1].play();
  }

  function getWinImage() {
    const failure = `<img src='./img/failure.jpg'></img>`;
    document.getElementById('button').remove();
    document.getElementById('cards').innerHTML = failure;
  }

  function getFailureImage() {
    const win = `<img src='./img/success.jpg'></img>`;
    document.getElementById('button').remove();
    document.getElementById('cards').innerHTML = win;
  }

  const error = document.createElement('audio');
  error.src = `./audio/error.mp3`;
  document.getElementById('cards').insertAdjacentElement('beforeend', error);

  const correct = document.createElement('audio');
  correct.src = `./audio/correct.mp3`;
  document.getElementById('cards').insertAdjacentElement('beforeend', correct);

  const success = document.createElement('audio');
  success.src = `./audio/success.mp3`;
  document.getElementById('cards').insertAdjacentElement('beforeend', success);

  const failure = document.createElement('audio');
  failure.src = `./audio/failure.mp3`;
  document.getElementById('cards').insertAdjacentElement('beforeend', failure);

  function correctSound() {
    correct.play();
  }

  function errorSound() {
    error.play();
  }

  function successSound() {
    success.play();
  }

  function failureSound() {
    failure.play();
  }

  const GAME = document.querySelectorAll('.card');

  let wrong = 0;

  document.getElementById('button').addEventListener('click', () => {
    if(document.getElementById('button').innerText === 'Start game') {
      document.getElementById('button').classList.remove('button');
      document.getElementById('button').classList.add('button_repeat');
      document.getElementById('button').innerText = 'Repeat';
  
      setTimeout(play, 1000);
    } else {
      setTimeout(play, 1000);
    }
  })

  GAME.forEach(el => {
    el.addEventListener('click', () => {
      if(el.querySelector('audio').dataset === sort[sort.length-1].dataset) {
        createStarWin();
        sort.pop();

        if(sort.length !== 0) {
          correctSound();

          setTimeout(play, 1000);
        }
      } else {
        createStarWrong();
        errorSound();
        wrong += 1;
      }

      if(sort.length === 0) {
        if(wrong > 0) {
          failureSound();
          setTimeout(getWinImage, 1000);

          setTimeout(() => {
            createMain(cards, 'play');
            mainPage('play')
          }, 5000);
        } else {
          successSound();
          setTimeout(getFailureImage, 1000);

          setTimeout(() => {
            createMain(cards, 'play');
            mainPage('play')
          }, 5000);
        }
      }
    })
  })
}


function mainPage(mode) {
  const DIV_MAIN = Array.from(document.getElementsByClassName('main-card'));

  if(mode === 'play') {
    const TRAIN = document.querySelectorAll('.train');

    for (const key of TRAIN) {
      key.classList.remove('train');
    }
  }

  DIV_MAIN.forEach((el) => {
    el.addEventListener('click', () => {
      document.getElementById('cards').classList.add('set');
      if(mode === 'play') {
        createButton();
        startGame();
      }

      switch(el.dataset.main) {
        case  '1':
          createCards(cards[1]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        case '2':
          createCards(cards[2]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        case '3':
          createCards(cards[3]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        case '4':
          createCards(cards[4]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        case '5':
          createCards(cards[5]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        case '6':
          createCards(cards[6]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        case '7':
          createCards(cards[7]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        case '8':
          createCards(cards[8]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          break;
        default:
          break;
      }
    })
  })
}



function navigation(mode) {
  const NAVIGATION_LIST = document.querySelectorAll('.navigation__item');

  if(mode === 'play') {
    const TRAIN = document.querySelectorAll('.train');

    for (const key of TRAIN) {
      key.classList.remove('train');
    }
  }

  NAVIGATION_LIST.forEach((el) => {
    el.addEventListener('click', () => {
      MENU.classList.remove('menu_active');
      MENU.classList.add('menu');
      HAMBURGER.classList.remove('hamburger_rotate');

      if(mode === 'play') {
        if(!document.getElementById('button')) {
          createButton();
        }
        startGame();
      }

      switch(el.dataset.key) {
        case '0':
          createMain(cards, 'train');
          if(mode === 'play') {
            mainPage('play');
          } else {
            mainPage('train');
            document.querySelector('.slider').classList.add('train');
          }
          if(document.getElementById('button')) {
            document.getElementById('button').remove();
          }
          document.getElementById('cards').classList.remove('set');
          break;
        case  '1':
          createCards(cards[1]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          document.getElementById('cards').classList.add('set');
          break;
        case '2':
          createCards(cards[2]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          document.getElementById('cards').classList.add('set');
          break;
        case '3':
          createCards(cards[3]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          document.getElementById('cards').classList.add('set');
          break;
        case '4':
          createCards(cards[4]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          document.getElementById('cards').classList.add('set');
          break;
        case '5':
          createCards(cards[5]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          document.getElementById('cards').classList.add('set');
          break;
        case '6':
          createCards(cards[6]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none';
            });
          }
          document.getElementById('cards').classList.add('set');
          break;
        case  '7':
          createCards(cards[7]);
          if(mode === 'train') {
            cardListener();
            if(document.getElementById('button')) {
              document.getElementById('button').remove();
            }
          } else {
            document.querySelectorAll('figcaption').forEach(function(e) {
              e.style.display = 'none'
            });
          }
          document.getElementById('cards').classList.add('set');
          break;
        case  '8':
        createCards(cards[8]);
        if(mode === 'train') {
          cardListener();
          if(document.getElementById('button')) {
            document.getElementById('button').remove();
          }
        } else {
          document.querySelectorAll('figcaption').forEach(function(e) {
            e.style.display = 'none'
          });
        }
        document.getElementById('cards').classList.add('set');
        break;
        default:
          break;
      }
    })
  })
}

export {cardListener, mainPage, navigation, createMain, createButton, startGame};
