import React from 'react';
import { Link } from 'react-router';

const HomePage = props =>
  <div>
    <input
      type="text"
      value={props.homePage}
      onChange={(event) => {
        props.inputHomePage(event.target.value)
      }}
    />
    <Link to="/todo_app" >Enter Todo App</Link>
  </div>
;

export default HomePage