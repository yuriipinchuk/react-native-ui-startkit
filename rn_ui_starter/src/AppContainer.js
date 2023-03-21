import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import RootNavigator from './navigators/RootNavigator';

const AppContainer = createReduxContainer(RootNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(AppContainer);
