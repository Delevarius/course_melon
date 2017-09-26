import { combineReducers } from 'redux';
import todo from '../todo-app/reducer';
import homePage from '../home/reducer';

// Combine all our reducers togeher
const rootReducer = combineReducers({
  todo,
  homePage
});
export default rootReducer;
