//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, SafeAreaView, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainCarousel from '../../component/carousel'
import SubCarousel from '../../component/subCarousel'

import { COLORS } from '../../module'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
class HomeApp extends Component {
    render() {
        const data = [
            {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/UYiroysl.jpg'
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                illustration: 'https://i.imgur.com/MABUbpDl.jpg'
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/lceHsT6l.jpg'
            }
        ];
        return (
            <SafeAreaView style={styles.container}>
                <View style = {{ flexDirection: 'row', justifyContent: 'space-between', alignItems : 'center'}}>
                <Text style={styles.subHearderTittle}> Recommend </Text>
                <FontAwesome style = {{ fontSize: 28, marginRight: 12, color : COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }} name= 'search'  />
                </View>
                <View style={styles.carouselContainer} >
                    <MainCarousel data={data} />
                </View>
                <Text style={[styles.subHearderTittle, {fontSize:22, marginTop:15 }]}> Services </Text>
                <View style={styles.SubCarouselContainer}>
                    <SubCarousel data={data} />
                </View>
                <View style={styles.gridMenu} ></View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    carouselContainer: {
        height:210 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubCarouselContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    subHearderTittle: {
        fontSize: 32,
        fontWeight: '600',
        color: COLORS.SUB_HEADER_TITTLE
    },
    container: {
        margin: 10,
        flex: 1,
    },

    profileUser: {
    }
});

export default HomeApp;
