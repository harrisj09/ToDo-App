//Fix up event listeners to call functions inside of controller
/*
const getActiveTasks = () => { return activeTasks.innerHTML = `${todoArray.length} Active Tasks` };

displayCompleteTasks.addEventListener('click', () => {
  display = true;
  getActiveDisplay();
}); 

displayIncompleteTasks.addEventListener('click', () => {
  display = false;
  getActiveDisplay();
}); 

btn.addEventListener(`click`, () => {
    const userInput = document.querySelector(".app__form--input");
    const finalInput = userInput.value;
    const isInputLongEnough = (Boolean(finalInput.length));
//Call function in controller to handle string length
    if(isInputLongEnough) {
      errorElement.innerHTML = ``;
      todoArray.push(finalInput);
      userInput.value = ``;
      //call function to check what the dispay is  
      getActiveDisplay();
      getActiveTasks();
      $(todoArray.toString());
    }
    else {
      errorElement.innerHTML = `String is Not Long Enough!`;
    } 
  });

  tasksSection.addEventListener('click', event => {
    const {
        classList,
        dataset: { text: value }
      } = event.target;
      //grabbing text
      const holder = event.target;
      const clickedText = holder.innerHTML;
      //Goes into controller
      if (classList.contains("task__holder--complete")) {
        const clickedIndex = event.target.dataset.complete;
        setCompletedTasks(todoArray, clickedIndex);
      } 
      else if(classList.contains("task__holder--delete")) {
        const clickedIndex = event.target.dataset.delete;
        setArraySize(todoArray, clickedIndex);
      }
      else if(classList.contains("task__holder--undo")) {
        const clickedIndex = event.target.dataset.undo;
        $(event.target.dataset.undo);
        //remove it from index in completed array and move it to todoArray
      }
  });


  //Could be shortened down to one method
  function htmlRewrite() {
    html += `
    <div>
    <div class="task__holder">
        <div class="task__holder--complete" data-complete="${counter}">Completed</div>
            <p class="task__desc">${todoArray[counter]}</p>
            <div class="task__holder--delete" data-delete="${counter}">Delete</div>
        </div>
      </div>
    `;
    counter++;
  }

  function completeTaskDisplay() {
    html += `
    <div>
    <div class="task__holder">
        <div class="task__holder--undo" data-undo="${counter}">Undo</div>
            <p class="task__desc">${completeArray[counter]}</p>
            <div class="task__holder--delete" data-delete="${counter}">Delete</div>
        </div>
      </div>
    `
    counter++;
  } */

//Delete everything above once this is done
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
      return date.innerHTML = `${d.getMonth} ${d.getDay}, ${d.getFullYear}`;
    }

    //state is a boolean to filter out list
    displayTasks(array, state) {

    }

  }

  export default TodoView;