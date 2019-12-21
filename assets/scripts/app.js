/*
  BROKEN

  - Something is wrong function calls
*/
const { log: $, warn: $w, error: $e } = console;
const btn = document.querySelector(".app__form--submit");
const tasksSection = document.querySelector(".tasks__wrapper");
const errorElement = document.querySelector(".app__error");
const todoArray = [];
const completeArray = [];
const displayIncompleteTasks = document.querySelector('#incomplete');
const displayCompleteTasks = document.querySelector('#complete');
let activeTasks = document.querySelector(".app__tasks-active");
let pressed = 0;
let html = ``;
let counter = 0;
//false means incomplete, true means complete
let display = false;

getActiveDisplay();

//have the default display be set to incomplete 
//every time the submit button is pressed check what the varaible is

const getActiveTasks = () => { return activeTasks.innerHTML = `${todoArray.length} Active Tasks` };

displayIncompleteTasks.addEventListener('click', () => {
  display = false;
  getActiveDisplay();
/*  $("clicked");
  setHtml();
  setCounter();
  todoArray.forEach(htmlRewrite);
  tasksSection.innerHTML = html;*/
}); 

displayCompleteTasks.addEventListener('click', () => {
  display = true;
  getActiveDisplay();
/*  $("clicked");
  setHtml();
  setCounter();
  completeArray.forEach(completeTaskDisplay);
  tasksSection.innerHTML = html;*/
}); 

btn.addEventListener(`click`, () => {
    const userInput = document.querySelector(".app__form--input");
    const finalInput = userInput.value;
    const isInputLongEnough = (Boolean(finalInput.length));

    if(isInputLongEnough) {
      errorElement.innerHTML = ``;
      todoArray.push(finalInput);
      $(`${todoArray[pressed]}`);
      userInput.value = ``;
      //call function to check what the dispay is  
      getActiveDisplay();
      getActiveTasks();
      pressed++;
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
      if (classList.contains("task__holder--complete")) {
        const clickedIndex = event.target.dataset.complete;
        $(`Completed`);
        //delete this for now but change it be sent to a different function and then delete it in setArraySize
        setCompletedTasks(todoArray, clickedIndex);
      } 
      else if(classList.contains("task__holder--delete")) {
        const clickedIndex = event.target.dataset.delete;
        $(event.target.dataset.delete);
        setArraySize(todoArray, clickedIndex);
      }
  });

  function getActiveDisplay() {
    if(display) {
      setCounter();
      setHtml();
      completeArray.forEach(completeTaskDisplay);
      tasksSection.innerHTML = html;
    }
    else {
      setCounter();
      setHtml();
      todoArray.forEach(completeTaskDisplay);
      tasksSection.innerHTML = html;
    }
  }

  //Rewrite function to display both. It must take in a parameter this could probably just be an arrow function
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

  //will be deleted eventually, but is here for testing
  function completeTaskDisplay() {
    html += `
    <div>
    <div class="task__holder">
        <div class="task__holder--complete" data-complete="${counter}">Completed</div>
            <p class="task__desc">${completeArray[counter]}</p>
            <div class="task__holder--delete" data-delete="${counter}">Delete</div>
        </div>
      </div>
    `
    counter++;
  }

  function setCounter() {
    counter = 0;
  }

  function setHtml() {
    html = ``;
  }

  function setCompletedTasks(array, index) {
    completeArray.push(array[index]);
    $(completeArray.toString());
    setArraySize(todoArray, index)
  }

  function setArraySize(array, index) {
    array.splice(index, 1);
    $(array);
    //calling dom
    setHtml();
    counter = 0;
    todoArray.forEach(htmlRewrite);
    $(html);
    tasksSection.innerHTML = html;
  }