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

// other classes are commented out until i go back and refactor the code to add design pattern
/*
CODE IS VERY MESSY
 */

//const incompleteTasks = document.querySelector("#incomplete");
//const completeTasks = document.querySelector("#complete");

let date = new Date();

date = `${String(date.getDate()).padStart(2, '0')} / ${String(date.getMonth() + 1).padStart(2, '0')} / ${date.getFullYear()}`;

document.querySelector(".app__date").innerHTML = date;

//target
const submit = document.querySelector(".app__form--submit");
const tasksDisplay = document.querySelector(".tasks__wrapper");
const errorMessage = document.querySelector(".app__error");

const todoArray = [];
let html = ``;


submit.addEventListener("click", function(){
    const textInput = document.querySelector(".app__form--input").value;
    if(textInput.length > 0) {
        storeString(textInput);
        errorMessage.innerHTML = "";
        document.querySelector(".app__form--input").reset();
    }
    else {
        errorMessage.innerHTML = "Invalid input! String is blank!";
    }
});

function storeString(string) {
    //push array
    todoArray.push(string);
    document.querySelector(".app__tasks-active").innerHTML = `${todoArray.length} Active Tasks`;
    html = ``;
    //add foreach loop
    todoArray.forEach(htmlRewrite);
    tasksDisplay.innerHTML = html;
}

function htmlRewrite(todoArray, index) {

    html += `
        <div>
        <img class="task__element--complete" src="assets/images/checkmark.png" alt="Completed?">
                <div class="task__element--complete"> </div>
                <p class="task__desc">${todoArray}</p>
               <div class="task__element">
            </div>
        </div>
    `;
}

//incompleteTasks.addEventListener("click", );
//completeTasks.addEventListener("click", );
