import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeApp from '../screen/home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const color = '#373737';
const activeColor = '#F15C53'

const AppNavigator = TabNavigator({
    Home: {
        screen: HomeApp,
        navigationOptions: {
            title:'Home',
            tabBarIcon: ({ focused }) => (
              focused ?
              <Ionicons name="ios-home" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {activeColor} />:
              <Ionicons name="ios-home" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {color} />
            ),
          }
    },
    Profile: {
        screen: HomeApp,
        navigationOptions: {
            title:'Profile',
            tabBarIcon: ({ focused }) => (
              focused ?
              <Ionicons name="ios-person" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {activeColor} />:
              <Ionicons name="ios-person" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {color} />
            ),
          }
    },
    Notification: {
        screen: HomeApp,
        navigationOptions: {
            title:'Notification',
            tabBarIcon: ({ focused }) => (
              focused ?
              <Ionicons name="ios-notifications" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {activeColor} />:
              <Ionicons name="ios-notifications" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {color} />
            ),
          }
    },


},
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            swipeEnabled: true,
            showLabel: true,
            showIcon: true,
            activeTintColor : activeColor,
            style: {
                elevation: 0,
                borderTopWidth: 1,
                borderTopColor: '#F0F0F5',
                backgroundColor: '#fff',
                paddingTop: 5,
            },
            indicatorStyle: {
                backgroundColor: '#fff',
            },
        },
    })

export default AppNavigator;
