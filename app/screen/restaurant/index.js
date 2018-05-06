//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image , Dimensions, TextInput, TouchableOpacity, Picker } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import PrimaryHeader from '../../component/primaryHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../component/searchInput';
import testingData from '../../assets/testingData';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tittle : this.props.navigation.state.params, 
        }
    }
    render() {
        return (
            <View style={[{ flex: 1 }, APPEARANCES.SHADOW]}>
                <View style={[styles.container]}>
                    <PrimaryHeader
                        tittle={'Restaurant' }
                    />
                    <SearchInput
                    placeholder = {'I know a restaurant...'}
                     />
                </View>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: APPEARANCES.MARGIN,
        height: viewportHeight / 5,
        width: viewportWidth,
        backgroundColor: '#E2A84F',
        paddingTop:DIMENSION(12)
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
});

export default Restaurant;
