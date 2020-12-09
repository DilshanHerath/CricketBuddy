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

export default class MyBuddiesScreen extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <View style={{position: 'absolute'}}>
                    <Image
                        source={require('../assets/img/circle.png')}
                        style={{
                            width: WIDTH / 1.6,
                            height: height / 2.5,
                            transform: [{rotate: '60deg'}],
                            marginRight: '5%',
                        }}
                    />
                </View>
                <View style={{marginLeft: '6%', marginTop: '5%'}}>
                    <View style={{marginTop: '5%'}}>
                        <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white'}}>
                            My Buddies
                        </Text>
                    </View>
                    <View style={{}}>
                        <Text
                            style={{fontSize: 25, fontWeight: 'bold', color: '#0CE68B'}}
                        >
                           History
                        </Text>
                    </View>
                </View>
                <View style={{alignItems:'center',marginTop:'8%'}}>
                    <View style={{width:WIDTH-60,height:80,backgroundColor: '#474ED3',borderRadius:20,justifyContent:'space-around',flexDirection:'row'}}>
                       <View style={{marginTop:'3%'}}>
                           <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Kandurata Warriors</Text>
                       </View>
                        <View style={{marginTop:'3%'}}>
                            <Text style={{fontSize:15,color:'white'}}>08:00 a.m , 20th November 2020</Text>
                        </View>
                    </View>
                    <View style={{width:WIDTH-60,height:height/6.2,backgroundColor: '#FFFFFF',position:'absolute',zIndex:5,marginTop:'10.5%',flexDirection:'row',alignItems:'center'}}>
                        <View style={{flexDirection:'row',width:'50%',alignItems:'center',justifyContent:'center',height:height/6.5}}>
                            <View style={{width:'40%'}}>
                                <Image style={Styles.buddiesimg} source={require('../assets/img/mali.png')}/>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around',width:'60%'}}>
                               <View style={{backgroundColor:'red',width:35,height:60}}>
                                   <Text>R</Text>
                               </View>
                                <View style={{backgroundColor:'blue',width:35,height:60}}>
                                    <Text>R</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{width:1,backgroundColor:'#FD2C5A',height:height/6.7,marginTop:'-5%'}}/>
                        <View style={{flexDirection:'row',width:'50%',alignItems:'center',justifyContent:'center',height:height/6.5}}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',width:'60%'}}>
                                <View style={{backgroundColor:'red',width:35,height:60}}>
                                    <Text>R</Text>
                                </View>
                                <View style={{backgroundColor:'blue',width:35,height:60}}>
                                    <Text>R</Text>
                                </View>
                            </View>
                            <View style={{width:'40%'}}>
                                <Image style={Styles.buddiesimg} source={require('../assets/img/sanga.png')}/>
                            </View>

                        </View>
                    </View>
                    <View style={{width:WIDTH-60,height:80,backgroundColor: '#151757',borderRadius:20,marginTop:'12%',justifyContent:'space-around',flexDirection:'row'}}>
                        <View style={{marginTop:'13%',width:'75%'}}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#0CE68B',marginLeft:'8%'}}>Up Coming</Text>
                        </View>
                        <View style={{marginTop:'13%',flexDirection:'row',width:'20%'}}>
                            <Image source={require('../assets/icon/edit.png')}/>
                            <Text style={{fontSize:15,color:'#0CE68B',marginLeft:'3%'}}>edit</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D219B',
    },
    buddiesimg: {
        width: 70,
        height: 70,
    },
});
