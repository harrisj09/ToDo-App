import TodoModel from './TodoModel.js';
import TodoView from './TodoView.js';
import TodoController from './TodoController.js';

const todoController = new TodoController(new TodoModel, new TodoView);

todoController.init();

/*
CSS that will be incremented into DOM
<div class="task__element">
            <div class="task__element--complete"> </div>
            <p class="task__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div class="task__element--delete">
            </div>

 */