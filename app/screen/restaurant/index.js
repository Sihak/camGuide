//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Picker
} from "react-native";
import { COLORS, APPEARANCES, DIMENSION } from "../../module";
import PrimaryHeader from "../../component/primaryHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SearchInput from "../../component/searchInput";
import testingData from "../../assets/testingData";
import TopTapView from "../restaurant/view/index"
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tittle: this.props.navigation.state.params
    };
  }
  render() {
    return (
      <View style={[{ flex: 1 }, styles.header]}>
        <View style={[styles.container]}>
          <Text style={styles.textHeader}>
            {(this.state.tittle = "Restaurant")}
          </Text>
        </View>
        <TopTapView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    color: "white",
    fontSize: 26,
    fontWeight: '500',
  },
  container: {
    justifyContent: 'center',
    alignItems: "center",
    padding: APPEARANCES.MARGIN,
    height: viewportHeight / 9,
    width: viewportWidth,
    backgroundColor: "#757575",
    paddingTop: DIMENSION(7)
  },
  
});

export default Restaurant;
