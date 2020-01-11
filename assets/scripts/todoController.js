class TodoController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.updateList = this.updateList.bind(this); 
  }

  init() {
      // Starts the whole process
      this.view.displayDate();
      this.view.invokeEventListeners(this.updateList, this.getTodoList);
      this.view.displayTasks(this.getTodoList);
      // this.view.displayActiveTasks();
      // Call display date (Once done)
  }

  updateList(userInput = "") {
      console.log(`${userInput} from updateList`);
      this.model.addTodoList(userInput, false);
  }

  getTodoList() {
      return this.model.todos;
    //this.view.displayTasks(this.model.todos);
  }

  getActiveTasks() {
      let numberOfActiveTasks = 0;
      for (index in this.model.todos) {
          if (index.state == false) {
              numberOfActiveTasks++;
          }
      }
      this.view.displayActiveTasks(numberOfActiveTasks);
      //updateList;
  }

  // Neeeds to be called possibly from the event listeners
  tasksFilter(type) {
      this.view.displayTasks(type, this.model.todos);
  }
}

export default TodoController;