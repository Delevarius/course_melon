import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import TodoApp from './components/TodoApp';

function mapStateToProps(state) {
  const todoListName = state.homepage.todoListName;
  return {todoListName, ...state.todoApp };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default App;