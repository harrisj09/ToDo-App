import TodoModel from './TodoModel.js';
import TodoView from './TodoView.js';
import TodoController from './TodoController.js';

const todoController = new TodoController(new TodoModel, new TodoView);

todoController.init();

/*
CSS that will be incremented into DOM
 <div>
               <div class="task__element" data-task="${index}">
                <div class="task__element--complete">Completed</div>
                <p class="task__desc">${todoArray} ${index}</p>
                <div class="task__element--complete task__element--delete">Delete</div>
            </div>
        </div>

 */

/*
<!DOCTYPE html>
<html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>To-Do - MVC</title>
    <link rel="stylesheet" href="./css/app.css">
    </head>

    <body>
    <div class="container">
    <h1>To-Do | MVC</h1>
    <form>
    <input type="text" id="todo-input">
    <button id="add-todo">Add To-Do</button>
</form>

<ul id="todos-list">
    <li id="1"></li>
    </ul>
    </div>
    <script type="module" src="./js/app.js"></script>
    </body>

    </html> */