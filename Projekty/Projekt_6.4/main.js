const advices = [];

const btnAdd = document.querySelector('.add');
const input = document.querySelector('input');
const btnClean = document.querySelector('.clean');
const btnShow = document.querySelector('.advice');
const h1 = document.querySelector('h1');
const btnOption = document.querySelector('.option');

const addAdvice = (e) => {
    e.preventDefault();
    const newAdvice = input.value;
    if (input.value.length) {
        for (advice of advices) {
            if (newAdvice === advice) {
                alert(`Taka opcja już istnieje!`);
                return;
            }
        }
        advices.push(newAdvice);
        input.value = "";
        alert(`Dodano nową radę: ${newAdvice}.`);
        console.log(advices);
    }
}

const clearAdvices = (e) => {
    e.preventDefault();
    advices.splice(0);
    alert(`Twoje opcje ostały usunięte.`);
    console.log(advices);
    h1.textContent = "";
}

const showAdvice = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor((Math.random() * advices.length));
    const randomAdvice = advices[randomIndex];
    console.log(randomAdvice);
    h1.textContent = `Moja rada to: ${randomAdvice}!`;

}

const showOption = (e) => {
    e.preventDefault();
    alert(`Twoje opcje to: ${advices.join("/ ")}`)

}


btnAdd.addEventListener("click", addAdvice);
btnClean.addEventListener("click", clearAdvices);
btnShow.addEventListener("click", showAdvice);
btnOption.addEventListener("click", showOption);