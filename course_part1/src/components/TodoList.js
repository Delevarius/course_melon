import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todoList.map((todo, index) => {
            return (
              <li key={index}>{todo.name}</li>
            )
          })
        }
      </ul>
    );
  }
}

export default TodoList;