import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './lib/store';
import './index.css';
import TodoApp from './todo-app';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={browserHistory}>
      <Route path='/' component={Home}/>
      <Route
        path='/todo_app'
        component={TodoApp}
        onEnter={() => {
          store.dispatch({
            type: 'GET_TODOS'
          })
        }}
      />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
