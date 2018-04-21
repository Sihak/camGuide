import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'

const AppNavigator = TabNavigator ({
    Home: {
        screen: HomeScreen,
      },
})

export default AppNavigator;
