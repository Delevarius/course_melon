const todos = [
  {
    name: 'preloaded 1',
    checked: false,
    id: '243asda324'
  },
  {
    name: 'preloaded 2',
    checked: false,
    id: '12eadsd1gjy'
  }
];

function* getTodo () {
  this.body = todos;
}

function* addTodo () {
  const { todo } = this.request.body;
  todos.push(todo)
  this.response.body = 'TODO ADDED!'
}

function* removeTodo () {
  const { index } = this.request.body;
  todo = todo.filter(todo => todo.id !== action.id);
  this.response.body = 'TODO REMOVED!'
}

function* updateTodo () {
  console.log(this.request)
  console.log(this.request.body)
  const { id, text } = this.request.body;
  todos[todos.findIndex(o => o.id === id)] = text;
  this.response.body = 'TODO UPDATED!'
}

export default { getTodo, addTodo, removeTodo, updateTodo };
