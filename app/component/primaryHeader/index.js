import React, { Component } from 'react';
import { COLORS, APPEARANCES } from '../../module';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, StyleSheet, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class PrimaryHeader extends Component {

    onSearchPressed() {
        this.props.searchPressed()
    }
    onNotificationPressed() {
        this.props.notificationPressed()
    }

    render() {
        return (
            <View animation={'slideInDown'} duration={3000} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.subHearderTittle, APPEARANCES.SHADOW]}> {this.props.tittle} </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {this.props.showSearch && <TouchableOpacity
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => this.onSearchPressed()} >
                        <FontAwesome style={[APPEARANCES.SHADOW, { fontSize: 28, marginRight: 12, color: COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }]} name='search' />
                        </TouchableOpacity>
                    }

                    {this.props.showNotification && <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.onNotificationPressed()} >
                        <Ionicons style={[APPEARANCES.SHADOW, { fontSize: 34, marginRight: 12, marginTop: 5, color: COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }]} name='ios-notifications' />
                    </TouchableOpacity>}
                </View>

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