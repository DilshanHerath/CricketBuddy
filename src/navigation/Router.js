import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../component/HomeScreen';
import Footer from '../component/FooterScreen';
import TestS from '../component/TestScreen';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeScreen} hideNavBar={true} />
          <Scene key="score" component={Footer} hideNavBar={true} initial />
          <Scene key="test" component={TestS} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
