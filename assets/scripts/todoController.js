class TodoController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.updateList = this.updateList.bind(this); 
  }

  init() {
      this.view.displayDate();
      this.view.invokeEventListeners(this.updateList);
  }

  updateList(userInput = "") {
      if(userInput.length > 0) {
        this.model.addTodoList(userInput, false);
      }
      this.view.displayTasks(this.model.todos);
  }

  getActiveTasks() {
      let numberOfActiveTasks = 0;
      for (index in this.model.todos) {
          if (index.state == false) {
              numberOfActiveTasks++;
          }
      }
      this.view.displayActiveTasks(numberOfActiveTasks);
  }

  // Needs to be called possibly from the event listeners
  tasksFilter(type) {
      this.view.displayTasks(type, this.model.todos);
  }
}

export default TodoController;