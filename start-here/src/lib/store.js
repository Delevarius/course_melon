import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

const defaultState = {
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
