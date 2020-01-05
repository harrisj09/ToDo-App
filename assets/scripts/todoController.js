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
      this.updateList();
      this.view.displayDate();
      this.view.invokeEventListeners(this.model.todos, this.updateList);
      // this.view.displayActiveTasks();
      // Call display date (Once done)
  }

    // Updates displays of complete or incomplete tasks
  updateList(userInput = "") {
      console.log('update list called');
      this.model.addTodoList(userInput);
  }

  getActiveTasks() {
      let index = 0;
      let numberOfActiveTasks = 0;
      for (index in this.model.todos) {
          if (index.state == false) {
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