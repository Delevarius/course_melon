import hat from 'hat';
import store from '../lib/store';
import { SAVE_TODOS, GET_TODOS, CHANGE_MODE, INPUT_TODO, ADD_TODO, DELETE_TODO, CHECK_TODO, defaultState } from './constants';
import { getTodos, addTodo } from './fetch';

export default function todoReducer (state = defaultState, action) {
  switch (action.type) {
    case GET_TODOS:
      getTodos().then(response => {
        store.dispatch({
          type: SAVE_TODOS,
          response
        })
      })
      return state;
    case SAVE_TODOS:
      console.log(action)
      return {
        ...state,
        todoList: action.response
      };
    case INPUT_TODO:
      return {
        ...state,
        todo: action.todo
      };
    case ADD_TODO:
      addTodo(state.todo).then((response) => {
        store.dispatch({
          type: GET_TODOS
        })
      })
      return {
        ...state,
        todo: ''
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.id)
      };
    case CHECK_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo, index) => {
          return (
            action.id === todo.id ?
              { ...todo, checked: !todo.checked } :
              todo
          );
        })
      }
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.mode
      }
    default:
      return state;
  }
}