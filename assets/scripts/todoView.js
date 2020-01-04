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

    invokeEventListeners(array) {
      console.log(this.submit);
      this.UI.submit.addEventListener("click", () => {
        console.log("Submit pressed");
        const userInputFinal = this.UI.userInput.value;
        if(userInputFinal.length > 0) {
          this.UI.errorElement.innerHTML = ``;
            // Call function
        } else {
          this.UI.userInput.value = ``;
          this.UI.errorElement.innerHTML = "Error Input Isn't Long Enough!";
        }
      });
      // false means complete, true is opposite get the array
      this.UI.displayIncompleteTasks.addEventListener("click", this.displayTasks(true, array));
      this.UI.displayCompleteTasks.addEventListener("click", this.displayTasks(false, array));
      this.UI.tasksSection.addEventListener("click", userClickedOn(event));
    }

    // callback needed grab array
    /*
    displayActiveTasks(array) {
      return this.UI.activeTasks.innerHTML = `${array.length} Active Tasks`;
    } */

    displayDate() {
      console.log('display date called');
      const d = new Date();
      this.UI.date.innerHTML = `${d.getFullYear}`;
    }

    //state is a boolean to filter out list
    displayTasks(type, todos) {
      let index = 0;
      let dataAttributeType = "";
      let html = ``;

      if(type) {
        dataAttributeType = "delete";
      }

      else {
        dataAttributeType =  "undo";
      }
      
      console.log(todos);
      // Display incomplete list
        for(index in todos) {
        if(todos.state[index] == type) {
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
      tasksSection.innerHTML = html;
    }
  }

  export default TodoView;