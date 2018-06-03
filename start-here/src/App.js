import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import store from './lib/store'
import HomePage from './home';
import TodoApp from './todo-app';


const App = () => {
  return (
    <Router path="/" history={browserHistory} >
      <Route path="/" component={HomePage} />
      <Route
        path="/todo_app"
        component={TodoApp}
        onEnter={() => {
          store.dispatch({
            type: 'GET_TODOS'
          })
        }}  
      />
    </Router>
  );
};
export default App;