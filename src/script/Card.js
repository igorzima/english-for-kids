function createCards(arr) {
  let div = ``;

  arr.map((el) => {
    div += `<div class='card'>
      <figure class='${el.word}'>
        <img class='card__image' src='${el.image}'></img>
        <figcaption class='card__word'><span></span>${el.word}<img src='img/return.png' class ='icon'></img></figcaption>
        <audio src='${el.audioSrc}' data-key='${el.word}'></audio>
      </figure>
      <figure class='back'>
        <img class='card__image' src='${el.image}'></img>
        <figcaption class='card__word'>${el.translation}</figcaption>
      </figure>
      </div>`;
    return div;
  })
  document.getElementById('cards').innerHTML = div;
}

export default createCards;