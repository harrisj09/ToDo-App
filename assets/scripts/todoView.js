  class TodoView {
    constructor() {
      this.UI = {
        submit: document.querySelector(".app__form--submit"),
        tasksSection: document.querySelector(".tasks__wrapper"),
        errorElement: document.querySelector(".app__error"),
        displayIncompleteTasks: document.querySelector("#incomplete"),
        displayCompleteTasks: document.querySelector("#complete"),
        activeTasks: document.querySelector(".app__tasks-active"),
        date: document.querySelector(".app__date")
      }
    }

    displayActiveTasks(array) {
      return activeTasks.innerHTML = `${array.length} Active Tasks`;
    }

    displayDate() {
      const d = new Date();
      return this.date.innerHTML = `${d.getMonth} ${d.getDay}, ${d.getFullYear}`;
    }

    //state is a boolean to filter out list
    displayTasks() {
      // Maybe a callback function is needed in order to check whats right
    }
  }

  export default TodoView;