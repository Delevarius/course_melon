import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import '../todo.css';

const App = props => {
  const { todoList } = props;
  const filteredList = props.mode === 'DONE' ?
    todoList.filter(o => o.checked) :
    todoList.filter(o => !o.checked);
  return (
    <div className="App">
      <h1>{props.todoAppName}</h1>
      <TodoHeader
        todo={props.todo}
        inputTodo={props.inputTodo}
        addTodo={props.addTodo}
      />
      <TodoList
        todoList={props.mode === 'ALL' ? todoList : filteredList}
        mode={props.mode}
        checkTodo={props.checkTodo}
        deleteTodo={props.deleteTodo}
      />
      <TodoFilter
        changeMode={props.changeMode}
        mode={props.mode}
      />
    </div>
  );
}

export default App;
