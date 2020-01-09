class TodoView {
  constructor() {
    this.displayTasks = this.displayTasks.bind(this);
      this.UI = {
          entirePage: document.querySelector("html"),
          userInput: document.querySelector(".app__form--input"),
          submit: document.querySelector(".app__form--submit"),
          tasksSection: document.querySelector(".tasks__wrapper"),
          errorElement: document.querySelector(".app__error"),
          displayIncompleteTasks: document.querySelector("#incomplete"),
          displayCompleteTasks: document.querySelector("#complete"),
          activeTasks: document.querySelector(".app__tasks-active"),
          date: document.querySelector(".app__date"),
          type: false
      }
  }

  invokeEventListeners(updateList, getTodos) {
      this.UI.submit.addEventListener("click", () => {
          const userInputFinal = this.UI.userInput.value;
          if (userInputFinal.length > 0) {
              console.log("Submit was pressed");
              this.UI.errorElement.innerHTML = ``;
              this.UI.userInput.value = ``;
              updateList(userInputFinal);
              getTodos();
          } else {
              this.UI.userInput.value = ``;
              this.UI.errorElement.innerHTML = "Error, Input Isn't Long Enough!";
          }
      });
      this.UI.displayIncompleteTasks.addEventListener("click", () => {
          this.UI.type = false;
          this.displayTasks(getTodos)
        });
      this.UI.displayCompleteTasks.addEventListener("click", () => {
          this.UI.type = true;
          this.displayTasks(getTodos)
        });
      this.UI.tasksSection.addEventListener("click", event => {
        const {
            classList,
            dataSet: {
                text: value
            }
        } = event.target;
        userClickedOn(classList);
    });
  }

  userClickedOn(event) {
    // Have other callback functions for calling delete, undo or complete
      const holder = event.target;
      const clickedText = holder.innerHTML;
      if (classList.contains("task__holder--complete")) {
          const clickedIndex = event.target.dataset.complete;
          // Fix this
          //setCompletedTasks(this.model.todos, clickedIndex);
      } else if (classList.contains("task__holder--delete")) {
          const clickedIndex = event.target.dataset.delete;
          //this.model.removeTodo(this.model.todos, clickedIndex);
      } else if (classList.contains("task__holder--undo")) {
          const clickedIndex = event.target.dataset.undo;
      }
  }

  displayDate() {
      this.UI.date.innerHTML = new Date().toLocaleString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  displayTasks(todos) {
    console.log("display called");
    console.log(this.UI.type);
      let index = 0;
      let dataAttributeType;
      let html = ``;
      if (this.UI.type) {
          dataAttributeType = "undo";
      } else {
          dataAttributeType = "delete";
      }
      /*
      const filteredList = todos.filter(function(task) {
          return task.state == this.UI.type;
      });

      for (index in filteredList) {
              html += `
            <div>
            <div class="task__holder">
                <div class="task__holder--${dataAttributeType}" data-${dataAttributeType}="${index}">${dataAttributeType}</div>
                    <p class="task__desc">${index.task}</p>
                <div class="task__holder--delete" data-${dataAttributeType}="${index}">Delete</div>
            </div>
           </div>
            `;
    } */
    this.UI.tasksSection.innerHTML = html;
  }
}

export default TodoView;