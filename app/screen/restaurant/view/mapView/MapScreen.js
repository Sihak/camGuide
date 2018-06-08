//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// create a component
class MapScreenView extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text> Hello Map </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

//make this component available to the app
export default MapScreenView;
