import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import MapScreenView from './mapView/MapScreen';
import ListView  from './listView/ListView';
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <ListView/>;
const SecondRoute = () => <MapScreenView/>;

export default class TopTapView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'List View' },
      { key: 'second', title: 'Map View' },
     
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
  style = {{backgroundColor: '#ef6c00'}}
  
  {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});