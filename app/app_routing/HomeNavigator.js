import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ScreenSearch from '../screen/home/Search';
import HomeApp from '../screen/home';

const HomeStack = StackNavigator({
    Home: {
        screen: HomeApp,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,
        }
    },
    Search: {
        screen: ScreenSearch,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,

        },
        Notification: {
            screen: ScreenSearch,
            navigationOptions: {
                header: 'none',
                gestureEnabled: true,

            },
        }
    }
}, {
        mode: 'modal',
        gestureResponseDistance: {
            vertical: 500,
        }

    })

export default HomeStack;