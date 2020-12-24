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
                        <View>
                            <Text style={{fontSize:18,color:'white'}}>Hello,</Text>
                            <Text style={{fontSize:34,color:'white',fontWeight:'bold'}}>Welcome to Cricket Buddy</Text>
                        </View>
                        <View style={{marginTop:'10%'}}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',width:WIDTH-30,alignItems:'center'}}>
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
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'15%'}}>
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{}}>
                                    <Text style={{fontSize: 18 ,color:'#FFFFFF', fontWeight:'bold',}}>English</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{}}>
                                    <Text style={{fontSize: 18 ,color:'#FFFFFF', fontWeight:'bold'}}>සිංහල</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{}}>
                                    <Text style={{fontSize: 18 ,color:'#FFFFFF', fontWeight:'bold'}}>தமிழ்</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                        <View style={{marginTop:'10%'}}>
                            <Text style={{color:'white',fontSize:18}}>By creating an account, you agree to our</Text>
                            <Text style={{fontWeight:'bold',color:'white',fontSize:19}}>Terms of Service and Privacy Policy</Text>
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
