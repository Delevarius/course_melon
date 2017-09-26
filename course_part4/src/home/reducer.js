import { INPUT_TODO_APP, ENTER_TODO_APP, defaultState } from './constants';

export default function homePageReducer(state = defaultState, action) {
  switch (action.type) {
    case INPUT_TODO_APP:
      return {
        ...state,
        todoName: action.todoName
      };
    case ENTER_TODO_APP:
      return state;
    default:
      return state;
  }
}
