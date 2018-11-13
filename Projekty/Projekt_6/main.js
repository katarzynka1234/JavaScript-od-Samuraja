const btn = document.querySelector("button");
const names = ["Kasia", "Marysia", "Dobrawa", "Asia", "Kira", "Marta", "Natalia", "Anastazja"];
const prefixes = ["Zdecydowanie tak", "Zdecydowanie nie", "A może jednak", "Chyba jednak"];
const div = document.querySelector("div");

const nameGenerator = () => {
    const randomIndex = (Math.floor(Math.random() * names.length));
    div.textContent = `${prefixes[Math.floor(Math.random() * prefixes.length)]} najlepsze imię to ${names[randomIndex]}.`;
}

btn.addEventListener("click", nameGenerator)