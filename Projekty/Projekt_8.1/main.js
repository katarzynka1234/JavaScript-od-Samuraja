const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = ['Witam Cię', 'Miło mi, że możemy razem pracować', 'Zaczynamy!'];


let indexText = 0;
let indexWord = -15;

const addLetter = () => {
    if (indexWord >= 0) {
        spanText.textContent += txt[indexText][indexWord];
    }
    indexWord++;
    if (indexWord == txt[indexText].length) {
        indexText++;
        if (indexText == txt.length) return;
        return setTimeout(() => {
            indexWord = -15;
            spanText.textContent = '';
            addLetter();
        }, 2000)

    }
    setTimeout(addLetter, 100);

}

addLetter(); //pierwsze wywołanie


// Animacja kursora
const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 600);