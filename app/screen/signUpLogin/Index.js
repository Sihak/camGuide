//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

// create a component
class SignUpLogin extends Component {
    render() {
        return (
            <View style = {styles.container}>
            <ImageBackground 
            style = {{width: '100%'}}
            source = {require('../../assets/image/background.jpg')}>
            <View style={styles.body}>
                <View style={styles.logo}>
                   <Image style = {styles.imageLogo} 
                   resizeMode = 'contain'
                   source={require('../../assets/image/logo.png')} />
                </View>
                <View style = {styles.word}>
                    <Text style = {styles.fontWord}>
                        Travel {'\n'}
                        Is {'\n'}Fun
                    </Text>
                </View>
                <View style={styles.buttonSignUpLogin}>
                    <TouchableOpacity 
                    onPress = {() => this.props.navigation.navigate('Login')}
                    style={styles.buttonSignUp}>
                        <Text style = {{fontWeight: '200'}}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSignIn}>
                        <Text style = {{fontWeight: '200'}}>
                            If you are not yet sign up, <Text style = {{color: '#03a9f4'}}> Sign Up Here. </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
        </View>
        );  
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body:{
        margin: 15,
    },
    buttonSignUpLogin: {
        alignItems: 'center',
        marginBottom: 40,
    },
    buttonSignUp: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#ffca28',
    },
    buttonSignIn: {
        marginTop: 10,
        
    },
    fontWord: {
        fontSize: 80,
        fontWeight: '500',
        color: '#ff5722'
    },
    word: {
        alignItems: 'flex-start',
        // marginBottom: 40,
        
    },
    logo:{
        marginTop: 10,
       justifyContent:'center',
       alignItems: 'center'
    },
    imageLogo:{
        width: 150,
        height: 150
    }
});

//make this component available to the app
export default SignUpLogin;
