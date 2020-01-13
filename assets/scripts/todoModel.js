class TodoModel {
    
    // Add local storage use
  constructor(task, id, completed) {
      // get the index of the ID number assiociated with it
      this.todos = [
          // blank by default
      ];
  }

  addTodoList(title, id, completed = false) {
      this.todos.push({
          title: title,
          id: id,
          completed
      });
      console.log(this.todos);
  }

  completeTask(index) {
      this.todos[index].completed = true;
      console.log(this.todos);
  }

  removeTodo(index) {
      // get the index of the ID number assiociated with it
      this.todos.splice(index, 1);
      this.resetIds();
  }

  resetIds() {
      let counter = 0;
      this.todos.forEach(todos => {
        todos.id = counter;
        counter++;
      });
  }

  undoTask(index) {
    this.todos[index].completed = false;
  }

}

export default TodoModel;