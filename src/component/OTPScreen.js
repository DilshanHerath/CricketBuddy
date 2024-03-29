import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {Actions} from 'react-native-router-flux';
const {width: WIDTH, height: height} = Dimensions.get('window');
const onPress = () => {
};

export default class OTPScreen extends Component {

    onFulfill = (code) => {
       Actions.account();
    };

    render() {
        return (

            <ScrollView style={Styles.mainview}>
                <View>
                   <View style={{alignItems:'center'}}>
                       <View style={{backgroundColor:'#232883',height:400,borderRadius:200,alignItems:'center',justifyContent:'center',marginTop:'-25%',width:WIDTH*1.2}}>
                           <View style={{marginTop:'30%'}}>
                               <Image style={{width: WIDTH / 2, height: height / 3}}
                                      source={require('../assets/img/logo.png')}/>
                           </View>
                       </View>
                   </View>
                    <View style={{alignItems: 'center',marginTop:'10%'}}>
                        <View>
                            <Text allowFontScaling={false} style={{fontSize: 15,fontFamily:'Montserrat-Regular'}}>Phone Verification</Text>
                            <Text allowFontScaling={false} style={{fontSize: 25, fontFamily:'Poppins-Bold'}}>Enter your OTP code
                                below</Text>
                        </View>
                        <View style={{marginTop: '10%'}}>
                            <View style={Styles.codeInputView}>
                               <View>
                                   <CodeInput
                                       ref="codeInputRef1"
                                       secureTextEntry
                                       className={'border-b'}
                                       size={30}
                                       inputPosition="center"
                                       activeColor={'black'}
                                       inactiveColor={'#C9C9C9'}
                                       codeLength={4}
                                       space={35}
                                       keyboardType="numeric"
                                       containerStyle={{}}
                                       onFulfill={(code) => this.onFulfill(code)}
                                   />
                               </View>
                               <View style={{}}>
                                  <TouchableOpacity  style={{width:35,height:35}} onPress={this.onFulfill} >
                                      <Image source={require('../assets/icon/arrow.png')}/>
                                  </TouchableOpacity>
                               </View>
                            </View>
                            <View style={{flexDirection: 'row',marginTop:'5%',alignItems:'center',marginBottom:'20%'}}>
                               <Text allowFontScaling={false} style={{fontSize:15,fontFamily:'Poppins-Light',marginTop:'1%'}}>Resend Code in </Text>
                               <Text allowFontScaling={false} style={{fontSize:15,fontWeight:'bold',fontFamily:'Poppins-Bold'}}>10 seconds</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
    mainview: {
        flex: 1,
    },
    codeInputView: {
        flexDirection:'row',
        justifyContent:'space-around',
        width: WIDTH / 1.1,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        // justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
});
