import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import TodoApp from './components';

function mapStateToProps(state) {
  return {
    ...state.todo,
    todoAppName: state.homePage.todoName
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default App;
