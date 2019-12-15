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


let hasTaskBeenCreated = false;

//target
const submit = document.querySelector(".app__form--submit");
const tasksDisplay = document.querySelector(".tasks__wrapper");
const errorMessage = document.querySelector(".app__error");

const todoArray = [];
let html = ``;

//Find a way to have this be checked every time
if(todoArray.length > 0) {
    const finished = document.querySelector(".task__element--complete");
    const deleteTask = document.querySelector(".task__element--delete");
    finished.addEventListener("click", function() {
        console.log("finished task");
    });

    deleteTask.addEventListener("click", function() {
        console.log("deleted task");
    });
}

submit.addEventListener("click", function(){
    const textInput = document.querySelector(".app__form--input").value;
    if(textInput.length > 0) {
        storeString(textInput);
        errorMessage.innerHTML = "";
        //document.querySelector(".app__form--input").reset();
    }
    else {
        errorMessage.innerHTML = "Invalid input! String is blank!";
    }
});

function storeString(string) {
    todoArray.push(string);
    document.querySelector(".app__tasks-active").innerHTML = `${todoArray.length} Active Tasks`;
    hasTaskBeenCreated = true;
    html = ``;
    todoArray.forEach(htmlRewrite);
    tasksDisplay.innerHTML = html;
}

//have an onclick in the html and send the HTML element and string of task in
function completeTask() {

}

//have an onclick in the html and send the HTML element and string of task in
function deleteTask() {
    //use data attributes
    //delete the index that corresponds with the data attribute
}

function htmlRewrite(todoArray, index) {

    html += `
        <div>
               <div class="task__element" data-task="${index}">
                <div class="task__element--complete">Completed</div>
                <p class="task__desc">${todoArray} ${index}</p>
                <div class="task__element--complete task__element--delete">Delete</div>
            </div>
        </div>
    `;
}