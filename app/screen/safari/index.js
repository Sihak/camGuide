//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, Dimensions, TextInput, TouchableOpacity, Picker } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import PrimaryHeader from '../../component/primaryHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../component/searchInput';
import Carousel from '../../component/subCarousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import testingData from '../../assets/testingData';
import SafariCard from './SafariCard';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Safari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tittle: this.props.navigation.state.params,
            selectedProvinceForShow: '',
            selectedPrvinceName: '',
            data : [],
        }
    }

    componentWillMount() {
        this.setState({
            data : testingData
        })
    }

    itemSeperator() {
        return (
            <View style={{ height: DIMENSION(5) }} ></View>
        )
    }

    returnData(forShow, name) {
        this.setState({
            selectedProvinceForShow: forShow,
            selectedPrvinceName: name
        })
    }

    render() {
        return (
            <SafeAreaView style={[{ backgroundColor: '#E8F2F6', flex: 1, alignItems: 'center' }]}>
                <Image resizeMode="cover" style={{ position: 'absolute', height: viewportHeight, width: viewportWidth, opacity: 1 }} source={require('../../assets/image/safari_cove.jpg')} />
                <View style={[styles.header]}>
                    <PrimaryHeader
                        tittle={'Safari'}
                        isHome = {true}
                    />
                    <SearchInput
                        placeholder={'Where do you want to go?'}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('FilterScreen', { returnData: this.returnData.bind(this) })}
                        style={[{ marginTop: 10, backgroundColor: '#fff', height: 33, width: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 8, flexDirection: 'row' }, APPEARANCES.SHADOW]} >
                        <Ionicons name='md-pin' style={{ fontSize: 16, color: '#32D6FA', marginRight: 5 }} />
                        <Text> {(this.state.selectedProvinceForShow != '' ? this.state.selectedProvinceForShow : 'All').toUpperCase()} </Text>
                    </TouchableOpacity>
                </View>
                <FlatList style={styles.body}
                    ItemSeparatorComponent={() => this.itemSeperator()}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <SafariCard
                            cardPressed={() => this.props.navigation.navigate('SafariView', [item.illustration, item.title])}
                            cover={item.illustration}
                            tittle={item.title}
                        />
                    }
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        padding: APPEARANCES.MARGIN,
        paddingTop: APPEARANCES.MARGIN - 5,
        height: DIMENSION(41),
        width: DIMENSION(100),
    },

    body: {
        flex: 1,
    }
});

export default Safari;
