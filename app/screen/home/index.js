//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, SafeAreaView, Platform, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MainCarousel from '../../component/carousel';
import SubCarousel from '../../component/subCarousel';

import { COLORS, APPEARANCES, DIMENSION } from '../../module';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import GridMenu from './GridMenu';
import * as Animatable from 'react-native-animatable';
import PrimaryHeader from '../../component/primaryHeader';
import testingData from '../../assets/testingData';


class HomeApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background:require('../../assets/image/homeBackground.jpg'),
        }
    }


    onNavigate(value){
        this.props.navigation.navigate(value);
    }

    render() {
        const data = testingData
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Image 
                resizeMode={'stretch'} 
                style={{ position: 'absolute', width: viewportWidth, height: viewportHeight }} 
                source={this.state.background} />
                <ScrollView style={styles.container}>
                   <PrimaryHeader 
                   tittle = {'camGuide'}
                   showSearch = {false}
                   showNotification = {true}
                   notificationPressed = { () => this.props.navigation.navigate('Search')}
                    />
                    <View style={[styles.carouselContainer, APPEARANCES.SHADOW]} >
                        <MainCarousel data={data} />
                    </View>
                    <Text style={[styles.subHearderTittle, APPEARANCES.SHADOW, { fontSize: 22, marginTop: 15 }]}> Services </Text>
                    <View style={styles.SubCarouselContainer}>
                        <SubCarousel data={data} />
                    </View>
                    <GridMenu
                        onButtonPressed = {(value) => this.onNavigate(value)}
                     />
                </ScrollView>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    carouselContainer: {
        height: DIMENSION(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubCarouselContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: DIMENSION(23),
    },
    subHearderTittle: {
        fontSize: 32,
        fontWeight: '300',
        color: COLORS.SUB_HEADER_TITTLE
    },
    container: {
        padding: APPEARANCES.MARGIN,
        flex: 1,
    },



});

export default HomeApp;
