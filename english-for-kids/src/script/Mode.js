// import cards from './cards';
import {cardListener, mainPage, navigation} from './Functions';



function Mode(mode) {
  if(mode === 'train') {
    mainPage('train');
    cardListener();
    navigation('train');
  } else if(mode === 'play') {
    mainPage('play');
    navigation('play');
  }
}

export default Mode;