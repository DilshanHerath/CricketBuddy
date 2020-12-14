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
           <ScrollView>
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
                   <View style={{alignItems:'center',marginTop:'6%'}}>
                       <View style={{width:WIDTH-50,height:80,backgroundColor: '#474ED3',borderRadius:20,justifyContent:'space-around',flexDirection:'row'}}>
                           <View style={{marginTop:'3%'}}>
                               <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Kandurata Warriors</Text>
                           </View>
                           <View style={{marginTop:'3%'}}>
                               <Text style={{fontSize:15,color:'white'}}>08:00 a.m , 20th November 2020</Text>
                           </View>
                       </View>
                       <View style={{width:WIDTH-50,height:height/6.8,backgroundColor: '#FFFFFF',position:'absolute',zIndex:5,marginTop:'10.5%',flexDirection:'row'}}>
                           <View style={{flexDirection:'row',width:'50%',justifyContent:'space-around',height:height/6.5,alignItems:'center'}}>
                               <View style={{width:'40%',marginTop:'-5%'}}>
                                   <Image style={Styles.buddiesimg} source={require('../assets/img/mali.png')}/>
                               </View>
                               <View style={{width:'60%'}}>
                                   <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                       <View style={{backgroundColor:'#06C0DA',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>R</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                       <View style={{backgroundColor:'#232883',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>W</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                   </View>
                                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'3%'}}>
                                       <Text style={{fontWeight:'bold',color:'#232883',fontSize:18}}>POINTS</Text>
                                   </View>
                               </View>

                           </View>
                           <View style={{width:1,backgroundColor:'#FD2C5A',height:height/7.3,marginTop:'2%'}}/>

                           <View style={{flexDirection:'row',width:'50%',height:height/6.5,alignItems:'center',justifyContent:'space-around'}}>
                               <View style={{width:'60%'}}>
                                   <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                       <View style={{backgroundColor:'#06C0DA',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>R</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                       <View style={{backgroundColor:'#232883',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>W</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                   </View>
                                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'3%'}}>
                                       <Text style={{fontWeight:'bold',color:'#232883',fontSize:18}}>POINTS</Text>
                                   </View>
                               </View>
                               <View style={{width:'40%',marginTop:'-5%'}}>
                                   <Image style={Styles.buddiesimg} source={require('../assets/img/sanga.png')}/>
                               </View>

                           </View>
                       </View>
                       <View style={{width:WIDTH-50,height:80,backgroundColor: '#151757',borderRadius:20,marginTop:'9%',justifyContent:'space-around',flexDirection:'row'}}>
                           <View style={{marginTop:'13%',width:'75%'}}>
                               <Text style={{fontSize:18,fontWeight:'bold',color:'#0CE68B',marginLeft:'8%'}}>Up Coming</Text>
                           </View>
                           <View style={{marginTop:'13%',flexDirection:'row',width:'20%'}}>
                               <Image source={require('../assets/icon/edit.png')}/>
                               <Text style={{fontSize:15,color:'#0CE68B',marginLeft:'3%'}}>edit</Text>
                           </View>
                       </View>

                   </View>
                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
                       <View style={Styles.line} />
                   </View>
                   <View style={{alignItems:'center',marginTop:'6%'}}>
                       <View style={{width:WIDTH-50,height:80,backgroundColor: '#474ED3',borderRadius:20,justifyContent:'space-around',flexDirection:'row'}}>
                           <View style={{marginTop:'3%'}}>
                               <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Kandurata Warriors</Text>
                           </View>
                           <View style={{marginTop:'3%'}}>
                               <Text style={{fontSize:15,color:'white'}}>08:00 a.m , 20th November 2020</Text>
                           </View>
                       </View>
                       <View style={{width:WIDTH-50,height:height/6.8,backgroundColor: '#FFFFFF',position:'absolute',zIndex:5,marginTop:'10.5%',flexDirection:'row'}}>
                           <View style={{flexDirection:'row',width:'50%',justifyContent:'space-around',height:height/6.5,alignItems:'center'}}>
                               <View style={{width:'40%',marginTop:'-5%'}}>
                                   <Image style={Styles.buddiesimg} source={require('../assets/img/mali.png')}/>
                               </View>
                               <View style={{width:'60%'}}>
                                   <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                       <View style={{backgroundColor:'#06C0DA',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>R</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                       <View style={{backgroundColor:'#232883',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>W</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                   </View>
                                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'3%'}}>
                                       <Text style={{fontWeight:'bold',color:'#232883',fontSize:18}}>POINTS</Text>
                                   </View>
                               </View>

                           </View>
                           <View style={{width:1,backgroundColor:'#FD2C5A',height:height/7.3,marginTop:'2%'}}/>

                           <View style={{flexDirection:'row',width:'50%',height:height/6.5,alignItems:'center',justifyContent:'space-around'}}>
                               <View style={{width:'60%'}}>
                                   <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                       <View style={{backgroundColor:'#06C0DA',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>R</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                       <View style={{backgroundColor:'#232883',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>W</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                   </View>
                                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'3%'}}>
                                       <Text style={{fontWeight:'bold',color:'#232883',fontSize:18}}>POINTS</Text>
                                   </View>
                               </View>
                               <View style={{width:'40%',marginTop:'-5%'}}>
                                   <Image style={Styles.buddiesimg} source={require('../assets/img/sanga.png')}/>
                               </View>

                           </View>
                       </View>
                       <View style={{width:WIDTH-50,height:80,backgroundColor: '#151757',borderRadius:20,marginTop:'9%',justifyContent:'space-around',flexDirection:'row'}}>
                           <View style={{marginTop:'13%',width:'75%'}}>
                               <Text style={{fontSize:18,fontWeight:'bold',color:'#0CE68B',marginLeft:'8%'}}>Up Coming</Text>
                           </View>
                           <View style={{marginTop:'13%',flexDirection:'row',width:'20%'}}>
                               <Image source={require('../assets/icon/edit.png')}/>
                               <Text style={{fontSize:15,color:'#0CE68B',marginLeft:'3%'}}>edit</Text>
                           </View>
                       </View>

                   </View>
                   <View style={{ position: 'absolute' }}>
                       <Image
                           source={require('../assets/img/circle.png')}
                           style={{
                               width: WIDTH,
                               height: height / 1.5,
                               transform: [{ rotate: '20deg' }],
                               // marginLeft: '35%',
                               marginTop:'70%',
                           }}
                       />
                   </View>
                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
                       <View style={Styles.line} />
                   </View>
                   <View style={{alignItems:'center',marginTop:'6%',marginBottom:'10%'}}>
                       <View style={{width:WIDTH-50,height:80,backgroundColor: '#474ED3',borderRadius:20,justifyContent:'space-around',flexDirection:'row'}}>
                           <View style={{marginTop:'3%'}}>
                               <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Kandurata Warriors</Text>
                           </View>
                           <View style={{marginTop:'3%'}}>
                               <Text style={{fontSize:15,color:'white'}}>08:00 a.m , 20th November 2020</Text>
                           </View>
                       </View>
                       <View style={{width:WIDTH-50,height:height/6.8,backgroundColor: '#FFFFFF',position:'absolute',zIndex:5,marginTop:'10.5%',flexDirection:'row'}}>
                           <View style={{flexDirection:'row',width:'50%',justifyContent:'space-around',height:height/6.5,alignItems:'center'}}>
                               <View style={{width:'40%',marginTop:'-5%'}}>
                                   <Image style={Styles.buddiesimg} source={require('../assets/img/mali.png')}/>
                               </View>
                               <View style={{width:'60%'}}>
                                   <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                       <View style={{backgroundColor:'#06C0DA',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>R</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                       <View style={{backgroundColor:'#232883',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>W</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                   </View>
                                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'3%'}}>
                                       <Text style={{fontWeight:'bold',color:'#232883',fontSize:18}}>POINTS</Text>
                                   </View>
                               </View>

                           </View>
                           <View style={{width:1,backgroundColor:'#FD2C5A',height:height/7.3,marginTop:'2%'}}/>

                           <View style={{flexDirection:'row',width:'50%',height:height/6.5,alignItems:'center',justifyContent:'space-around'}}>
                               <View style={{width:'60%'}}>
                                   <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                       <View style={{backgroundColor:'#06C0DA',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>R</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                       <View style={{backgroundColor:'#232883',width:30,height:50,alignItems:'center'}}>
                                           <Text style={Styles.text1}>W</Text>
                                           <Text style={Styles.text2}>0</Text>
                                       </View>
                                   </View>
                                   <View style={{justifyContent:'center',alignItems:'center',marginTop:'3%'}}>
                                       <Text style={{fontWeight:'bold',color:'#232883',fontSize:18}}>POINTS</Text>
                                   </View>
                               </View>
                               <View style={{width:'40%',marginTop:'-5%'}}>
                                   <Image style={Styles.buddiesimg} source={require('../assets/img/sanga.png')}/>
                               </View>

                           </View>
                       </View>
                       <View style={{width:WIDTH-50,height:80,backgroundColor: '#151757',borderRadius:20,marginTop:'9%',justifyContent:'space-around',flexDirection:'row'}}>
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
           </ScrollView>

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
        height: 78,
    },
    line: {
        backgroundColor: '#FFFFFF',
        width: WIDTH / 1.6,
        height: 2,
        marginLeft: '5%',
        marginTop: '5%',
    },
    text1: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold',
    },
    text2: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold',
        // marginTop:'15%',
    },
});
