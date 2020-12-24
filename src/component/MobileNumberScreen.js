import React,{Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from "react-native-router-flux";
const {width: WIDTH, height: height} = Dimensions.get('window');
const onPress = () =>{}

export default class MobileNumberScreen extends Component{

    onFulfill = (code) => {
        Actions.otp();
    };

    render(){
        return(

            <ScrollView  style={Styles.mainview}>
                <View>
                    <View style={{alignItems:'center',marginTop:'25%'}}>
                        <Image style={{width:WIDTH/2,height:height/3}} source={require('../assets/img/logo.png')}/>
                        <View style={{width:WIDTH-40}}>
                            <Text allowFontScaling={false} style={{fontSize:18,color:'white', fontFamily:'Roboto-Regular'}}>Hello,</Text>
                            <Text allowFontScaling={false} style={{fontSize:28,color:'white',fontFamily:'Poppins-Bold'}}>Welcome to Cricket Buddy</Text>
                        </View>
                        <View style={{marginTop:'10%'}}>
                            <View style={{alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',width:WIDTH-30}}>
                                    <View>
                                        <TextInput
                                            placeholder={'Enter your mobile number'}
                                            placeholderTextColor="#fffff"
                                            style={{
                                                borderColor: '#C6C6C6',
                                                borderWidth: 1,
                                                backgroundColor: '#ffffff',
                                                paddingHorizontal: '4%',
                                                borderRadius: 9,
                                                width: WIDTH / 1.4,
                                                height: 55,
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <TouchableOpacity  style={{width:35,height:35}} onPress={this.onFulfill} >
                                            <Image source={require('../assets/icon/arrow.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'10%',width:WIDTH-30}}>
                                    <TouchableOpacity
                                        onPress={onPress}
                                        style={{}}>
                                        <Text  allowFontScaling={false} style={{fontSize: 15 ,color:'#FFFFFF',fontFamily:'Poppins-Bold'}}>English</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={onPress}
                                        style={{}}>
                                        <Text  allowFontScaling={false} style={{fontSize: 15 ,color:'#FFFFFF', fontWeight:'bold'}}>සිංහල</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={onPress}
                                        style={{}}>
                                        <Text allowFontScaling={false} style={{fontSize: 15 ,color:'#FFFFFF', fontWeight:'bold'}}>தமிழ்</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </View>
                        <View style={{marginTop:'10%',alignItems:'center',justifyContent:'center',marginBottom:'5%'}}>
                            <Text allowFontScaling={false} style={{color:'white',fontSize:15,fontFamily:'Poppins-Light'}}>By creating an account, you agree to our</Text>
                            <Text allowFontScaling={false} style={{fontWeight:'bold',color:'white',fontSize:16,fontFamily:'Poppins-Bold'}}>Terms of Service and Privacy Policy</Text>
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
        backgroundColor: '#16185B',
    },
});
