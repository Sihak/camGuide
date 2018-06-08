import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import App from './App';

Text.defaultProps.allowFontScaling = false;

export default class CamGuide extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('campGuide', () => App);