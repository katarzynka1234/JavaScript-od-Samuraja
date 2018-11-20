const endTime = new Date('2019-01-25 22:35:00').getTime();
const countDays = document.querySelector('span.d');
const countHours = document.querySelector('span.h');
const countMinutes = document.querySelector('span.m');
const countSeconds = document.querySelector('span.s');


setInterval(() => {
    const nowTime = new Date().getTime();
    let time = endTime - nowTime;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    console.log(days);

    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    countDays.textContent = days;
    countHours.textContent = hours;
    countMinutes.textContent = minutes;
    countSeconds.textContent = seconds;

}, 1000)