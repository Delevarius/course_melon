import hat from 'hat';
import store from '../lib/store';
import { getTodos } from './fetch';
import { GET_TODOS, SAVE_TODOS, CHANGE_MODE, CHECK_TODO, ADD_TODO, INPUT_TODO, DELETE_TODO, defaultState } from './constants';

export default function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TODOS:
      getTodos().then((response) => {
        store.dispatch({
          type: SAVE_TODOS,
          todoList: response
        })
      })
      return state;
    case SAVE_TODOS:
      return {
        ...state,
        todoList: action.todoList
      }
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.mode
      };
    case CHECK_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo, index) => {
          return action.id === todo.id ? { ...todo, checked: !todo.checked } : todo
        })
      };
    case ADD_TODO:
      return {
        ...state,
        todo: '',
        todoList: [
          ...state.todoList,
          {
            name: state.todo,
            checked: false,
            id: hat()
          }
        ]
      };
    case INPUT_TODO:
      return {
        ...state,
        todo: action.todo
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}
