//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native';
import PrimaryHeader from '../../component/primaryHeader';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

// create a component
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class SafariView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            illustration: this.props.navigation.state.params[0],
            tittle: this.props.navigation.state.params[1],
            loading: true,
            loadingImg: require('../../assets/image/loading.gif'),
        }
    }
    render() {
        return (<View style={{ flex: 1 }} >
            <HeaderImageScrollView
                maxHeight={280}
                minHeight={50}
                renderHeader={() => <View style={{ height: 280 }} >

                    <Image
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        onLoad={() => this.setState({ loading: false })}
                        source={this.state.loading ? this.state.loadingImg : { uri: this.state.illustration }}
                        style={{ height: '100%', width: '100%' }}
                    />
                </View>
                }
            >
                <TriggeringView onHide={() => console.log('text hidden')} >
                    <View style={{ padding: 15, flex: 1 }}>
                        <View style={styles.cardTittleContainer}>
                            <Text
                                ellipsizeMode={'tail'}
                                numberOfLines={2}
                                style={styles.cardTittle} >{this.state.tittle}</Text>
                            <View style={styles.locationContainer} >
                                <Ionicons name='md-pin' style={styles.locationIcon} />
                                <Text style={styles.locationDescription}>Siemreap</Text>
                            </View>
                        </View>
                        <View style={styles.desriptionContainer}>
                            <Text
                                ellipsizeMode={'tail'}
                                style={styles.description} >{'  '}
                                Angkor Wat is an ancient city in Cambodia that was the center of the Khmer empire that once ruled most of Southeast Asia. This civilization went extinct, but not before building amazing temples and buildings that were reclaimed by the jungle for hundreds of years. Though this place is always packed with tourists, the area is still breathtaking to see. The most popular temples are Angkor Wat, Bayon, Ta Phrom, and Angkor Thom. I would recommend getting a multi-day pass so you can visit some of the outer temples where there are less visitors. The closest major city and launching pad for tours here is Siem Reap.
                        </Text>
                        </View>
                    </View>
                </TriggeringView>
            </HeaderImageScrollView>
            <SafeAreaView style={{ position:'absolute', marginLeft: 15 }} >
                <PrimaryHeader
                    color='#fff'
                    onBackPressed={() => this.props.navigation.goBack()}
                />
            </SafeAreaView>
        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardTittle: {
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'left'
    },
    locationContainer: {
        padding: APPEARANCES.MARGIN - 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationIcon: {
        color: '#32D6FA',
        fontSize: 16,
        marginRight: 5
    },
    locationDescription: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2.5
    },
    desriptionContainer: {
        marginVertical: 15,
    },
    description: {
        textAlign: 'justify',
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: 0.5
    }
});

//make this component available to the app
export default SafariView;
