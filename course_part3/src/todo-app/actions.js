import { CHANGE_MODE, CHECK_TODO, ADD_TODO, INPUT_TODO, DELETE_TODO } from './constants'; 

export function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    mode
  }
}

export function checkTodo(id) {
  return {
    type: CHECK_TODO,
    id
  }
}

export function addTodo() {
  return {
    type: ADD_TODO
  }
}

export function inputTodo(todo) {
  return {
    type: INPUT_TODO,
    todo
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}