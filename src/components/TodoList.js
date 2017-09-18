import React from 'react';

const TodoList = props =>
  <ul className="Todo_List">
    {
      props.todoList.map((todo, index) =>
        <li
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
