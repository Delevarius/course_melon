import React from 'react';

const TodoHeader = props =>
  <div className="Header">
    <input
      value={props.todo}
      onChange={(e) => {
        props.inputTodo(e.target.value);
      }}
      onKeyDown={(e) => {
        if(e.keyCode === 13) {
          props.addTodo();       
        }
      }}
    />
  </div>
;

export default TodoHeader;