
/*
In MVC, no other part cares about changing the DOM except for the view. The view can attach user events but leaves event handling concerns to the controller.
The view’s prime directive is to change the state of what the user sees on the screen.
 */

class viewHandler {
    constructor(html) {
        /* 
        Instance variables here will recieve the htmlRewrite variable and then invoke a function
        to perform DOM and display htmlRewrite string
        - Instance variable here is just gonna be an array of objects contaning strings
        */
        this.html = html;
    }

    htmlRewrite() {

    }


}


class TodoView {
    constructor() {
        this.UI = {
            input: document.getElementById('todo-input'),
            addBtn: document.getElementById('add-todo'),
            list: document.getElementById('todos-list')
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