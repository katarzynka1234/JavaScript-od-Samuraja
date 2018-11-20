const timer = (second = 0) => {
    let time = second;

    function showTime() {
        second++;
        document.body.textContent = `Na stronie jesteś już ${second} sekund`
    }
    return showTime;
}

const counter = timer()
setInterval(counter, 1000);