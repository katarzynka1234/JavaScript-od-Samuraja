const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const red = Math.round(x / width * 255);
    const green = Math.round(y / height * 255);
    const blue = Math.round(((x / width * 255) + (y / height * 250)) / 2);

    h1.textContent = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


    //h1.textContent = `${e.clientX} , ${e.clientY}`;
    //h1.textContent = `${e.screenX} , ${e.screenY}`;
    //h1.textContent = `${e.pageX} , ${e.pageY}`;

    //document.body.style.backgroundColor = `rgb(${e.clientX/2}, ${e.clientY/2}, ${e.clientX/e.clientY * 20})`;




})