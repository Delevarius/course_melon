import { combineReducers } from 'redux';
import todoApp from '../todo-app/reducer';
import homePage from '../home/reducer';

// Combine all our reducers togeher
const rootReducer = combineReducers({
  homePage,
  todoApp
});
export default rootReducer;
