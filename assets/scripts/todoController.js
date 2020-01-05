/*
object destructuring
const { log: $, warn: $w, error: $e } = console;
*/

class TodoController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
  }

  init() {
      // Starts the whole process
      this.view.displayDate();
      this.view.invokeEventListeners(this.model.todos, this.updateList);
      // this.view.displayActiveTasks();
      // Call display date (Once done)
  }

  updateList(userInput = "") {
      console.log(`${userInput} from updateList`);
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

  // Neeeds to be called possibly from the event listeners
  tasksFilter(type) {
      this.view.displayTasks(type, this.model.todos);
  }
}

export default TodoController;