/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  YellowBox
} from 'react-native';

import AppNavigator from './app/app_routing/app_routing.js';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class App extends Component {
  render() {
    return (
     <AppNavigator />
    );
  }
}

