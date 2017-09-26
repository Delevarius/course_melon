import React from 'react';

const HomePage = props =>
  <div>
    <h1>Name your Todo App:</h1>
    <input
      value={props.todoName}
      onChange={(e) => {
        props.inputTodoApp(e.target.value);
      }}
    />
    <button>Enter your Todo App</button>
  </div>
;

export default HomePage;
