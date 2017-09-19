import React from 'react';

const TodoList = props =>
  <ul className="todo-list">
    {
      props.todoList.map((todo, index) =>
        <li
          className="todo-item"
          style={{
            textDecoration: todo.checked ? 'line-through' : ''
          }}
          onClick={() => {
            props.checkTodo(index);  
          }}
        >
          {todo.name}
        </li>
      )
    }
  </ul>
;

export default TodoList;
