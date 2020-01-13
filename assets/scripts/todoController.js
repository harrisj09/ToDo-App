class TodoController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.updateList = this.updateList.bind(this); 
      this.handleClickedTask = this.handleClickedTask.bind(this); 
  }

  init() {
      this.view.displayDate();
      this.view.invokeEventListeners(this.updateList, this.handleClickedTask);
      this.view.displayTasks(this.model.todos);
  }

  updateList(idGenerator, userInput = "") {
      console.log(idGenerator);
      if(userInput.length > 0) {
        this.model.addTodoList(userInput, idGenerator);
      }
      this.view.displayTasks(this.model.todos);
  }

  // takes in a number and index
  handleClickedTask(taskToPerfrom = -1, attributeIndex = -1) {
      // 1 is complete, 2 is delete and 3 is undo (switch state of completed from true to false)
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
    console.log(`${taskToPerfrom} task being performed and the index is ${attributeIndex}`);
  }

  // Needs to be called possibly from the event listeners
  tasksFilter(type) {
      this.view.displayTasks(type, this.model.todos);
  }

}

export default TodoController;