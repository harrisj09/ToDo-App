class TodoController {

    /**
     * Other than the object parameters binds are set to prevent errors.
     * @constructor
     * @param {TodoModel} model - Allows data to be added and removed to the array
     * @param {TodoView} view - Allows for the array of tasks to be displayed
     */
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.updateList = this.updateList.bind(this); 
      this.handleClickedTask = this.handleClickedTask.bind(this); 
  }

  /**
   * By calling the init() function it switches to view for the
   * tasks, creates the date object and creates event listeners
   * for TodoView.
   */
  init() {
      this.view.displayDate();
      this.view.invokeEventListeners(this.updateList, this.handleClickedTask);
      this.view.displayTasks(this.model.todos);
  }

/**
 * When the user presses submit to create a new task. This function is called
 * it checks the length of the string to see if it's acceptable and then 
 * 
 * @param {Integer} idGenerator A number is created when a user submits the
 * @param {String} userInput Contains the string entered from the input box
 */

  updateList(idGenerator, userInput = "") {
      if(userInput.length > 0) {
        this.model.addTodoList(userInput, idGenerator);
      }
      this.view.displayTasks(this.model.todos);
  }

  handleClickedTask(taskToPerfrom = -1, attributeIndex = -1) {
      // 1 is complete, 2 is delete and 3 is undo
     switch(taskToPerfrom) {
       case 1:
            this.model.completeTask(attributeIndex);
            this.view.displayTasks(this.model.todos);
            break;
        case 2:
            this.model.removeTodo(attributeIndex);
            this.view.displayTasks(this.model.todos);
            break;
        case 3:
            this.model.undoTask(attributeIndex);
            this.view.displayTasks(this.model.todos);
            break;
        default:
            console.log(taskToPerfrom);
    }
  }

  tasksFilter(type) {
      this.view.displayTasks(type, this.model.todos);
  }

}

export default TodoController;