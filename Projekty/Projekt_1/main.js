const btn = document.querySelector(".button-klik");
const container = document.querySelector(".container");
let number = 1;



const addElement = () => {
    const div = document.createElement('div');
    container.appendChild(div);
    div.className = "box";
    div.textContent = number;
    number++;
    if (number % 5 == 0) {
        div.classList.add("circle");
    }
}

btn.addEventListener("click", addElement);