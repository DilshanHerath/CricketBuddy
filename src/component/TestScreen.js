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
      <View style={{ backgroundColor: 'blue', marginTop: '10%',flexDirection:'row',justifyContent:'space-around' }}>
        <TouchableOpacity
          onPress={() => {
            alert('You tapped the button!');
          }}
        >
          <Image
            style={{width:32,height:20}}
            source={home2}
          />
        </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                  alert('You tapped the button!');
              }}
          >
              <Image
                  style={{width:45,height:28}}
                  source={home2}
              />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                  alert('You tapped the button!');
              }}
          >
              <Image
                  style={{width:45,height:28}}
                  source={score}
              />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                  alert('You tapped the button!');
              }}
          >
              <Image
                  style={{width:45,height:28}}
                  source={home2}
              />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                  alert('You tapped the button!');
              }}
          >
              <Image
                  style={{width:45,height:28}}
                  source={home2}
              />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                  alert('You tapped the button!');
              }}
          >
              <Image
                  style={{width:45,height:28}}
                  source={home2}
              />
          </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentScreen: state.footer.currentScreen,
  };
};

export default connect(mapStateToProps, {
  changeComponent,
})(TestScreen);
