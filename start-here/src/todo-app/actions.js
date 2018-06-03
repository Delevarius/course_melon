export function addTodo () {
  return  {
    type: 'ADD_TODO'
  }
}
export function inputTodo (todo) {
  return  {
    type: 'INPUT_TODO',
    todo
  }
}