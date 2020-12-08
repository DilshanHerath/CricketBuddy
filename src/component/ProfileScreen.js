import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const {width: WIDTH, height: height} = Dimensions.get('window');

export default class ProfileScreen extends Component {
    render() {
        return (
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
                            Account Setting
                        </Text>
                    </View>
                    <View style={{}}>
                        <Text
                            style={{fontSize: 25, fontWeight: 'bold', color: '#0CE68B'}}
                        >
                            Change
                        </Text>
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
                    <Image style={{width: 150, height: 150}} source={require('../assets/img/profilepicture.png')}/>
                    <View style={{marginTop: '3%', alignItems: 'center'}}>
                        <Text style={Styles.text1}>Sampath Priyankara</Text>
                        <Text style={Styles.text2}>ID: 0001</Text>
                    </View>
                </View>

                <View style={{position: 'absolute'}}>
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
                <View style={Styles.line}/>
                <View
                    style={{
                        flexDirection: 'row',
                        width: WIDTH / 1.1,
                        marginTop: '5%',
                        marginBottom: '10%',
                        marginLeft: '6%',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{marginTop: '2%', width: '15%'}}>
                        <Image style={Styles.icon} source={require('../assets/icon/email.png')}/>
                    </View>
                    <View style={{width: '60%'}}>
                        <Text style={Styles.text2}>Email</Text>
                        <Text style={Styles.text3}>sampath@gmail.com</Text>
                    </View>
                    <View style={{width: '20%',marginTop:'3%'}}>
                        <TouchableOpacity style={Styles.btnchange}>
                            <Text style={Styles.text2}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: WIDTH / 1.1,
                        marginTop: '5%',
                        marginBottom: '10%',
                        marginLeft: '6%',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{ width: '15%'}}>
                        <Image style={Styles.icon3} source={require('../assets/icon/pass.png')}/>
                    </View>
                    <View style={{width: '60%',flexDirection:'row'}}>
                       <View style={{}}>
                           <Text style={Styles.text2}>Password</Text>
                           <Text style={Styles.text3}>typeitheress</Text>
                       </View>
                        <View styel={{justifyContent:'center',alignItems:'center'}}>
                            <Image style={Styles.icon2} source={require('../assets/icon/visibility.png')}/>
                        </View>
                    </View>
                    <View style={{width: '20%',marginTop:'3%'}}>
                        <TouchableOpacity style={Styles.btnchange}>
                            <Text style={Styles.text2}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.line2}/>
                <View
                    style={{
                        flexDirection: 'row',
                        width: WIDTH / 1.1,
                        marginTop: '5%',
                        // marginBottom: '4%',
                        marginLeft: '6%',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{ width: '15%'}}>
                        <Image style={Styles.icon4} source={require('../assets/icon/cpass.png')}/>
                    </View>
                    <View style={{width: '60%',flexDirection:'row'}}>
                        <View style={{}}>
                            <Text style={Styles.text2}>Confirm Password </Text>
                            <Text style={Styles.text3}>************</Text>
                        </View>
                        <View styel={{justifyContent:'center',alignItems:'center'}}>
                            <Image style={Styles.icon5} source={require('../assets/icon/hide.png')}/>
                        </View>
                    </View>
                    <View style={{width: '20%',marginTop:'3%'}}>
                        <TouchableOpacity style={Styles.btnchange}>
                            <Text style={Styles.text2}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.line}/>
                <View
                    style={{
                        flexDirection: 'row',
                        width: WIDTH / 1.1,
                        marginTop: '5%',
                        marginBottom: '10%',
                        marginLeft: '6%',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{marginTop: '3%', width: '15%'}}>
                        <Image style={Styles.icon6} source={require('../assets/icon/home.png')}/>
                    </View>
                    <View style={{width: '60%'}}>
                        <Text style={Styles.text2}>Address</Text>
                        <Text style={Styles.text3}>100/5A Mahabuthgamuwa,
                            Angoda.</Text>
                    </View>
                    <View style={{width: '20%',marginTop:'3%'}}>
                        <TouchableOpacity style={Styles.btnchange}>
                            <Text style={Styles.text2}>Change</Text>
                        </TouchableOpacity>
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
            fontSize: 28,
            color: 'white',
            fontWeight: 'bold',
        },
        text2: {
            fontSize: 18,
            color: 'white',
        },
        text3: {
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
        },
        text4: {
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
        },
        line: {
            backgroundColor: 'white',
            width: WIDTH,
            height: 1,
            marginTop: '5%',
        },
    line2: {
        backgroundColor: 'white',
        width: WIDTH,
        height: 1,
        // marginTop: '5%',
    },
        icon: {
            width: 35,
            height: 25,
        },
    icon3: {
        width: 35,
        height: 40,
    },
    icon4: {
        width: 38,
        height: 40,
    },
        btnchange: {
            width: 80,
            height: 30,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'white',
        },
        icon2: {
            width: 13,
            height: 10,
            marginLeft:'50%',
            marginTop:'8%',
        },
    icon5: {
        width: 13,
        height: 10,
        marginLeft:'40%',
        marginTop:'8%',
    },
    icon6: {
        width: 35,
        height: 38,
    },
    }
);

/*<View
                    style={{
                        flexDirection: 'row',
                        width: WIDTH / 1.1,
                        marginTop: '5%',
                        marginBottom: '10%',
                    }}
                >
                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: '8%',
                            }}
                        >
                            <View>
                                <Image
                                    style={Styles.icon}
                                    source={require('../assets/icon/email.png')}
                                />
                            </View>
                            <View style={{marginLeft: '5%'}}>
                                <Text style={Styles.text2}>Email</Text>
                                <Text style={Styles.text3}>sampath@gmail.com</Text>
                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{alignItems: 'center'}}>
                                <TouchableOpacity style={{backgroundColor:'transparent',borderRadius:50,borderWidth:2,borderColor:'white',justifyContent:'center',alignItems:'center'}}>
                                    <Text>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>*/
