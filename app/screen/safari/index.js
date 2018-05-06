//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image , Dimensions, TextInput, TouchableOpacity, Picker } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import PrimaryHeader from '../../component/primaryHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../component/searchInput';
import Carousel from '../../component/subCarousel';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Safari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tittle : this.props.navigation.state.params, 
        }
    }
    render() {
        return (
            <SafeAreaView style={[{ flex: 1}]}>
                <Image resizeMode = "cover" style = {{ position:'absolute', height: viewportHeight ,width: viewportWidth,   }} source = {require('../../assets/image/safari_cover.jpg')} />            
                <View style={[styles.header]}>
                    <PrimaryHeader
                        tittle={'Safari' }
                        onBackPressed = {() => this.props.navigation.goBack()}
                    />
                    <SearchInput
                    placeholder = {'Where do you want to go?'}
                     />
                </View>
            
                <View style ={ styles.body }>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        padding: APPEARANCES.MARGIN,
        paddingTop: APPEARANCES.MARGIN - 5,
        height: DIMENSION(30),
        width: DIMENSION(100),
    },

    body:{
        flex:1,
        padding: APPEARANCES.MARGIN,
    }
});

export default Safari;
