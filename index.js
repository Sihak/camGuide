import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import reducers from './app/model/reducer';

// const store = createStore(reducers)
Text.defaultProps.allowFontScaling = false;

export default class CamGuide extends Component {
  render() {
    return (
      // <Provider store={store}>
        <App />
      // </Provider>
    );
  }
}

AppRegistry.registerComponent('campGuide', () => App);