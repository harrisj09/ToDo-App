const { log: $, warn: $w, error: $e } = console;
const btn = document.querySelector(".app__form--submit");
const tasksSection = document.querySelector(".tasks__wrapper");
const todoArray = [];
const completeArray = [];
let activeTasks = document.querySelector(".app__tasks-active");
let pressed = 0;
let html = ``;
let counter = 0;

const getActiveTasks = () => { return activeTasks.innerHTML = `${todoArray.length} Active Tasks` };

btn.addEventListener(`click`, () => {
    const userInput = document.querySelector(".app__form--input");
    const finalInput = userInput.value;
    todoArray.push(finalInput);
    $(`${todoArray[pressed]}`);
    userInput.value = ``;  
    html = ``;
    counter = 0;
    todoArray.forEach(htmlRewrite);
    $(html);
    tasksSection.innerHTML = html;
    getActiveTasks();
    pressed++;
    $(todoArray.toString());
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
        setArraySize(todoArray, clickedIndex);
      } 
      else if(classList.contains("task__holder--delete")) {
        const clickedIndex = event.target.dataset.delete;
        $(event.target.dataset.delete);
        setArraySize(todoArray, clickedIndex);
      }
  });

  //incomplete list
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

  function setCompletedTasks(array, index) {
      //bug deletes two instead of only 1 
    completeArray.push(array[index]);
    $(completeArray.toString());
    setArraySize(todoArray, index)
  }

  function setArraySize(array, index) {
    array.splice(index, 1);
    $(array);
    //calling dom
    html = ``;
    counter = 0;
    todoArray.forEach(htmlRewrite);
    $(html);
    tasksSection.innerHTML = html;
  }