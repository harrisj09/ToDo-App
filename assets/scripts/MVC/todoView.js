
/*
In MVC, no other part cares about changing the DOM except for the view. The view can attach user events but leaves event handling concerns to the controller.
The view’s prime directive is to change the state of what the user sees on the screen.
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


class TodoView {
    //This constructor takes in the string if it passes the if statement (length > 0) create push this into an array then call functions that carry out the rest
    constructor() {
        this.UI = {
            input: document.querySelector('.task__desc'),
            addBtn: document.getElementById('add-todo'),
            list: document.querySelector('.task__element')

        }
    }

    renderTodos(tasks) {
        let html = '';
        tasks.forEach(task => {
            html += `<li id="${task.id}">${task.title}</li>`;
        });
        this.UI.list.innerHTML = html;
    }

    onAddTodo(callback) {
        this.UI.addBtn.addEventListener('click', e => {
            e.preventDefault();
            const textData = this.UI.input.value;
            callback(textData);
        });
    }
}

export default TodoView;
