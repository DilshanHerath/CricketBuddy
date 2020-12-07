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

const { width: WIDTH, height: height } = Dimensions.get('window');

const home = require('../assets/icon/home.png');
const home2 = require('../assets/icon/Shome.png');

const score = require('../assets/icon/score.png');
const Sscore = require('../assets/icon/Sscore.png');

const buddies = require('../assets/icon/buddies.png');
const Sbuddies = require('../assets/icon/Sbuddies.png');

const news = require('../assets/icon/news.png');
const Snews = require('../assets/icon/Snews.png');

const setting = require('../assets/icon/settings.png');
const Ssetting = require('../assets/icon/Ssetting.png');

class FooterScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.mainview}>
          <View style={Styles.imgview}>
            <TouchableOpacity
              onPress={() => {
                this.props.changeComponent('Home');
              }}
            >
              {this.props.currentScreen === 'Home' ? (
                <Image source={home2} style={Styles.normalimg} />
              ) : (
                <Image source={home} style={Styles.normalimg} />
              )}
              {/*<Image*/}
              {/*  style={Styles.normalimg}*/}
              {/*  source={this.props.currentScreen === 'Home' ? home2 : home}*/}
              {/*/>*/}
            </TouchableOpacity>
          </View>
          <View style={Styles.imgview}>
            <TouchableOpacity
              onPress={() => {
                this.props.changeComponent('Score');
              }}
            >
              <Image
                style={Styles.normalimg3}
                source={this.props.currentScreen === 'Score' ? Sscore : score}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.imgview}>
            <TouchableOpacity
              onPress={() => {
                this.props.changeComponent('Buddies');
              }}
            >
              <Image
                style={Styles.normalimg2}
                source={
                  this.props.currentScreen === 'Buddies' ? Sbuddies : buddies
                }
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.imgview}>
            <TouchableOpacity
              onPress={() => {
                this.props.changeComponent('News');
              }}
            >
              <Image
                style={Styles.normalimg}
                source={this.props.currentScreen === 'News' ? Snews : news}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.imgview}>
            <TouchableOpacity
              onPress={() => {
                this.props.changeComponent('Setting');
              }}
            >
              <Image
                style={Styles.normalimg}
                source={
                  this.props.currentScreen === 'Setting' ? Ssetting : setting
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainview: {
    // height: height / 5,
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: '#16185B',
    justifyContent: 'space-around',
  },
  normalimg: {
    width: 25,
    height: 22.5,
    // marginBottom: '4%',
  },
  normalimg2: {
    width: 28,
    height: 20,
    // marginBottom: '4%',
  },
  normalimg3: {
    width: 28,
    height: 20,
    // marginBottom: '4%',
    marginTop: '3%',
  },
  imgview: {
    marginTop: '5%',
    marginBottom: '3%',
  },
});
const mapStateToProps = (state) => {
  return {
    currentScreen: state.footer.currentScreen,
    changeIcon: state.footer.changeIcon,
  };
};

export default connect(mapStateToProps, {
  changeComponent,
})(FooterScreen);
