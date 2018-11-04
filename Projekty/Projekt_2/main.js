const btn = document.querySelector("button");
const list = document.querySelector("ul");
let number = 1;

btn.addEventListener("click", function () {
    const newElem = document.createElement("li");
    newElem.textContent = number;
    list.appendChild(newElem);
    if (number % 3 == 0) {
        newElem.style.fontSize = "30px";
        newElem.style.fontWeight = "bold"
    }
    number += 2;
});