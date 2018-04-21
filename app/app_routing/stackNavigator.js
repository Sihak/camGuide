import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import SignUpLogin from '../screen/signUpLogin/Index'
import Login from '../screen/signUpLogin/login/Index'

const LoginSignUpNavigator = StackNavigator(
    {
        SingUpLogin: { screen: SignUpLogin,
        
        },
        Login: { screen: Login ,
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            // gesturesEnabled: false,
        },
    }
)

export default LoginSignUpNavigator;
