import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Safari from '../screen/safari';
import FilterScreen from '../screen/safari/FilterScreen';
import SafariView from '../screen/safari/SafariView';
import HomeApp from '../screen/home';

const SafariRoute = StackNavigator({
    Safari: {
        screen: Safari,
        navigationOptions: {
            header: 'none',
            gesturesEnabled: true,
        }
    },
    FilterScreen: {
        screen: FilterScreen,
        navigationOptions: {
            header: 'none',
            gesturesEnabled: true,
            gestureResponseDistance: {
                vertical: 200,
            }
        }
    },
    SafariView: {
        screen: SafariView,
        navigationOptions: {
            header: 'none',
            gestureResponseDistance: {
                horizontal: 200
            }     
        }
    },
}, {
        mode: 'card',
    })

export default SafariRoute;