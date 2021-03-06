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
          date: document.querySelector(".app__date"),
          type: false
      }

      this.domHandler = {
        idGenerator: 0
      }
  }

  invokeEventListeners(updateList, handleClickedTask) {
      this.UI.submit.addEventListener("click", () => {
          const userInputFinal = this.UI.userInput.value;
          if (userInputFinal.length > 0) {
              this.UI.errorElement.innerHTML = ``;
              this.UI.userInput.value = ``;
              updateList(this.domHandler.idGenerator, userInputFinal);
              // Remove this and have id generations handled in TodoModel
              this.domHandler.idGenerator++;
          } else {
              this.UI.userInput.value = ``;
              this.UI.errorElement.innerHTML = "Error, Input Isn't Long Enough!";
          }
      });

      this.UI.displayIncompleteTasks.addEventListener("click", () => {
          this.UI.type = false;
          updateList();
        });

      this.UI.displayCompleteTasks.addEventListener("click", () => {
          this.UI.type = true;
          updateList();
        });

      this.UI.tasksSection.addEventListener("click", function(event) {
        const {
            classList
            //dataSet: {
                //text: value
           //}
        } = event.target;
          const holder = event.target;
          const clickedText = holder.innerHTML;
          if (classList.contains("task__holder--complete")) {
              const clickedIndex = event.target.dataset.complete;
              handleClickedTask(1, clickedIndex);
          } else if (classList.contains("task__holder--delete")) {
              const clickedIndex = event.target.dataset.delete;
              handleClickedTask(2, clickedIndex);
          } else if (classList.contains("task__holder--undo")) {
              const clickedIndex = event.target.dataset.undo;
              handleClickedTask(3, clickedIndex);
          }
      });
  }

  displayDate() {
      this.UI.date.innerHTML = new Date().toLocaleString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  displayTasks(todos) {
      let dataAttributeType;
      let html = ``;
      if (this.UI.type) {
          dataAttributeType = "undo";
      } else {
          dataAttributeType = "complete";
      }
      const filteredList = todos.filter(task => {
        return task.completed == this.UI.type;
      });

      filteredList.forEach(filteredTitle => {
        html += `
        <div>
        <div class="task__holder">
            <p class="task__desc">${filteredTitle.title}</p>
                <div class="task__holder--${dataAttributeType}" data-${dataAttributeType}="${filteredTitle.id}"></div>
            <div class="task__holder--delete" data-delete="${filteredTitle.id}"></div>
        </div>
       </div>
        `;
    });
    this.UI.tasksSection.innerHTML = html;
  }
  
}

export default TodoView;