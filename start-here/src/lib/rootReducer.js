import { combineReducers } from 'redux';
import todoApp from '../todo-app/reducer';

// Combine all our reducers togeher
const rootReducer = combineReducers({
  todoApp
});
export default rootReducer;
