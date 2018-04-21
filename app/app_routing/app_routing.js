import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeApp from '../screen/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeNavigator';

const color = '#373737';
const activeColor = '#F15C53'

const AppNavigator = TabNavigator({
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
  
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title:'Home',
            tabBarIcon: ({ focused }) => (
              focused ?
              <Ionicons name="ios-home" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {activeColor} />:
              <Ionicons name="ios-home" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {color} />
            ),
          }
    },
    Booking: {
        screen: HomeApp,
        navigationOptions: {
            title:'Booking',
            tabBarIcon: ({ focused }) => (
              focused ?
              <Ionicons name="md-pricetags" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {activeColor} />:
              <Ionicons name="md-pricetags" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {color} />
            ),
          }
    },
  
    Favourite: {
        screen: HomeApp,
        navigationOptions: {
            title:'Favourite',
            tabBarIcon: ({ focused }) => (
              focused ?
              <Ionicons name="md-heart" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {activeColor} />:
              <Ionicons name="md-heart" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color= {color} />
            ),
          }
    },
},
    {
        swipeEnabled: true,
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            swipeEnabled: true,
            showLabel: true,
            showIcon: true,
            labelStyle : {
                fontSize: 12,
                fontWeight: '300'
            },
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
