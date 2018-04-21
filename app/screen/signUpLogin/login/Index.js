//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated, TextInput, Image, TouchableOpacity } from 'react-native';
import { white } from 'ansi-colors';

// create a component
class Login extends Component {

    constructor() {
        super()
        this.animated = new Animated.Value(0);
        var range = 1, snapshot = 50, radius = 50;
        /// translateX
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move);
        }
        this.translateX = this.animated.interpolate({ inputRange, outputRange });

        /// translateY
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = -Math.cos(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move);
        }
        this.translateY = this.animated.interpolate({ inputRange, outputRange });
    }

      animate() {
        this.animated.setValue(0)
        Animated.timing(this.animated, {
          toValue: 1,
          duration: 1000,
        }).start();
      }
componentDidMount(){
    this.animate()
}
    render() {
        const transform = [{ translateY: this.translateY }, {translateX: this.translateX}];
        return (
            <View style={styles.container}>
            <Animated.View style={[{ transform }]}>
                    <Image
                        resizeMode='contain'
                        style={{ width: 100, height: 100, marginTop: 120, }}
                        source={require('../../../assets/image/logo.png')} />
                </Animated.View>
                <View style={{ marginTop: 50, flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <View>
                        <TextInput
                            style={styles.inputText}
                            placeholder='User Name'
                            onChangeText={(text) => this.setState({ text })}
                        />
                        <TextInput
                            style={styles.inputText}
                            placeholder='Password'
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-start', marginTop: 20, }}>
                        <TouchableOpacity>
                            <Text style={{ color: '#616161' }}>
                                Forget Password?
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, width: 70, justifyContent: 'center', alignItems: 'center', height: 30, borderRadius: 15, backgroundColor: '#03a9f4' }}>

                            <Text style={{ fontWeight: '200', color: '#fff' }}>
                                SignIn
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.textSignInWith}>Sign in with</Text>
                <View style={styles.allSocialSignInWithView}>
                    <View style={styles.facebookView}>
                        <Image
                            style={styles.facebookImage}
                            source={require('../../../assets/image/Facebook.png')} />
                        <Text style={styles.textSocialFacebook}>
                            Facebook
                            </Text>
                    </View>
                    <View style={styles.facebookView}>
                        <Image
                            style={styles.facebookImage}
                            source={require('../../../assets/image/Gmail.png')} />
                        <Text style={styles.textSocialGmail}>
                            Gmail
                            </Text>
                    </View>
                    <View style={styles.facebookView}>
                        <Image
                            style={styles.facebookImage}
                            source={require('../../../assets/image/Twitter.png')} />
                        <Text style={styles.textSocialTwitter}>
                            Twitter
                            </Text>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffca28',
    },

    allSocialSignInWithView: {
        marginBottom: 20,
        marginTop: 10,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSignInWith: {
        color: '#616161'
    },
    facebookView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookImage: {
        marginBottom: 4,
        width: 50,
        height: 50,
    },
    textSocialFacebook: {
        color: '#1565c0'
    },
    textSocialGmail: {
        color: '#f44336'
    },
    textSocialTwitter: {
        color: '#29b6f6'
    },
    inputText: {
        height: 40,
        width: 300,
        borderColor: '#9e9e9e',
        borderBottomWidth: 1,
        marginTop: 4,
        // borderRadius: 30,
        padding: 3

    }
});

//make this component available to the app
export default Login;
