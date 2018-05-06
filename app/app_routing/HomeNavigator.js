import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeApp from '../screen/home';
import Restaurant from '../screen/restaurant';
import Accommodation from '../screen/accommodation';
import Transportation from '../screen/transportation';
import Safari from '../screen/safari';

const HomeStack = StackNavigator({
    Home: {
        screen: HomeApp,
        navigationOptions: {
            header: 'none',
            gestureEnabled: true,
        }
    },
    safari: {
        screen: Safari,
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
        screen: Transportation,
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