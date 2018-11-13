const btn = document.querySelector("button");
const section = document.querySelector("section");

const chars = "ABCDEFGHIJK0123456789";

const codesNumber = 1000;
const charsNubmer = 10;

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = "";
        for (let j = 0; j < charsNubmer; j++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
            console.log(index);
        }

        const div = document.createElement("div");
        div.textContent = code;
        section.appendChild(div);
    }

}

btn.addEventListener("click", codesGenerator);