/*import TodoModel from './TodoModel.js';
import TodoView from './TodoView.js';
import TodoController from './TodoController.js';

const todoController = new TodoController(new TodoModel, new TodoView);

todoController.init();*/

/*
CSS that will be incremented into DOM
<div class="task__element">
            <div class="task__element--complete"> </div>
            <p class="task__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div class="task__element--delete">
            </div>

 */

// other classes are commented out until i go back and refactor the code to add OOP and design pattern
/*
CODE IS VERY MESSY!!!
 */

//const incompleteTasks = document.querySelector("#incomplete");
//const completeTasks = document.querySelector("#complete");
const submit = document.querySelector(".app__form--submit");
const textInput = document.querySelector(".app__form--input").value;
const tasksDisplay = document.querySelector(".tasks__wrapper");
const errorMessage = document.querySelector(".app__error");

const todoArray = [];
let html = ``;

submit.addEventListener("click", function(){
    const textInput = document.querySelector(".app__form--input").value;
    if(textInput.length > 0) {
        storeString(textInput);
        errorMessage.innerHTML = "";
    }
    else {
        errorMessage.innerHTML = "Invalid input! String is blank!";
    }
});

function storeString(string) {
    //push array
    todoArray.push(string);
    tasksDisplay.innerHTML = ``;

    htmlRewrite();
    //add foreach loop
    todoArray.forEach(htmlRewrite);
    tasksDisplay.innerHTML = html;
}

function htmlRewrite(index) {

    html += `
        <div class="task__element">
            <div class="task__element--complete"> </div>
            <p class="task__desc">${todoArray[index]}</p>
            <div class="task__element--delete"> 
            </div>
    `;
}

//incompleteTasks.addEventListener("click", );
//completeTasks.addEventListener("click", );
