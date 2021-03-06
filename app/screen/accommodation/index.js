//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image , Dimensions, TextInput, TouchableOpacity, Picker } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import PrimaryHeader from '../../component/primaryHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../component/searchInput';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Accommodation extends Component {
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
                        tittle={'Accommodation' }
                    />
                    <SearchInput
                    placeholder = {'I know a guesthouse or hotel...'}
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
        backgroundColor: '#214A99',
        paddingTop:DIMENSION(12)        
    },
});

export default Accommodation;
