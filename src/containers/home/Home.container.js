import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doTest } from 'redux/modules/testReducer';

/* Home Component */
import Home from './Home';

const mapStateToProps = props => {
  const testReducer = props.testReducer;
  return ({ isReduxOn: testReducer.isReduxOn });
};

const mapDispatchToProps = dispatch => bindActionCreators({ doTest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
