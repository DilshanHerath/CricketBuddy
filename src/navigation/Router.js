import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../component/HomeScreen';
import ScoreRanking from '../component/Footer';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeScreen} hideNavBar={true} />
          <Scene key="score" component={ScoreRanking} hideNavBar={true} initial />
        </Scene>
      </Router>
    );
  }
}
