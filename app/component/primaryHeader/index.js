import React, { Component } from 'react';
import { COLORS, APPEARANCES } from '../../module';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class PrimaryHeader extends Component {
    render() {
        return (
            <View animation={'slideInDown'} duration={3000} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.subHearderTittle, APPEARANCES.SHADOW]}> {this.props.tittle} </Text>
                <TouchableOpacity
                onPress={() => this.props.pressed()} >
                    <FontAwesome style={[APPEARANCES.SHADOW, { fontSize: 28, marginRight: 12, color: COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }]} name='search' />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subHearderTittle: {
        fontSize: 32,
        fontWeight: '300',
        color: COLORS.SUB_HEADER_TITTLE
    },
});

export default PrimaryHeader;