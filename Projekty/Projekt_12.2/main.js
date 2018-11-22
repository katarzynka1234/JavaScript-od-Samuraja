const toDoList = []; //array for actual tasks


//Global variables
const form = document.querySelector('form');
const inputForNewTask = document.querySelector('.add-task');
const btnNewTask = document.querySelector('button.new-task');
const listTasks = document.querySelector('ul');
const tasks = document.querySelectorAll('li');
const numberTasks = document.querySelector('h4 span');


//Adding and removing tasks + print aktiv tasks
const getActualList = () => {
    listTasks.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        listTasks.appendChild(toDoElement);
    })
    const number = toDoList.length;
    numberTasks.textContent = number;

}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    getActualList();
}

const addTask = (e) => {
    e.preventDefault();
    const task = inputForNewTask.value;
    if (task === "") return;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = task + '<button class="delete">x</button>';
    toDoList.push(newTask);
    inputForNewTask.value = "";
    newTask.querySelector('button.delete').addEventListener('click', removeTask);
    getActualList();
}

form.addEventListener('submit', addTask);

//Searching of tasks
const inputForSearch = document.querySelector('input.search-word');

const searchTasks = (e) => {
    const searchTekst = e.target.value.toLowerCase();
    let allTasks = toDoList;
    allTasks = allTasks.filter(tasksElement => tasksElement.textContent.toLowerCase().includes(searchTekst));
    console.log(allTasks);
    listTasks.textContent = "";
    allTasks.forEach(tasksElement => listTasks.appendChild(tasksElement));


}


inputForSearch.addEventListener('input', searchTasks);