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
      // false means incomplete, true is opposite
      this.UI.displayIncompleteTasks.addEventListener("click", displayTasks(false, this.model.todos));
      this.UI.displayCompleteTasks.addEventListener("click", displayTasks(true, this.model.todos));
      this.UI.tasksSection.addEventListener("click", userClickedOn(event));
    }

    // callback needed
    displayActiveTasks(array) {
      return activeTasks.innerHTML = `${array.length} Active Tasks`;
    }

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

      /*
        Could shorten this by removing else and adding a string let that changes what the string contains.
        Use that string in the template literal to assign data attributes
      */

      if(type) {
        dataAttributeType = "delete";
      }

      else {
        dataAttributeType =  "undo";
      }
      
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