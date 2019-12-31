class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

      // Event Listeners
      this.submit.addEventListener("click", () => {
      e.preventDefault();
      const userInputFinal = this.view.userInput.value;
      if(userInputFinal.length > 0) {
        this.view.errorElement.innerHTML = ``;
        // Call function
      } else {
        this.view.userInput.value = ``;
        this.view.errorElement = "Error Input Isn't Long Enough!";
      }
    });
    // False means incomplete, true is opposite
    this.view.displayIncompleteTasks.addEventListener("click", tasksFilter(false));
    this.view.displayCompleteTasks.addEventListener("click", taskFilter(true));
    // Functions wil be needed to grab the array index of deleted or completed elements
  }

  init() {
    // Basically starts the whole process
    // Call display date (Once done)
    this.updateList();
    this.view.displayDate();
    this.displayActiveTasks;
  }

  // Handles with grabbing what you clicked on by data attribute. 
  indexOfClickedAction(index, type) {

  }

  addTask(text) {
    this.model.addTodoList(text);
  }

  removeTask(index) {
    // Call model, then updatelist
  }

  // Changing displays
  completeTask(index) {
    // Call model, then updatelist
  }

  // Updates displays of complete or incomplete tasks
  updateList() {
    // Use foreach loop using a boolean value
  }
  
  // Redo this to filter out only false (incomplete tasks)
  getActiveTasks() {
    this.view.displayActiveTasks(this.model.getTodoList());
  }

  // Move to view
  tasksFilter(type) {
    let index = 0;
    let html = ``;
      for(index in array) {
      if(array.state[index] == type) {
        html += `
        <div>
          <div class="task__holder">
            <div class="task__holder--undo" data-undo="${index}">Undo</div>
              <p class="task__desc">${this.model.task[index]}</p>
              <div class="task__holder--delete" data-delete="${index}">Delete</div>
             </div>
           </div>
        `; 
      }
    }
    this.view.displayTasks(html);
  }
}

export default TodoController;