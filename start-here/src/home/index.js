import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import HomePage from './components/';

function mapStateToProps(state) {
  console.log(state);
  const { homePage } = state;
  return { homePage };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default ConnectedHomePage;