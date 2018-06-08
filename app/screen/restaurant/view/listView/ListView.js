//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListViewCell from './ListViewCell'
// create a component
class ListView extends Component {
  state = {
    users: [
      {
        name: "Proxima Midnight",
        email: "proxima@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus@appdividend.com"
      },
      {
        name: "Proxima Midnight",
        email: "proxima1@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony1@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf1@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos1@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant1@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki1@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus1@appdividend.com"
      }
    ]
  };

  async componentDidMount() {
    this.setState({ users });
  }

  render() {
    return (
      <View style = {{backgroundColor: 'rgba(156, 156, 156, 0.3)'}}>
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListViewCell
            title = {item.name}
            email = {item.email}
            />
          )}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  }
});

//make this component available to the app
export default ListView;
