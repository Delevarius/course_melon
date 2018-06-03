import { INPUT_HOME_PAGE } from './constants';
export default function homePageReducer (state = "", action) {
  switch(action.type) {
    case INPUT_HOME_PAGE:
      return action.homePage;
    default: 
      return state;
  }
}