// function showMessage(message) {
//     console.log(message);
// }

// showMessage(`To jest tekst`);
// showMessage(`A to iny tekst`);
// showMessage(`Witam`);

function addNumbers(number1, number2) {
    const sumOfNumber = number1 + number2;
    return sumOfNumber;
}
addNumbers(2, 2);

// ES6 - funkcja fat arrow
const addTwoNumbers = (no1, no2) => {
    const result = no1 + no2;
    console.log(result);
    return result;
}

// Deklaracja funkcji - (to samo co wyżej) - z wyrażeniem "function"
const addTreeNumber = function (n1, n2, n3) {
    const result1 = n1 + n2 + n3;
    console.log(result1);
    return result;
}

//CALLBACK



// agruments - operacje na argumentach
function showInfoAboutUser(age, name, sex) {
    if (arguments.length === 0) {
        console.log(`brak informacji o użytkowniku`);
    } else if (arguments.length === 1) {
        console.log(`użytkownik ma ${age} lat.`);
    } else if (arguments.length === 2) {
        console.log(`użytkownik ma ${age} lat i ma na imię ${name}.`);
    } else {
        console.log(`użytkownik ma ${age} i ma na imię ${name} i jest ${sex}.`);
    }
}

// REST (ES6) - pobiera argumnenty i tworzy tablicę
//  (...dowolnaNazwa) 

function showAllArguments(...items) {
    console.log(items);
    console.log(arguments);
    return items
}