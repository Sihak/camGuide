import React, { Component } from 'react';
import { COLORS, APPEARANCES } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class GridMenu extends Component {
    
    render(){
        return(
            <View style={[styles.gridMenu]} >
            <View style={styles.row}>
                <TouchableOpacity style={[styles.gridButton]} >
                    <Ionicons name={'md-locate'} style={[  styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Places </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.gridButton]} >
                    <Ionicons name={'ios-navigate'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Transportation </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.gridButton]} >
                    <FontAwesome name={'bed'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Accommodation </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.gridButton]} >
                    <Ionicons name={'ios-restaurant'} style={[ styles.gridIcon]} />
                    <Text style={[styles.gridText]} > Restaurant </Text>

                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const styles = StyleSheet.create({
    gridMenu: {
        marginTop: 15,
        marginBottom: 5,
        opacity: 0.8 ,
        height: wp(50),
        width: '100%',
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,1)',
        borderLeftWidth:8,
        borderLeftColor: '#E82A94',
        borderRightWidth:8,
        borderRightColor: '#15FCBB',
        borderTopWidth:4,
        borderTopColor:  '#15FCBB',
        borderBottomWidth:4,
        borderBottomColor:  '#E82A94',
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
        fontSize: wp(5),
        color: '#242424' ,
    },
    gridIcon: {
        fontSize: wp(10),
        fontWeight: '300',
        color: '#242424',
    }


});

export default GridMenu;