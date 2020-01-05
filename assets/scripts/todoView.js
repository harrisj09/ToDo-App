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

  invokeEventListeners(array, updateList) {
      console.log(this.submit);
      this.UI.submit.addEventListener("click", () => {
          console.log("Submit pressed");
          const userInputFinal = this.UI.userInput.value;
          if (userInputFinal.length > 0) {
              this.UI.errorElement.innerHTML = ``;
              this.UI.userInput.value = ``;
              console.log(userInputFinal);
              // Call function
              updateList(userInputFinal);
          } else {
              this.UI.userInput.value = ``;
              this.UI.errorElement.innerHTML = "Error Input Isn't Long Enough!";
          }
      });
      // false means complete, true is opposite get the array
      this.UI.displayIncompleteTasks.addEventListener("click", this.displayTasks(true, array));
      this.UI.displayCompleteTasks.addEventListener("click", this.displayTasks(false, array));
      this.UI.tasksSection.addEventListener("click", this.userClickedOn(event));
  }

  // Handles with grabbing what you clicked on by data attribute. 
  userClickedOn(event) {
      const {
          classList,
          dataset: {
              text: value
          }
      } = event.target;
      //grabbing text
      const holder = event.target;
      const clickedText = holder.innerHTML;

      if (classList.contains("task__holder--complete")) {
          const clickedIndex = event.target.dataset.complete;
          // Fix
          setCompletedTasks(this.model.todos, clickedIndex);
      } else if (classList.contains("task__holder--delete")) {
          const clickedIndex = event.target.dataset.delete;
          this.model.removeTodo(this.model.todos, clickedIndex);
      } else if (classList.contains("task__holder--undo")) {
          const clickedIndex = event.target.dataset.undo;
          // Fix
          //remove it from index in completed array and move it to todoArray
      }
  }

  /* callback possibly needed to grab array
  displayActiveTasks(array) {
    return this.UI.activeTasks.innerHTML = `${array.length} Active Tasks`;
  } */

  displayDate() {
      console.log('display date called');
      const d = new Date();
      this.UI.date.innerHTML = `${d.getMonth()} ${d.getDay()}, ${d.getFullYear()}`;
  }

  displayTasks(type, todos) {
      let index = 0;
      let dataAttributeType = "";
      let html = ``;

      if (type) {
          dataAttributeType = "delete";
      } else {
          dataAttributeType = "undo";
      }

      // Switch to filter method
      for (index in todos) {
          if (todos.state[index] == type) {
              html += `
        <div>
          <div class="task__holder">
            <div class="task__holder--undo" data-undo="${index}">Undo</div>
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