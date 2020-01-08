class TodoView {
  constructor() {
      this.UI = {
          entirePage: document.querySelector("html"),
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

  invokeEventListeners(array, updateList) {
      // remove all event listeners and just add one to the entire document, and check the id or class of what I clicked on
      this.UI.submit.addEventListener("click", () => {
          const userInputFinal = this.UI.userInput.value;
          if (userInputFinal.length > 0) {
              console.log("Submit was pressed");
              this.UI.errorElement.innerHTML = ``;
              this.UI.userInput.value = ``;
              updateList(userInputFinal);
          } else {
              this.UI.userInput.value = ``;
              this.UI.errorElement.innerHTML = "Error, Input Isn't Long Enough!";
          }
      });
      this.UI.displayIncompleteTasks.addEventListener("click", () => {
          this.displayTasks(false, array)
        });
      this.UI.displayCompleteTasks.addEventListener("click", () => {
          this.displayTasks(true, array)
        });
      this.UI.tasksSection.addEventListener("click", event => {
        const {
            classList,
            dataSet: {
                text: value
            }
        } = event.target;
        //userClickedOn(classList);
        userClickedOn(classList);
    });
  }

  userClickedOn(event) {
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
      const d = new Date();
      const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ];

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      this.UI.date.innerHTML = `${daysOfWeek[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  displayTasks(type, todos) {
      let index = 0;
      let dataAttributeType;
      let html = ``;
      console.log(type);
      if (type) {
          dataAttributeType = "undo";
      } else {
          dataAttributeType = "delete";
      }
      const filteredList =  todos.filter(function(task) {
          return task.state == type;
        });

    // Switch this to rewrite everything in filteredList
      for (index in todos) {
          if (todos.state[index] == type) {
              html += `
            <div>
            <div class="task__holder">
                <div class="task__holder--${dataAttributeType}" data-${dataAttributeType}="${index}">${dataAttributeType}</div>
                    <p class="task__desc">${todos.task[index]}</p>
                <div class="task__holder--delete" data-${dataAttributeType}="${index}">Delete</div>
            </div>
           </div>
            `;
          }
      }
      this.UI.tasksSection.innerHTML = html;
  }
}

export default TodoView;