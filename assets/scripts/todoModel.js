/*
/!*
cares about data. In client-side JavaScript, this means Ajax. One advantage of the MVC pattern is you now have a single place for server-side Ajax calls.
This makes it inviting for fellow programmers who are not familiar with the solution. The model in this design pattern cares only about JSON or objects 
that come from the server.
 *!/

class TodoModel {
    constructor() {
        this.todos = [/!*{
            id: 1,
            title: 'Some stuff',
            completed: false
        },
        {
            id: 2,
            title: 'Send pictures',
            completed: true
        },
        {
            id: 3,
            title: 'Finish todo project',
            completed: false
        }*!/
        ]
    }



/!*    todos_all() {
        return this.todos;
    }*!/

/!*    todos_create(title, completed = false) {
        this.todos.push({
            id: this.todos.length + 1,
            title,
            completed
        });
    }*!/
}

export default TodoModel;*/
