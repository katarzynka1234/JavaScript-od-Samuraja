// http://websamuraj.pl/examples/js/projekt11/

const start = document.querySelector('button.main');
const reset = document.querySelector('button.reset');
const time = document.querySelector('.time div');

let active = false;
let milisecond = 0;
let intervalID;

const timer = () => {
    if (!active) {
        active = !active;
        milisecond++;
        start.textContent = "Pauza";
        intervalID = setInterval(timeStart, 10);
    } else {
        active = !active;
        start.textContent = "Start";
        clearInterval(intervalID);
    }
}

const timeStart = () => {
    milisecond++;
    time.textContent = (milisecond / 100).toFixed(2);
}


const resetResult = () => {
    clearInterval(intervalID);
    time.textContent = '---';
    active = false;
    milisecond = 0;
    start.textContent = "Start";
}


start.addEventListener('click', timer)
reset.addEventListener('click', resetResult)