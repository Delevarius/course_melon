import React from 'react';

const TodoHeader = props =>
  <div className="Header">
    <input
      className="todo-input"
      value={props.todo}
      type="text"
      onChange={(e) => {
        props.inputTodo(e.target.value);
      }}
    />
    <button
      class="add-button"
      onClick={props.addTodo}
    >
      +
    </button>
  </div>
;

export default TodoHeader;
