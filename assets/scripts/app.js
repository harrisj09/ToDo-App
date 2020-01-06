/*
object destructuring
const { log: $, warn: $w, error: $e } = console;
*/

import TodoModel from './TodoModel.js';
import TodoView from './TodoView.js';
import TodoController from './TodoController.js';

const todoController = new TodoController(new TodoModel, new TodoView);
todoController.init();