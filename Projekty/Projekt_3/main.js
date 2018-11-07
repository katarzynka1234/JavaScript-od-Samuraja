// const square = document.querySelector("div");
// let size = 100 // wielkosc kwadratu
// let grow = true; // tzw. flaga


// square.style.width = `${size}px`;
// square.style.height = `${size}px`;


// window.addEventListener("scroll", function () {
//     if (size >= window.innerWidth / 2) {
//         grow = !grow //grow = false;
//     } else if (size <= 0) {
//         grow = !grow //grow = true;
//     }

//     if (grow) {
//         size += 5;
//         square.style.width = `${size}px`;
//         square.style.height = `${size}px`;
//     } else {
//         size -= 5;
//         square.style.width = `${size}px`;
//         square.style.height = `${size}px`;
//     }
// })


/// ZADANIE Z KWADRATEM

document.body.style.height = "10000px";
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

let heightSize = 50;

newDiv.style.height = `${heightSize}px`;
newDiv.style.backgroundColor = "blue";
newDiv.style.width = "100%";
newDiv.style.position = "fixed";
newDiv.style.top = "0";
newDiv.style.left = "0";

let grow = true;
const maxHeight = window.innerHeight / 2;

const changeHeight = () => {
    if (heightSize > maxHeight) {
        grow = !grow;
    } else if (heightSize <= 0) {
        grow = !grow;
    }

    if (grow) {
        heightSize += 5;
        newDiv.style.height = `${heightSize}px`;
        newDiv.style.backgroundColor = "blue";
    } else {
        heightSize -= 5;
        newDiv.style.height = `${heightSize}px`;
        newDiv.style.backgroundColor = "red";
    }

}

document.addEventListener("scroll", changeHeight);