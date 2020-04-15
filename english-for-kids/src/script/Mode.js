// import cards from './cards';
import {cardListener, mainPage, navigation, createMain, mainPagePlay, navigationPlay} from './Functions';

function Mode(mode) {
  if(mode === 'train') {
    // createMain(cards);
    mainPage();
    cardListener();
    navigation();
  } else if(mode === 'play') {
    // mainPagePlay();
    navigationPlay();
    // cardListener();
  }

}

export default Mode;