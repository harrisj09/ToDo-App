/*
//console.log() shortcut
const { log: $, warn: $w, error: $e } = console;
const btn = document.querySelector(".app__form--submit");
const tasksSection = document.querySelector(".tasks__wrapper");
const inputString = document.querySelector(".app__form--submit").value;
const todoArray = [];
let pressed = 0;
let html = ``;
let number = 0;

btn.addEventListener(`click`, () => {
  inputString.value = ``;  
  titleArray.push(inputString);
  $(`${titleArray[pressed]} was created`);
  html = ``;
  number = 0;
  titleArray.forEach(htmlRewrite);
  $(html);
  app2.innerHTML = html;
  pressed++;
});

app2.addEventListener("click", event => {
  const {
    classList,
    dataset: { text: value }
  } = event.target;
  //grabbing text
  const element = event.target;
  const clickedText = element.innerHTML;
  if (classList.contains("title")) {
    $(`${titleArray.indexOf(clickedText)} array index of clicked text`);
    //use else if
  } else {
    const clickedIndex = event.target.dataset.box;
    //Both Work
    $(
      `${
        element.attributes.getNamedItem("data-box").value
      } data attribute of button`
    );
    $(event.target.dataset.box);
    resizeArray(titleArray, clickedIndex);
  }
});

function htmlRewrite(index) {
  $(number);
  html += `
 <div>
    <div class="task__element" data-task="${index}">
        <div class="task__element--complete">Completed</div>
            <p class="task__desc">${todoArray} ${index}</p>
            <div class="task__element--complete task__element--delete">Delete</div>
        </div>
    </div>
  `;
  index++;
  number++;
}

function resizeArray(array, index) {
  array.splice(index, 1);
  $(array);
  //calling dom
  html = ``;
  number = 0;
  titleArray.forEach(htmlRewrite);
  $(html);
  app2.innerHTML = html;
}
*/

const { log: $, warn: $w, error: $e } = console;
const btn = document.querySelector(".app__form--submit");
const tasksSection = document.querySelector(".tasks__wrapper");
const inputString = document.querySelector(".app__form--submit");
const todoArray = [];
let pressed = 0;
let html = ``;
let number = 0;

btn.addEventListener(`click`, () => {
    inputString.value = ``;  
    todoArray.push(inputString);
    $(`${todoArray[pressed]}`);
    //html = ``;
    //number = 0;
    //titleArray.forEach(htmlRewrite);
    $(html);
    //app2.innerHTML = html;
    pressed++;
  });