// const list = document.querySelectorAll('button');

// const removeTask = (e) => {
//     //e.target.parentNode.remove();
//     //e.target.parentNode.style.textDecoration = "line-through";
//     const index = e.target.dataset.key;
//     document.querySelector(`li[data-key="${index}"]`).remove();

// }



//list.forEach(item => item.addEventListener('click', removeTask));


//filter() - zwraca nową tablicę
const arr = [34, 219, 58, 41, 4, 58, 74, 56, 45];

const addNumbers = arr.filter(number => number % 2);
const evenNumbers = arr.filter(number => !(number % 2));

//map() - wraca nową tablicę
const double = arr.map(number => number * 2);
const people = arr.map(number => number + " osób");

//forEach() -pracuje i zmienia daną tablicę
arr.forEach((number, index) => arr[index] = number * 2);

//WYSZUKIWARKA

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');


const searchTasks = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasks);
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
}


input.addEventListener('input', searchTasks)