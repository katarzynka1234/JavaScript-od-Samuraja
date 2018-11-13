const input = document.getElementById('pass');
const div = document.querySelector('.message');

const passwords = ["user", "wiosna"];
const messages = ["Witaj użytkowniku!", "piękna wiosna"];

const showMessage = (e) => {
    div.textContent = "";
    const inputedPasswortUppercase = e.target.value.toUpperCase();

    passwords.forEach((password, index) => {
        const passwordUppercase = password.toUpperCase();
        if (inputedPasswortUppercase === passwordUppercase) {
            div.textContent = messages[index];
            e.target.value = "";
        }

    })


}


input.addEventListener('input', showMessage);


input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})





// const password = "user";
// const messages = "Witaj użytkowniku!";

//input.addEventListener('input', (e) => {
//console.log(e.target.value);
// if (password === e.target.value) {
//     div.textContent = message;
//     e.target.value = "";
// } else {
//     div.textContent = "";
// }
//})