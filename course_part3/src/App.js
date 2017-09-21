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
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  changeMode(mode) {
    this.setState({ mode });
  }

  checkTodo(checkedId) {
    this.setState({
      todoList: this.state.todoList.map((todo, index) => {
        return checkedId === todo.id ? { ...todo, checked: !todo.checked } : todo;
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
          checked: false,
          id: this.state.todoList.length
        }
      ]
    })
  }

  inputTodo(todo) {
    this.setState({ todo })
  }

  deleteTodo(deleteId) {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== deleteId)
    })
  }

  render() {
    const filteredList = this.state.mode === 'DONE' ?
      this.state.todoList.filter(o => o.checked) :
      this.state.todoList.filter(o => !o.checked);
    return (
      <div className="App">
        <TodoHeader
          todo={this.state.todo}
          inputTodo={this.inputTodo}
          addTodo={this.addTodo}
        />
        <TodoList
          todoList={this.state.mode === 'ALL' ? this.state.todoList : filteredList}
          mode={this.state.mode}
          checkTodo={this.checkTodo}
          deleteTodo={this.deleteTodo}
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
