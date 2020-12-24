import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../component/HomeScreen';
import TestS from '../component/MobileNumberScreen';
import Account from '../component/AccountScreen';
import OTP from '../component/OTPScreen';
import ScoreScreen from '../component/ScoreRankingScreen';
import NewsScreen from '../component/NewsScreen';
import Profile from '../component/ProfileScreen';
import MyBuddies from '../component/MyBuddiesScreen';
import Footerr from '../component/Footerrr';
import MainContainer from '../component/MainContainer';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeScreen} hideNavBar={true} />
          <Scene key="news" component={NewsScreen} hideNavBar={true} />
          <Scene key="profile" component={Profile} hideNavBar={true}  />
          <Scene key="footer" component={Footerr} hideNavBar={true} />
          <Scene key="test" component={TestS} hideNavBar={true} initial/>
          <Scene key="account" component={Account} hideNavBar={true}/>

          <Scene key="otp" component={OTP} hideNavBar={true} />
          <Scene key="scoreRankin" component={ScoreScreen} hideNavBar={true} />
          <Scene key="mybuddies" component={MyBuddies} hideNavBar={true} />
          <Scene key="mainCon" component={MainContainer} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
