/*
function getActiveDisplay() {
    if(display) {
      setCounter();
      setHtml();
      completeArray.forEach(completeTaskDisplay);
      tasksSection.innerHTML = html;
    }
    else {
      setCounter();
      setHtml();
      todoArray.forEach(htmlRewrite);
      tasksSection.innerHTML = html;
    }
  }
  */

//Delete everything above once this is done
class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    //Basically starts the whole process
  }

  addTask() {
    //Call model, then updatelist
  }

  removeTask() {
    //Call model, then updatelist
  }

  completeTask() {
    //Call model, then updatelist
  }

  updateList() {
    //Send array to view
  }

  getActiveTasks() {
    this.view.displayActiveTasks(this.model.getTodoList());
  }

}

export default TodoController;