  class TodoView {
    constructor() {
      this.UI = {
        userInput: document.querySelector(".app__form--input"),
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
    displayTasks(html) {
      // Maybe a callback function is needed in order to check whats right
      // Grab task filter, also reset html
      tasksSection.innerHTML = html;
    }
  }

  export default TodoView;