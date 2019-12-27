/*
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


function setCounter() {
    counter = 0;
  }

  function setHtml() {
    html = ``;
  }

//Could be used for both 
  function setCompletedTasks(array, index) {
    completeArray.push(array[index]);
    setArraySize(todoArray, index)
  }


  function setArraySize(array, index) {
    array.splice(index, 1);
    //calling dom
    setHtml();
    counter = 0;
    array.forEach(htmlRewrite);
    tasksSection.innerHTML = html;
  }
  */

  //Delete everything above once this is done
  class TodoModel {
    constructor() {
      this.todos = [
        // Empty by default 
      ];
    }

    getTodoList() {
      return this.todos;
    }

    setTodoList(title, completed = false) {
      this.todos.push({
        title: title,
        completed
      });
    }
  }

  export default TodoModel;