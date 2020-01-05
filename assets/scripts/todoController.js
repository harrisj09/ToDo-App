class TodoController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      //object destructuring
      //const { log: $, warn: $w, error: $e } = console;
  }

  init() {
      console.log('init called');
      // Basically starts the whole process
      // Call display date (Once done)
      this.updateList();
      this.view.displayDate();
      //this.view.displayActiveTasks();
      this.view.invokeEventListeners(this.model.todos);
  }

  // Updates displays of complete or incomplete tasks
  updateList() {
      console.log('update list called');
  }

  getActiveTasks() {
      let index = 0;
      let numberOfActiveTasks = 0;
      for (index in this.model.todos) {
          if (this.model.todos.state == false) {
              numberOfActiveTasks++;
          }
      }
      this.view.displayActiveTasks(numberOfActiveTasks);
      updateList;
  }

  tasksFilter(type) {
      this.view.displayTasks(html, this.model.todos);
  }
}

export default TodoController;