import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todoList: [],
      mode: 'ALL'
    }
    this.inputTodo = this.inputTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(mode) {
    this.setState({ mode });
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

  inputTodo(todo) {
    this.setState({ todo })
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
        <TodoFilter
          changeMode={this.changeMode}
          mode={this.state.mode}
        />
      </div>
    );
  }
}

export default App;
