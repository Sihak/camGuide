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
import LoginSignUpNavigator from './app/app_routing/stackNavigator';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogedin : true,
    }
  }
  switchRoute(){
    if(this.state.isLogedin){
      return(
        <AppNavigator />
      )
    }
    else{
      return(
        <LoginSignUpNavigator />
      )
    }
  }

  render() {
    return (
      this.switchRoute()
    );
  }
}

