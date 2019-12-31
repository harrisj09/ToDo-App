  class TodoModel {
    constructor(task, completed) {
      this.todos = [
        this.task = task,
        this.completed = false
      ];
    }

    get TodoList() {
      return this.todos;
    }

    addTodoList(title, completed = false) {
      this.todos.push({
        title: title,
        completed
      });
    }

    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }

  export default TodoModel;