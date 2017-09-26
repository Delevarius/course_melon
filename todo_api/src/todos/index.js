const todos = [ 'todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5' ];

function* getTodo () {
  console.log('aaaa')
  this.body = todos;
}

function* addTodo () {
  const { todo } = this.request.body;
  todos.push(todo)
  this.response.body = 'TODO ADDED!'
}

function* removeTodo () {
  const { index } = this.request.body;
  todos.slice(index)
  this.response.body = 'TODO REMOVED!'
}

function* updateTodo () {
  console.log(this.request)
  console.log(this.request.body)
  const { index, text } = this.request.body;
  todos[index] = text;
  this.response.body = 'TODO UPDATED!'
}

export default { getTodo, addTodo, removeTodo, updateTodo };
