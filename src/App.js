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
    }
    this.inputTodo = this.inputTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }

  checkTodo(checkedIndex) {
    this.setState({
      todoList: this.state.todoList.map((todo, index) => {
        return checkedIndex === index ? { ...todo, checked: !todo.checked } : todo;
      })
    })
  }

  addTodo() {
    this.setState({
      todo: '',
      todoList: [
        ...this.state.todoList,
        {
          name: this.state.todo,
          checked: false
        }
      ]
    })
  }

  inputTodo(value) {
    this.setState({
      todo: value
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
          checkTodo={this.checkTodo}
        />

      </div>
    );
  }
}

export default App;
