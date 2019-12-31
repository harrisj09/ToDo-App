//Delete everything above once this is done
class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    // Basically starts the whole process
    // Call display date
    this.updateList();
    this.view.displayDate();
    this.displayActiveTasks;
  }

  addTask(text) {
    this.model.addTodoList(text);
  }

  removeTask() {
    // Call model, then updatelist
    // might need a function to handle the logic in grabbing the data attribute
  }

  // Changing displays
  completeTask() {
    // Call model, then updatelist
  }

  // Updates displays of complete or incomplete tasks
  updateList() {
    // Use foreach loop using a boolean value
  }

  getActiveTasks() {
    this.view.displayActiveTasks(this.model.getTodoList());
  }

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
  }
}

export default TodoController;