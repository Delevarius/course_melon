import { combineReducers } from 'redux';
import todo from '../todo-app/reducer';

// Combine all our reducers togeher
const rootReducer = combineReducers({
  todo
});
export default rootReducer;
