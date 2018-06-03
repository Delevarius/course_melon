import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import TodoApp from './components/TodoApp';

function mapStateToProps(state) {
  const { todo, todoList, mode } = state.todoApp;
  return { 
    todo,
    todoList,
    mode
   };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default App;