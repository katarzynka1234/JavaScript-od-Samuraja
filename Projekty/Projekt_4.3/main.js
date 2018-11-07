const div = document.querySelector("div");

let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertX;
let insertY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "gray";
    drawActive = !drawActive;

    insertX = e.offsetX;
    insertY = e.offsetY;
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX;
        divY = e.clientY;
        div.style.left = `${divX - insertX}px`;
        div.style.top = `${divY - insertY}px`;
    }
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "black";
    drawActive = !drawActive;
})