/*
cares about data. In client-side JavaScript, this means Ajax. One advantage of the MVC pattern is you now have a single place for server-side Ajax calls.
This makes it inviting for fellow programmers who are not familiar with the solution. The model in this design pattern cares only about JSON or objects 
that come from the server.
 */

const incompleteTasks = document.querySelector("#incomplete");
const completeTasks = document.querySelector("#complete");
const submit = document.querySelector(".app__form--submit");
const textInput = document.querySelector(".app__form--input").value;
const tasksDisplay = document.querySelector(".tasks__wrapper");

/*
submit.addEventListener("click", );
incompleteTasks.addEventListener("click", );
completeTasks.addEventListener("click", ;
*/