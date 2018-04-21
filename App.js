/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginSignUpNavigator from './app/app_routing/stackNavigator'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {YellowBox} from 'react-native'
export default class App extends Component {
  render() {
    return (
      <LoginSignUpNavigator/>
    );
  }
}

