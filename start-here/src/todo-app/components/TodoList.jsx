import React from 'react';

const TodoList = props => 
  <ul>
    {
      props.todoList
        .map(
          (todo) =>{
            return (
              <li
                key={todo.id}
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
            );
        })
    }
  </ul>
;
export default TodoList