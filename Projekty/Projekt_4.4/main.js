let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    //     //console.log(e.keyCode); //UP -38 , DOWN = 40
    //     if (e.keyCode == 38) {
    //         red++;
    //         green++;
    //         blue++
    //         document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //         if (red > 255) {
    //             red = 0;
    //             green = 0;
    //             blue = 0;
    //         }
    //     } else if (e.keyCode == 40) {
    //         red--;
    //         green--;
    //         blue--;
    //         document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //         if (red < 0) {
    //             red = 255;
    //             green = 255;
    //             blue = 255;
    //         }
    //     };

    switch (e.keyCode) {
        case 38:
            red < 255 ? red++ : red;
            green < 255 ? green++ : green;
            blue < 255 ? blue++ : blue;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;
        case 40:
            red > 0 ? red-- : red;
            green > 0 ? green-- : green;
            blue > 0 ? blue-- : blue;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;
    }

    console.log(red);
}



window.addEventListener('keydown', changeColor)