class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.renderTodos();
        this.view.onAddTodo(data => this.addTodo(data));
    }

    renderTodos() {
        const todos = this.model.todos_all();
        this.view.renderTodos(todos);
    }

    addTodo(text) {
        this.model.todos_create(text);
        this.updateList();
    }


    // To this day I still think this belongs in view, but oh wwell.
    updateList() {
        const todos = this.model.todos_all();
        this.view.renderTodos(todos);
    }
}

export default TodoController;