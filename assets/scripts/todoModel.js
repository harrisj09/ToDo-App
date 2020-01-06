class TodoModel {
  constructor(task, completed) {
      this.todos = [
          // blank by default
      ];
  }

  addTodoList(title, completed = false) {
      this.todos.push({
          title: title,
          completed
      });
      console.log(this.todos);
  }

  completeTask(index) {
      this.todos[index].state = false;
  }

  removeTodo(index) {
      this.todos.splice(index, 1);
  }

  undoTask(index) {
    this.todos[index].state = false;
  }
}

export default TodoModel;