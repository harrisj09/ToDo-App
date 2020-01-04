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
    this.view.displayActiveTasks();
    this.view.invokeEventListeners();
  }

  // Handles with grabbing what you clicked on by data attribute. 
  userClickedOn(event) {
    const {
      classList,
      dataset: { text: value }
    } = event.target;
    //grabbing text
    const holder = event.target;
    const clickedText = holder.innerHTML;

    // this should be fine
    if (classList.contains("task__holder--complete")) {
      const clickedIndex = event.target.dataset.complete;
      // Fix
      setCompletedTasks(this.model.todos, clickedIndex);
    } 

    else if(classList.contains("task__holder--delete")) {
      const clickedIndex = event.target.dataset.delete;
      this.model.removeTodo(this.model.todos, clickedIndex);
    }

    else if(classList.contains("task__holder--undo")) {
      const clickedIndex = event.target.dataset.undo;
      // Fix
      //remove it from index in completed array and move it to todoArray
    }
    
  }

  // Updates displays of complete or incomplete tasks
  updateList() {
    console.log('update list called');
  }
  
  getActiveTasks() {
    let index = 0;
    let numberOfActiveTasks = 0;
    for(index in this.model.todos) {
      if(this.model.todos.state == false) {
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