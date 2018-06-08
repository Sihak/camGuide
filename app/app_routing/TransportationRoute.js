import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Transportation from '../screen/transportation';
import FilterScreen from '../screen/transportation/FilterScreen';
import SearchVehicle from '../screen/transportation/SearchVehicle';

const TransportaionRoute = StackNavigator({
    TransportationScreen: {
        screen: Transportation,
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
    SearchVehicle: {
        screen: SearchVehicle,
        navigationOptions: {
            header: 'none',
            gesturesEnabled: true,
            gestureResponseDistance: {
                vertical: 200,
            }
        }
    },
}, {
        mode: 'card',
    })

export default TransportaionRoute;