import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'

const LoginSignUpNavigator = StackNavigator ({

    Home: {
        screen: HomeScreen,
      },
})


export default LoginSignUpNavigator;
