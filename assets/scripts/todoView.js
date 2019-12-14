
/*
In MVC, no other part cares about changing the DOM except for the view. The view can attach user events but leaves event handling concerns to the controller.
The view’s prime directive is to change the state of what the user sees on the screen.
 */

const incompleteTasks = document.querySelector("#incomplete");
const completeTasks = document.querySelector("#complete");
const submit = document.querySelector(".app__form--submit");
const textInput = document.querySelector(".app__form--input").value;

submit.addEventListener("click", test);
incompleteTasks.addEventListener("click", test);
completeTasks.addEventListener("click", test);