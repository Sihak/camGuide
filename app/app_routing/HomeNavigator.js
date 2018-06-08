import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeApp from '../screen/home';
import Restaurant from '../screen/restaurant';
import Accommodation from '../screen/accommodation';
import SafariRoute from './SafariRoute';
import TransportaionRoute from './TransportationRoute';

const HomeStack = StackNavigator({
    Home: {
        screen: HomeApp,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,
        }
    },
    Safari: {
        screen: SafariRoute,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,
            gestureResponseDistance: {
                vertical: 200,
            }
        }
    },
    restaurant: {
        screen: Restaurant,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,
            gestureResponseDistance: {
                vertical: 200,
            }
        }

    },
    accommodation: {
        screen: Accommodation,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,
            gestureResponseDistance: {
                vertical: 200,
            }
        }

    },
    transportaion: {
        screen: TransportaionRoute,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,
            gestureResponseDistance: {
                vertical: 200,
            }
        }

    },
}, {
        mode: 'modal',
    })

export default HomeStack;