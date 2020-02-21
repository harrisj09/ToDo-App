import TodoModel from './todoModel.js';
import TodoView from './todoView.js';
import TodoController from './todoController.js';

/**
 * Entry point of the program. Creates objects of TodoController in order to start the whole
 * program and invokes the init() function from todoController
 * 
 * @author - John Harris
 */

const todoController = new TodoController(new TodoModel, new TodoView);
todoController.init();