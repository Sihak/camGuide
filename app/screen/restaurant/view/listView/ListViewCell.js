//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// create a component
class ListViewCell extends Component {
  render() {
    const { title, email } = this.props;
    const { flatview, name, emailStyle,viewButton } = styles;
    return (
      <View style={flatview}>
        <View style = {{flexDirection: 'row'}}>
          <View >
            <Image
              resizeMethod={"resize"}
              resizeMode={"cover"}
              style={{ width: 75, height: 75, borderRadius: 5 }}
              source={require("../../../../assets/image/sample.jpg")}
            />
          </View>
          <View style = {{flexDirection: 'column', marginLeft: 10}}>
            <Text style={name}> {title} </Text>
            <Text style={emailStyle}> {email} </Text>
          </View>
          <TouchableOpacity style = {viewButton}>
            <Text style={{color: 'white'}}>
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  flatview: {
    position: 'relative',
    justifyContent: "center",
    padding: 10,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#f2f3f5',
  },
  name: {
    fontSize: 18
  },
  emailStyle: {
    color: "red"
  },
  viewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#ef6c00',
    borderRadius: 5,
    width: 60,
    height: 30,
    bottom: 0,
    right: 0,
  }
});

//make this component available to the app
export default ListViewCell;
