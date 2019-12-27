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

}

export default TodoController;