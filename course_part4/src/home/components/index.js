import React from 'react';
import { Link } from 'react-router';

const HomePage = props =>
  <div>
    <h1>Name your Todo App:</h1>
    <input
      value={props.todoName}
      onChange={(e) => {
        props.inputTodoApp(e.target.value);
      }}
    />
    <Link to="/todo_app" >Enter your Todo App</Link>
  </div>
;

export default HomePage;
