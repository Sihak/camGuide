//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, FlatList  } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import PrimaryHeader from '../../component/primaryHeader';
import testingData from '../../assets/testingData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VehicleCard from './VehicleCard';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class SearchVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    itemSeperator() {
        return (
            <View style={{ height: DIMENSION(5) }} ></View>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image resizeMode="cover" style={{ position: 'absolute', height: viewportHeight, width: viewportWidth, opacity: 1 }} source={require('../../assets/image/transportationWallpaper.png')} />
                <View style = {{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1}}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ paddingTop: 15, paddingLeft: 15, justifyContent: 'center' }}>
                        <PrimaryHeader
                            isFilter = {true}
                            tittle={'Search'}
                            onBackPressed={() => this.props.navigation.goBack()}
                            // filterPressed = {() => }
                        />
                    </View>
                    <FlatList style={{flex:1, marginTop: APPEARANCES.MARGIN}}
                    data={testingData}
                    ItemSeparatorComponent={() => this.itemSeperator()}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <VehicleCard />
                    }
                />
                </SafeAreaView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: APPEARANCES.MARGIN,
        height: viewportHeight / 9,
        width: viewportWidth,
        backgroundColor: '#E2A84F',
        paddingTop: DIMENSION(12)
    },

    cardContainer: {
        flex: 1,
    },
});

export default SearchVehicle;
