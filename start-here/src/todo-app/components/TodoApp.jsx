import React, { Component } from 'react';
import hat from 'hat'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter'
import '../styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todoList: [],
      mode: 'ALL'
    };
  }
  inputTodo = (todo) => {
    this.props.inputTodo(todo);
  }

  addTodo = () => {
    this.setState({
      todo: '',
      todoList: [
        ...this.state.todoList,
        {
          name: this.state.todo,
          checked: false,
          id: hat()
        }
      ]
    })
  }
  checkTodo = (checkedId) => {
    this.setState({
      todoList: this.state.todoList.map((todo, index) => {
        return (
          checkedId === todo.id ?
            { ...todo, checked: !todo.checked } :
            todo
        );
      })
    })
  }
  deleteTodo = (deleteId) => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== deleteId)
    })
  }
  changeMode = (mode) => {
    this.setState({ mode })
  }
  render() {
    console.log(this.props)
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
          checkTodo={this.checkTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter
          mode={this.state.mode}
          changeMode={this.changeMode}
        />
      </div>
    );
  }
}

export default App;
