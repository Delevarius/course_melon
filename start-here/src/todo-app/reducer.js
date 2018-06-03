import hat from 'hat';
import { INPUT_TODO, ADD_TODO, defaultState } from './constants';

export default function todoReducer (state = defaultState, action) {
  switch (action.type) {
    case INPUT_TODO:
      return {
        ...state,
        todo: action.todo
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
    default:
      return state;
  }
}