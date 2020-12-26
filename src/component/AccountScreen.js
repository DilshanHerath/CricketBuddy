import React, {Component, useState} from 'react';
import {Avatar} from 'react-native-elements';
import {
    Dimensions,
    Image,
    number,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP as hp2dp, widthPercentageToDP as wp2dp,} from 'react-native-responsive-screen';
import {Actions} from "react-native-router-flux";

const {width: WIDTH, height: height} = Dimensions.get('window');

class AccountScreen extends Component{

    onFulfill = (code) => {
        Actions.mainCon();
        // alert('ok');
    };

    render(){

        return (

          <ScrollView>
              <View style={styles.container}>
                  {/*<View style={{alignItems:'center',marginTop:'5%'}}>
                <Text style={{fontSize: 30, color: 'white', fontWeight: "bold",marginTop:'5%'}}>
                    Create Your Account
                </Text>
            </View>*/}
                  <View style={{alignItems: 'center'}}>
                      <View style={{
                          backgroundColor: '#232883',
                          height: 330,
                          borderRadius: 200,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '-25%',
                          width: WIDTH * 1.2
                      }}>
                          <View style={{marginTop: '10%'}}>
                              <Text allowFontScaling={false} style={{fontSize: 30, color: 'white', fontFamily:'Poppins-Bold'}}>
                                  Create Your Account
                              </Text>
                          </View>
                      </View>
                  </View>
                  <View style={styles.avatar}>
                      <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',}}
                              style={{height: 150, width: 150}}
                              size='xlarge'
                              title="HA"
                              rounded>
                      </Avatar>
                  </View>
                  <View style={{alignItems: 'center'}}>
                      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
                          <Text allowFontScaling={false} style={styles.username}>Sampath Priyankara</Text>
                          <Text allowFontScaling={false} style={styles.userid}>ID: 0001</Text>
                      </View>

                      <View>
                          <View style={{flexDirection: 'row', marginTop: '5%', marginLeft: '2%'}}>
                              <View style={{marginTop: '2%'}}>
                                  <Image style={{width: 40, height: 30}} source={require('../assets/icon/message.png')}/>
                              </View>
                              <View style={styles.openDialogView}>
                                  <Text allowFontScaling={false} style={{fontSize: 12, color: '#D6D6D6', marginLeft: '2%',fontFamily:'Poppins-Light'}}>{"Email"}</Text>
                                  <View>
                                      <TextInput
                                          style={styles.phoneInputStyle} placeholder="malaka@gmail.com"
                                          value={number}
                                          secureTextEntry={false}
                                          placeholderTextColor={'#303030'}
                                      >
                                      </TextInput>
                                  </View>
                              </View>
                          </View>
                          <View style={{flexDirection: 'row', marginTop: '5%', marginLeft: '2%'}}>
                              <View style={{}}>
                                  <Image style={{width: 42, height: 46}} source={require('../assets/icon/password.png')}/>
                              </View>
                              <View style={styles.openDialogView}>
                                  <Text allowFontScaling={false} style={{fontSize: 12, color: '#D6D6D6', marginLeft: '2%',fontFamily:'Poppins-Light'}}>{"Password"}</Text>
                                  <View>
                                      <TextInput
                                          style={styles.phoneInputStyle} placeholder="typeitheress"
                                          value={number}
                                          secureTextEntry={false}
                                          placeholderTextColor={'#303030'}
                                      >

                                      </TextInput>
                                  </View>
                              </View>
                          </View>
                          <View style={{flexDirection: 'row', marginTop: '5%', marginLeft: '2%'}}>
                              <View style={{}}>
                                  <Image style={{width: 44, height: 46}} source={require('../assets/icon/login.png')}/>
                              </View>
                              <View style={styles.openDialogView}>
                                  <Text
                                      allowFontScaling={false}
                                      style={{fontSize: 12, color: '#D6D6D6', marginLeft: '2%',fontFamily:'Poppins-Light'}}>{"Confirm Password "}</Text>
                                  <View>
                                      <TextInput
                                          style={styles.phoneInputStyle} placeholder="**************"
                                          value={number}
                                          secureTextEntry={false}
                                          placeholderTextColor={'#303030'}
                                      >

                                      </TextInput>
                                  </View>
                              </View>
                          </View>

                      </View>
                  </View>

                  <View style={styles.startgame}>
                      <Text allowFontScaling={false} style={{marginTop: 7,marginLeft:'5%', fontSize: 22, fontWeight: 'bold', color: '#FD2C5A',fontFamily:'Poppins-Bold'}}>Start Game</Text>
                      <TouchableOpacity
                          onPress={this.onFulfill}
                          style={{
                              // borderColor: 'rgba(0,0,0,0.2)',
                              // marginLeft: '5%',
                              marginBottom:'15%',
                              // alignItems: 'center',
                              // justifyContent: 'center',
                              width: 40,
                              height: 40,
                              // backgroundColor: '#FD2C5A',
                              // borderRadius: 50
                          }}>
                          <Image source={require('../assets/icon/arrow.png')}/>
                      </TouchableOpacity>
                  </View>
              </View>
          </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    avatar: {
        marginTop: '-20%',
        alignItems: 'center',
    },
    openDialogView: {
        marginLeft: '3%',
        // justifyContent: 'center',
    },
    phoneInputStyle: {
        // flex: 1,
        marginTop: '-2%',
        height: 60,
        width: WIDTH / 1.4,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',

    },

    userbox: {
        alignContent: 'center',
        // marginTop: hp2dp('27%')

    },

    username: {
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
    },
    userid: {
        fontSize: 17,
        fontFamily: 'Poppins-Light',
    },

    startgame: {
        flexDirection:'row',
        marginLeft:'40%',
        // marginBottom:'10%',
        // marginTop: hp2dp('80%'),
        // marginLeft: wp2dp('60%')
        justifyContent:'space-around',

    },


});

export default AccountScreen
