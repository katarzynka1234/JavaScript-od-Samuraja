const slideList = [{
        img: "images/aromatherapy-aromatic-beautiful-flowers-286755.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/art-creative-creativity-5836.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/background-backlight-blur-262713.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

//Interfejs 
const time = 3000;
let active = 0;


//Implementacja
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();

}


setInterval(changeSlide, time)