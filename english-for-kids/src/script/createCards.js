function createCards(arr) {
  document.getElementById('cards').innerHTML = '';

  arr.map((el) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const figureForward = document.createElement('figure');
    figureForward.classList.add(`${el.word}`);

    const image = document.createElement('img');
    image.classList.add('card__image');
    image.src = el.image;
    
    const figcaptionForward = document.createElement('figcaption');
    figcaptionForward.classList.add('card__word');
    figcaptionForward.textContent = el.word;

    const span = document.createElement('span');

    const iconReturn = document.createElement('img');
    iconReturn.classList.add('icon');
    iconReturn.src = 'img/return.png'

    figcaptionForward.prepend(span);
    figcaptionForward.append(iconReturn);

    const audioCard = document.createElement('audio');
    audioCard.src = el.audioSrc;
    audioCard.setAttribute('data-key', `${el.word}`);

    figureForward.append(image, figcaptionForward, audioCard);

    const figureBack = document.createElement('figure');
    figureBack.classList.add('back');

    const figcaptionBack = document.createElement('figcaption');
    figcaptionBack.classList.add('card__word');
    figcaptionBack.textContent = el.translation;

    const imageBack = document.createElement('img');
    imageBack.classList.add('card__image');
    imageBack.src = el.image;

    figureBack.append(imageBack, figcaptionBack);

    card.append(figureForward, figureBack);

    document.getElementById('cards').append(card);

    return true;
  })
}

export default createCards;