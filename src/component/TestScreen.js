import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { changeComponent } from '../action/FooterAction';
import { connect } from 'react-redux';
import { Button } from 'native-base';
import {RFPercentage} from "react-native-responsive-fontsize";
import {font} from "../utill/Fonts";

const { width: WIDTH, height: height } = Dimensions.get('window');

const home = require('../assets/icon/home.png');
const home2 = require('../assets/icon/Shome.png');

const score = require('../assets/icon/Sscore.png');
const buddies = require('../assets/icon/buddies.png');
const news = require('../assets/icon/news.png');
const Snews = require('../assets/icon/Snews.png');

const setting = require('../assets/icon/settings.png');

class TestScreen extends Component {
  render() {
    return (
      <View style={{width: WIDTH/1.1,flexDirection:'row'}}>
<View style={{width:'15%',backgroundColor:'black'}}></View>
<View style={{width:'50%'}}>
    <Text style={Styles.text2}>Confirm Password </Text>
    <Text style={Styles.text3}>************</Text>
</View>
<View style={{width:'20%',backgroundColor:'red'}}></View>
<View style={{width:'15%',backgroundColor:'green'}}></View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentScreen: state.footer.currentScreen,
  };
};

const Styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#1D219B',
        },
        text1: {
            fontSize: RFPercentage(3),
            // fontSize: 28,
            color: 'white',
            fontWeight: 'bold',
            fontFamily:font.PoppinsBold,
        },
        text2: {
            // fontSize: 18,
            fontSize: RFPercentage(2),
            color: 'white',
            fontFamily:font.PoppinsLight
        },
        text3: {
            // fontSize: 20,
            fontSize: RFPercentage(2),
            color: 'white',
            fontWeight: 'bold',
            fontFamily:font.PoppinsBold,
        },
        text4: {
            // fontSize: 16,
            fontSize: RFPercentage(2),
            color: 'white',
            fontWeight: 'bold',
        },
        line: {
            backgroundColor: 'white',
            width: WIDTH,
            height: 1,
            marginTop: '5%',
        },
        line2: {
            backgroundColor: 'white',
            width: WIDTH,
            height: 1,
        },
        icon: {
            width: 35,
            height: 25,
        },
        icon3: {
            width: 35,
            height: 40,
        },
        icon4: {
            width: 38,
            height: 40,
        },
        btnchange: {
            width: 80,
            height: 30,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'white',
        },
        icon2: {
            width: 13,
            height: 10,
            marginLeft:'50%',
            marginTop:'8%',
        },
        icon5: {
            width: 13,
            height: 10,
            // marginLeft:'40%',
            // marginTop:'8%',
        },
        icon6: {
            width: 35,
            height: 38,
        },
    }
);

export default connect(mapStateToProps, {
  changeComponent,
})(TestScreen);
