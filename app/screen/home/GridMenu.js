import React, { Component } from 'react';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class GridMenu extends Component {
    buttonPressed(value){
        this.props.onButtonPressed(value)
    }
    render(){
        return(
            <View style={[styles.gridMenu]} >
            <View style={styles.row}>
                <TouchableOpacity
                 onPress = {() => this.buttonPressed('Safari')}
                 style={[styles.gridButton]} >
                    <Ionicons name={'ios-navigate'} style={[  styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Safari </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress = {() => this.buttonPressed('transportaion')}                
                 style={[styles.gridButton]} >
                    <Ionicons name={'md-bus'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Transportation </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                 onPress = {() => this.buttonPressed('accommodation')}                
                 style={[styles.gridButton]} >
                    <FontAwesome name={'bed'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Accommodation </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress = {() => this.buttonPressed('restaurant')}                
                style={[styles.gridButton]} >
                    <Ionicons name={'ios-restaurant'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Restaurant </Text>

                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    gridMenu: {
        marginTop: 15,
        marginBottom: 5,
        opacity: 0.8 ,
        height: DIMENSION(50),
        width: '100%',
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,1)',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    gridButton: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridText: {
        fontWeight: '300',
        fontSize: DIMENSION(3),
        color: '#242424' ,
    },
    gridIcon: {
        fontSize: DIMENSION(10),
        fontWeight: '300',
        color: '#242424',
    }


});

export default GridMenu;