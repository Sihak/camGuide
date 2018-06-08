//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import PrimaryHeader from '../../component/primaryHeader';
import testingData from '../../assets/testingData';
import SubCarousel from '../../component/subCarousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Transportation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tittle: this.props.navigation.state.params,
            toLocation: '',
            fromLocation: '',
            selectedDate: moment().format('ll'),
            isDateTimePickerVisible: false,
            minimumDate: new Date(),
        }
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var convertedDate = moment(date).format('ll').toString()
        this.setState({ selectedDate: convertedDate })
        this.setState({ isDateTimePickerVisible: false })
    };
    returnFromData(forShow, name) {
        this.setState({ fromLocation: forShow })
    }
    returnToData(forShow, name) {
        this.setState({ toLocation: forShow })
    }
    render() {
        bookDetails = [
            {
                Booked: 'You have booked 2 tickets from VIP',
                Direction: 'PhnomPenh - Siemreap',
                Time: '9:30AM',
                date: 'May 12, 2018',

            },
            {
                Booked: 'You have booked two tickets from VIP',
                Direction: 'PhnomPenh - Siemreap',
                Time: '9:30AM',
                date: 'May 12, 2018',
            },
        ]
        return (
            <View style={[{ flex: 1 }, APPEARANCES.SHADOW]}>
                <Image resizeMode="cover" style={{ position: 'absolute', height: viewportHeight, width: viewportWidth, opacity: 1 }} source={require('../../assets/image/transportationWallpaper.png')} />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ paddingTop: 15, paddingLeft: 15, justifyContent: 'center' }}>
                        <PrimaryHeader
                            isHome={true}
                            tittle={'Transportation'}
                        />
                    </View>
                    <View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <SubCarousel data={testingData} />
                    </View>
                    <View style={styles.locationDetails}>
                        <View style={styles.headerTittle}>
                            <Ionicons name='md-pin' style={styles.pinIcon} />
                            <Text style={styles.headerText}> Location Details </Text>
                        </View>
                        <View style={styles.fromToContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('FilterScreen', { returnData: this.returnFromData.bind(this) })}
                                style={styles.toContainer}>
                                <Text style={styles.fromToText}>From</Text>
                                <Text style={styles.location} >{this.state.fromLocation ? this.state.fromLocation : 'Select Location'}</Text>
                            </TouchableOpacity>
                            <Ionicons name='md-arrow-round-forward' style={[styles.pinIcon, { color: '#FBA631' }]} />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('FilterScreen', { returnData: this.returnToData.bind(this) })}
                                style={styles.fromContainer}>
                                <Text style={styles.fromToText}>To</Text>
                                <Text style={styles.location} >{this.state.toLocation ? this.state.toLocation : 'Select Location'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => this._showDateTimePicker()}
                        style={styles.date}>
                        <View style={styles.selectDate}>
                            <View style={styles.dateTittle}>
                                <Ionicons name='md-calendar' style={[styles.pinIcon, { fontSize: 26, marginRight: 10 }]} />
                            </View>
                        </View>
                        <Text style={styles.headerText}>{this.state.selectedDate ? this.state.selectedDate : 'Select Date'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SearchVehicle')}
                        style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                    <View style={styles.bookingDetails}>
                        <View style={styles.headerTittle}>
                            <Ionicons name='md-list-box' style={styles.pinIcon} />
                            <Text style={styles.headerText}> Booking Details </Text>
                        </View>
                        <FlatList
                            style={styles.bodyDetails}
                            data={bookDetails}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    onPress={() => this.onSelectData(item.forShow, item.name)}
                                    style={styles.itemContainer} >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name='md-pin' style={{ fontSize: 16, color: '#32D6FA', marginRight: 5 }} />
                                        <Text style={styles.bookingText} > {item.Direction} </Text>
                                    </View>
                                    <Text style={styles.bookingText} >{item.Booked} </Text>
                                    <Text style={styles.bookingText} >Departure Date: {item.date} </Text>
                                    <Text style={styles.bookingText} >Departure Time: {item.Time} </Text>

                                </TouchableOpacity>}
                        />
                    </View>
                </SafeAreaView>
                <DateTimePicker
                    minimumDate={this.state.minimumDate}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={(date) => this._handleDatePicked(date)}
                    onCancel={() => this._hideDateTimePicker()}
                />
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
    itemContainer: {
        margin: 5,
        flex: 1,
        paddingLeft: 15,
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
    locationDetails: {
        height: DIMENSION(30),
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: APPEARANCES.MARGIN,
        marginHorizontal: APPEARANCES.MARGIN - 5,
        borderRadius: 8,
        justifyContent: 'center',
    },

    bookingDetails: {
        height: DIMENSION(65),
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: APPEARANCES.MARGIN,
        marginHorizontal: APPEARANCES.MARGIN - 5,
        borderRadius: 8,
    },
    headerTittle: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '800'
    },

    pinIcon: {
        fontSize: 18,
        color: COLORS.RED,
        marginRight: 5,
    },
    fromToContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    fromToText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
    },
    location: {
        color: '#fff',
        fontSize: 20,
        marginTop: 5,
        fontWeight: '300'
    },
    searchButton: {
        backgroundColor: COLORS.RED,
        height: DIMENSION(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: DIMENSION(3),
        opacity: 0.8
    },
    searchButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    },
    toContainer: {
        width: DIMENSION(40),
        justifyContent: 'center',
    },
    fromContainer: {
        width: DIMENSION(40),
        justifyContent: 'center',
    },
    date: {
        height: DIMENSION(15),
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: APPEARANCES.MARGIN,
        marginTop: APPEARANCES.MARGIN - 5,
        marginHorizontal: APPEARANCES.MARGIN - 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    dateTittle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyDetails: {
        marginTop: 15,
        flex: 1,
        borderTopWidth: 0.5,
        borderTopColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32

    },
    bookingText: {
        fontSize: 16,
        color: '#fff',
    }
});

export default Transportation;
