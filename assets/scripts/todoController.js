class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    // Basically starts the whole process
    // Call display date (Once done)
    this.updateList();
    this.view.displayDate();
    this.displayActiveTasks;
    this.invokeEventListeners;
  }

  invokeEventListeners() {
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
    // false means incomplete, true is opposite
    this.view.displayIncompleteTasks.addEventListener("click", tasksFilter(false));
    this.view.displayCompleteTasks.addEventListener("click", taskFilter(true));
    this.view.tasksSection.addEventListener("click", userClickedOn(event));
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
    if (classList.contains("task__holder--complete")) {
      const clickedIndex = event.target.dataset.complete;
      // Fix
      setCompletedTasks(this.model.todos, clickedIndex);
    } 
    else if(classList.contains("task__holder--delete")) {
      const clickedIndex = event.target.dataset.delete;
      // Fix
      setArraySize(this.model.todos, clickedIndex);
    }
    else if(classList.contains("task__holder--undo")) {
      const clickedIndex = event.target.dataset.undo;
      // Fix
      //remove it from index in completed array and move it to todoArray
    }
  }

  addTask(text) {
    this.model.addTodoList(text);
  }

  removeTask(index) {
    //Function should be called in the model class for logic 
    this.model.removeTodo(index);

  }

  completeTask(index) {
    // Call model, then updatelist
  }

  // Updates displays of complete or incomplete tasks
  updateList() {

  }
  
  // Redo this to filter out only false (incomplete tasks)
  getActiveTasks() {
    this.view.displayActiveTasks(this.model.getTodoList());
    updateList;
  }

  // Move to view
  tasksFilter(type) {
    let index = 0;
    let html = ``;
    // Display incomplete list
    if(!type) {
      for(index in array) {
      if(this.model.todos.state[index] == type) {
        // should be rewritten for undo
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
  }
  // Display complete list
  else {
    for(index in this.model.todos) {
      if(this.model.todos.state[index] == type) {
        html += `
        <div>
          <div class="task__holder">
            <div class="task__holder--undo" data-undo="${index}">Undo</div>
              <p class="task__desc">${this.model.todo.task[index]}</p>
              <div class="task__holder--delete" data-undo="${index}">Delete</div>
             </div>
           </div>
        `; 
      }
    }
  }
    this.view.displayTasks(html);
  }
}

export default TodoController;