//Tworzenie obiektu

// - przez operator new i konstruktor obiektu
const cat = new Object();

cat.name = "Felix";
cat['age'] = 3; // to samo co cat.age = 3
cat.miau = function () {
    console.log("miau miau");
}

// - przez literał obiektu {}

const dog = {
    name: "Alex",
    age: 5,
    "eye color": "black", // inaczej można zapisać eyeColor: "black",
    barking: function () {
        console.log("hau hau");
    },
    squeaking() {
        console.log("aaa uuu eeee"); // z ES6 - bez deklaracji function!!!
    },
    child: ["Mombik", "Miko", "Mozik"],
}