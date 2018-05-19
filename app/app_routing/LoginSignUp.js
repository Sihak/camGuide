import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import AppNavigator from './app_routing';

const LoginSignUpNavigator = StackNavigator(
    {

        // SingUpLogin: { screen: SignUpLogin,
        
        // },
        // Login: { screen: Login ,
        // },

        Main: {
            screen: AppNavigator
        }

    },
    {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
)

export default LoginSignUpNavigator;
