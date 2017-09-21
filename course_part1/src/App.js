import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todoList: []
    };
    this.inputTodo = this.inputTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  inputTodo(todo) {
    this.setState({ todo });
  }
  addTodo() {
    this.setState({
      todo: '',
      todoList: [
        ...this.state.todoList,
        {
          name: this.state.todo,
          checked: false,
          id: this.state.todoList.length
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <TodoHeader
          todo={this.state.todo}
          inputTodo={this.inputTodo}
          addTodo={this.addTodo}
        />
        <TodoList
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
