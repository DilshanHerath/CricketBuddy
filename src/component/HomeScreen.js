import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginAction } from '../action/TestAction';
import { connect } from 'react-redux';

const { width: WIDTH, height: height } = Dimensions.get('window');

class HomeScreen extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      'https://placeimg.com/640/640/beer',
    ];

    return (
      <View style={Styles.mainview}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '8%',
          }}
        >
          <Text>fkdsj</Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.loading.username,
  };
};

export default connect(mapStateToProps, {
  LoginAction,
})(HomeScreen);
const Styles = StyleSheet.create({
  mainview: {
    flex: 1,
    // backgroundColor: '#16185B',
  },

  advimg: {
    width: WIDTH - 50,
    height: height / 3.5,
    borderRadius: 21,
  },
});
