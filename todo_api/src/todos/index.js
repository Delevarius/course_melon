import hat from 'hat';

var todos = [
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
  const { todo } = JSON.parse(this.request.body);
  todos.push({
    name: todo,
    checked: false,
    id: hat()
  })
  this.response.body = 'TODO ADDED!'
}

function* removeTodo () {
  const { id } = JSON.parse(this.request.body);
  console.log(id)
  todos = todos.filter(todo => todo.id !== id);
  this.response.body = 'TODO REMOVED!'
}

function* updateTodo () {
  console.log(this.request)
  console.log(this.request.body)
  const { id, text } = JSON.parse(this.request.body);
  todos[todos.findIndex(o => o.id === id)] = text;
  this.response.body = 'TODO UPDATED!'
}

export default { getTodo, addTodo, removeTodo, updateTodo };
