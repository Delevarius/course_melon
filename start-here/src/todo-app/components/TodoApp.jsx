import React, { Component } from 'react';
import hat from 'hat'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter'
import '../styles.css';

const App = props => {
  const filteredList = props.mode === 'DONE' ?
    props.todoList.filter(o => o.checked) :
    props.todoList.filter(o => !o.checked);
  return (
    <div className="App">
      <h3>{props.todoPageName}</h3>
      <TodoHeader
        todo={props.todo}
        inputTodo={props.inputTodo}
        addTodo={props.addTodo}
      /> 
      <TodoList
        todoList={props.mode === 'ALL' ? props.todoList : filteredList}
        checkTodo={props.checkTodo}
        deleteTodo={props.deleteTodo}
      />
      <TodoFilter
        mode={props.mode}
        changeMode={props.changeMode}
      />
    </div>
  );
}

export default App;
