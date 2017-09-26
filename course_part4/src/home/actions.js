import { INPUT_TODO_APP, ENTER_TODO_APP } from './constants';

export function inputTodoApp(todoName) {
  return {
    type: INPUT_TODO_APP,
    todoName
  }
}

export function enterTodoApp() {
  return {
    type: ENTER_TODO_APP
  }
}