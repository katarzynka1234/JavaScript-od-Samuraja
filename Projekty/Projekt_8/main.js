const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = 'To jest tekst pisany masyznowo. Teraz będzie się wyświetalać po każdej literce az do końca. To ma być taki super efekt! ;)';

let indexText = 0;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText == txt.length) {
        clearInterval(indexTyping);
    }
}
const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, 100);
setInterval(cursorAnimation, 600);