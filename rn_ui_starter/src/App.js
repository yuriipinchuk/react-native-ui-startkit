import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './store';
import AppContainer from './AppContainer';
import { setI18nConfig } from './core/localization/IMLocalization';

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
    };
  }
  componentDidMount() {
    // hide splash screen
    SplashScreen.hide();
    LogBox.ignoreAllLogs();
    setI18nConfig();
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer screenProps={{ theme: this.state.mode }} />
      </Provider>
    );
  }
}
