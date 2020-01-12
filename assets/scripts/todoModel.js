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
  }

  completeTask(index) {
      this.todos[index].completed = true;
      console.log(this.todos);
  }

  removeTodo(index) {
      this.todos.splice(index, 1);
      this.resetIds();
  }

  // method to reset ids since array index was deleted
  resetIds() {
      console.log("Resizing ids");
  }

  undoTask(index) {
    this.todos[index].state = false;
  }

}

export default TodoModel;