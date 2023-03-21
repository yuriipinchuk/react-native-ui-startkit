import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import appReducer from './reducers';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = () =>
  createStore(appReducer, composeEnhancers(applyMiddleware(thunk, middleware)));

export default configureStore;
