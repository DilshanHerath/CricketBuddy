import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../component/HomeScreen';
import Footer from '../component/FooterScreen';
import TestS from '../component/TestScreen';
import ScoreScreen from '../component/ScoreRankingScreen';
import NewsScreen from '../component/NewsScreen';
import Profile from '../component/ProfileScreen';
import MyBuddies from '../component/MyBuddiesScreen';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeScreen} hideNavBar={true}  />
          <Scene key="news" component={NewsScreen} hideNavBar={true} />
          <Scene key="profile" component={Profile} hideNavBar={true}  />
          <Scene key="footer" component={Footer} hideNavBar={true} />
          <Scene key="test" component={TestS} hideNavBar={true} />
          <Scene key="scoreRankin" component={ScoreScreen} hideNavBar={true} />
          <Scene key="mybuddies" component={MyBuddies} hideNavBar={true} initial />
        </Scene>
      </Router>
    );
  }
}
