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

    invokeEventListeners() {
      this.submit.addEventListener("click", () => {
        e.preventDefault();
        const userInputFinal = this.userInput.value;
        if(userInputFinal.length > 0) {
          this.errorElement.innerHTML = ``;
            // Call function
        } else {
          this.userInput.value = ``;
          this.errorElement = "Error Input Isn't Long Enough!";
        }
      });
      // false means incomplete, true is opposite
      this.displayIncompleteTasks.addEventListener("click", tasksFilter(false, this.model.todos));
      this.displayCompleteTasks.addEventListener("click", taskFilter(true, this.model.todos));
      this.tasksSection.addEventListener("click", userClickedOn(event));
    }

    // callback needed
    displayActiveTasks(array) {
      return activeTasks.innerHTML = `${array.length} Active Tasks`;
    }

    displayDate() {
      const d = new Date();
      return this.date.innerHTML = `${d.getMonth} ${d.getDay}, ${d.getFullYear}`;
    }

    //state is a boolean to filter out list
    displayTasks(html, todos) {
      let index = 0;
      let html = ``;

      // Display incomplete list
      if(!type) {
        for(index in todos) {
        if(todos.state[index] == type) {
          // should be rewritten for undo
          html += `
          <div>
            <div class="task__holder">
              <div class="task__holder--undo" data-undo="${index}">Undo</div>
                <p class="task__desc">${todos.task[index]}</p>
                <div class="task__holder--delete" data-delete="${index}">Delete</div>
               </div>
             </div>
          `; 
        }
      }
    }
    // Display complete list
    else {
      for(index in todos) {
        if(todos.state[index] == type) {
          html += `
          <div>
            <div class="task__holder">
              <div class="task__holder--undo" data-undo="${index}">Undo</div>
                <p class="task__desc">${todos.task[index]}</p>
                <div class="task__holder--delete" data-undo="${index}">Delete</div>
               </div>
             </div>
          `; 
        }
      }
    }
      tasksSection.innerHTML = html;
    }
  }

  export default TodoView;