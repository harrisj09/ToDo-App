class TodoController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.updateList = this.updateList.bind(this); 
      this.userClickedOn = this.userClickedOn.bind(this);
  }

  init() {
      // Starts the whole process
      this.view.displayDate();
      this.view.invokeEventListeners(this.model.todos, this.updateList, this.userClickedOn());
      // this.view.displayActiveTasks();
      // Call display date (Once done)
  }

  // Does not work
  userClickedOn(event = undefined) {
    console.log("Called userClickedOn from controller");
    console.log(typeof(event));
    const {
        classList,
        dataSet: {
            text: value
        }
    } = event.target;
    const holder = event.target;
    const clickedText = holder.innerHTML;
    if (classList.contains("task__holder--complete")) {
        const clickedIndex = event.target.dataset.complete;
        // Fix this
        //setCompletedTasks(this.model.todos, clickedIndex);
    } else if (classList.contains("task__holder--delete")) {
        const clickedIndex = event.target.dataset.delete;
        //this.model.removeTodo(this.model.todos, clickedIndex);
    } else if (classList.contains("task__holder--undo")) {
        const clickedIndex = event.target.dataset.undo;
        // Fix this
        // Remove it from index in completed array and move it to todoArray
    }
  }

  updateList(userInput = "") {
      console.log(`${userInput} from updateList`);
      this.model.addTodoList(userInput, false);
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