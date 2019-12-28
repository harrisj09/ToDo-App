//Delete everything above once this is done
class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  

  init() {
    //Basically starts the whole process
    //Call display date
    this.view.
    this.view.displayDate();
  }


  addTask() {
    //Call model, then updatelist
  }

  removeTask() {
    //Call model, then updatelist
  }

  // Changing displays
  completeTask() {
  //Call model, then updatelist
  }

  // Updates displays of complete or incomplete tasks
  updateList() {
    //Use foreach loop useing a boolean value
  }

  getActiveTasks() {
    this.view.displayActiveTasks(this.model.getTodoList());
  }

}

export default TodoController;