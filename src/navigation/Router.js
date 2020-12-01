import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../component/HomeScreen';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="first" component={HomeScreen} hideNavBar={true} initial />
        </Scene>
      </Router>
    );
  }
}
