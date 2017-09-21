import hat from 'hat';
import { CHANGE_MODE, CHECK_TODO, ADD_TODO, INPUT_TODO, DELETE_TODO, defaultState } from './constants';

export default function todoReducer(state = defaultState, action) {
  switch (action.type) {
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
