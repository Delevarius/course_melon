import React from 'react';

const TodoHeader = props =>
  <div>
    <input
      type="text"
      value={props.todo}
      onChange={
        (event) => {
          props.inputTodo && props.inputTodo(event.target.value);
        }
      }
      onKeyDown={
        (event) => {
          if(event.keyCode === 13) {
            props.addTodo()
          }
        }
      }
    />
  </div>
;
export default TodoHeader