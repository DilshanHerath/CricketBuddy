import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const { width: WIDTH, height: height } = Dimensions.get('window');

export default class NewsScreen extends Component {
  render() {
    return (
        <ScrollView>
      <View style={Styles.container}>
        <View style={{ position: 'absolute' }}>
          <Image
            source={require('../assets/img/circle.png')}
            style={{
              width: WIDTH / 1.6,
              height: height / 2.5,
              transform: [{ rotate: '60deg' }],
              marginRight: '5%',
            }}
          />
        </View>
        <View style={{ marginLeft: '6%', marginTop: '5%' }}>
          <View style={{ marginTop: '5%' }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>
              News
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: '#0CE68B' }}
            >
              updates
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: '5%' }}>
          <View
            style={{
              width: WIDTH / 1.1,
              backgroundColor: '#151757',
              borderRadius: 20,
              zIndex: 10,
            }}
          >
            <View style={{ marginBottom: '8%', alignItems: 'center' }}>
              <Image
                style={{
                  width: WIDTH / 1.1,
                  height: height / 2.8,
                  borderRadius: 20,
                }}
                source={require('../assets/img/winner.png')}
              />
              <View style={{ alignItems: 'center', marginTop: '5%' }}>
                <Text
                  style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}
                >
                  CRICKET - SRI LANKA PREMIER
                </Text>
                <Text
                  style={{ fontSize: 23, color: 'white', fontWeight: 'bold' }}
                >
                  LEAGUE M8 BASNAHIRA V NAGENAHIRA
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#FD2C5A',
                    fontWeight: 'bold',
                    marginTop: '3%',
                  }}
                >
                  01 Nov 2020
                </Text>
                {/*<View style={{width:60,height:30,backgroundColor:'#FD2C5A',position:'absolute',marginTop:'-5%',zIndex:15,alignItems:'center',justifyContent:'center'}}>*/}
                {/*    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Winner</Text>*/}
                {/*</View>*/}
              </View>
            </View>
          </View>
        </View>
        <View style={{ position: 'absolute' }}>
          <Image
            source={require('../assets/img/circle.png')}
            style={{
              width: WIDTH,
              height: height / 1.5,
              // transform: [{ rotate: '140deg' }],
              marginLeft: '35%',
              marginTop: '50%',
            }}
          />
        </View>
          <View style={{alignItems:'center',marginTop:'6%',marginBottom:'7%'}}>
              <View style={{flexDirection:'row',width:WIDTH/1.1,backgroundColor:'#151757',borderRadius:20,justifyContent:'space-around'}}>
                  <View style={{marginTop:'5%',marginBottom:'5%'}}>
                      <Image style={{borderRadius:20,width:WIDTH/2.6,height:height/4.5}} source={require('../assets/img/out.png')}/>
                      <View style={{alignItems:'center',marginTop:'5%'}}>
                          <Text style={Styles.text4}>Mushfiqur carries</Text>
                          <Text style={Styles.text4}>Nagenahira home</Text>
                      </View>
                  </View>
                  <View style={{marginTop:'5%',marginBottom:'5%'}}>
                      <Image style={{borderRadius:20,width:WIDTH/2.6,height:height/4.5}} source={require('../assets/img/centuries.png')}/>
                      <View style={{alignItems:'center',marginTop:'5%'}}>
                          <Text style={Styles.text4}>CRICKET - SRI LANKA </Text>
                          <Text style={Styles.text4}>PREMIER LEAGUE</Text>
                      </View>
                  </View>
              </View>
          </View>
      </View>
        </ScrollView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D219B',
  },
  text1: {
    fontSize: 18,
    color: 'white',
  },
  text2: {
    fontSize: 15,
    color: 'white',
  },
  text3: {
    fontSize: 15,
    color: '#B9B9B9',
  },
    text4: {
        fontSize: 19,
        color: 'white',
        fontWeight:'bold',
    },
  line: {
    backgroundColor: '#0CE68B',
    width: WIDTH / 1.15,
    height: 1,
    marginLeft: '5%',
    marginTop: '5%',
  },
  line2: {
    backgroundColor: '#0CE68B',
    width: WIDTH / 1.15,
    height: 1,
    marginLeft: '5%',
    marginTop: '2%',
  },
  proimg: {
    width: 45,
    height: 45,
  },
});
