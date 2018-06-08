//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class VehicleCard extends Component {
    render() {
        return (
                        <TouchableOpacity style={[styles.card,APPEARANCES.SHADOW]}>
                            <View style={styles.cardHeader}>
                                <View style = { styles.headerContainer}>
                                <Text style={styles.operatorName}>VIP VirakBuntham</Text>
                                <Ionicons style = {[styles.heartIcon, APPEARANCES.SHADOW, {color:COLORS.RED}]} name = {'md-heart'} />
                                </View>
                                <View style={styles.directionContainer}>
                                    <Text style={styles.textDirection}>PhnomPenh</Text>
                                    <Image source = {require('../../assets/image/arrow.png')} style={[styles.iconDirection]} />
                                    <Text style={styles.textDirection}>SiemReap</Text>
                                </View>
                            </View>
                            <View style={styles.cardBody}>
                                <View style={styles.logoContainer}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={require('../../assets/image/logoBus.png')} style={styles.operatorLogo} />
                                </View>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.date} >June 12, 2018  - 9:00AM</Text>
                                    <View style={[styles.priceContainer,APPEARANCES.SHADOW]}>
                                        <Text style={[styles.priceText]}>12$</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 15 ,
        height: DIMENSION(45),
        borderRadius: 4,
        backgroundColor: '#fff',
        padding: DIMENSION(1),
    },
    iconDirection: {
        width: '22%',
        height:DIMENSION(7.5),
        marginRight: 5,
    },
    cardHeader: {
        padding: APPEARANCES.MARGIN - 5,
    },
    operatorName: {
        fontSize: 21,
        fontWeight: '800',
        color: '#333'
    },
    directionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    },
    textDirection: {
        fontSize: 16,
        fontWeight: '400',
    },
    operatorLogo: {
        height: '100%',
        width: '100%'
    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoContainer: {
        width: DIMENSION(23),
        height: DIMENSION(13),
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        marginRight: APPEARANCES.MARGIN,
        fontSize: 18,
        fontWeight: '900'
    },
    dateContainer: {
        alignItems: 'flex-end'
    },
    priceText: {
        marginRight: APPEARANCES.MARGIN,
        marginTop: 5,
        fontSize: 18,
    },
    priceContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.RED,
        height: DIMENSION(8),
        width: DIMENSION(22),
        marginTop:5,
        marginRight:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    priceText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff'
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heartIcon: {
        fontSize: 32,
        color: '#919397'
    }
});

export default VehicleCard;
