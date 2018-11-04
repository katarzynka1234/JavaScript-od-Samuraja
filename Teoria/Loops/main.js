// *** LOOPS *** //

// for

// for (let i = 0; i <= 10; i++) {
//     console.log("numer " + i);
// }

// while

// let number = 0;
// while (number < 10) {
//     number++;
//     console.log(number);
// }

// let gasoline = 40;
// let km = 0;
// while (gasoline--) {
//     km += 18;
//     console.log(`przejechaliśmy ${km} kilometrów. Zostało nam jeszcze ${gasoline} litrów benzyny.`);
// }

// let study = false;
// do {
//     console.log(`Jestem studentem`)
// } while (study == true)

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(` ${i} x ${j} równa sie: ${i * j}.`)
//     }
// }

//Pętla na tablicy
// const userAge = [18, 19, 25, 19, 21, 30, 32];

// for (let i = 0; i < userAge.length; i++) {
//     console.log(`wiek użytkownika o indeksie ${i} to ${userAge[i]}.`)
// }

// const userDataBirth = [2000, 1992, 1986, 1997, 2011];
// const currentData = 2018;

// for (let i = 0; i < userDataBirth.length; i++) {
//     const userAge = currentData - userDataBirth[i];
//     console.log(`użytkownik o indeksie ${i} ma ${userAge} lat.`);
// }

const guest = ["piłkarz", "kucharz", "murarz", "programista", "polityk", "pisarz", "magazynier", "emeryt"];

for (let i = 0; i < guest.length; i++) {
    if (guest[i] === "programista") {
        console.log(`Dla ${guest[i]} nie ma miejsca`)
    } else if (guest[i] === "polityk") {
        console.log(`przykro nam ${guest[i]}ów nie wpuszczamy`)
    } else {
        console.log(`Witam panie ${guest[i]}, zapraszmy!`)
    }
}

for (const i of guest) {
    console.log(i);
}