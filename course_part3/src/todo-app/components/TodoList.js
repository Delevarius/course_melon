import React from 'react';

const TodoList = props =>
  <ul className="todo-list">
    {
      props.todoList.map((todo, index) =>
        <li
          key={index}
          className="todo-item"
        >
        <span
          style={{
              textDecoration: todo.checked ? 'line-through' : ''
            }}
            onClick={() => {
              props.checkTodo(todo.id);  
            }}
        >
          {todo.name}
        </span>
        <button
            className="delete-todo"
            onClick={() => {
              props.deleteTodo(todo.id);  
            }}
        >X</button>
        </li>
      )
    }
  </ul>
;

export default TodoList;
