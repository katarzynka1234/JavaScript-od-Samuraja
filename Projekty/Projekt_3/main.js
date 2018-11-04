const square = document.querySelector("div");
let size = 100 // wielkosc kwadratu
let grow = true;


square.style.width = `${size}px`;
square.style.height = `${size}px`;


window.addEventListener("scroll", function () {
    if (size >= window.innerWidth / 2) {
        grow = !grow //grow = false;
    } else if (size <= 0) {
        grow = !grow //grow = true;
    }

    if (grow) {
        size += 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    } else {
        size -= 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    }
})