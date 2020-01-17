import TodoModel from './todoModel.js';
import TodoView from './todoView.js';
import TodoController from './todoController.js';

const todoController = new TodoController(new TodoModel, new TodoView);
todoController.init();