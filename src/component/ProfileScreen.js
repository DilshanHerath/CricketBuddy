import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {changeComponent, changeIconComponent} from "../action/FooterAction";
import {RFPercentage} from 'react-native-responsive-fontsize';
import {font} from "../utill/Fonts";

const {width: WIDTH, height: height} = Dimensions.get('window');

class ProfileScreen extends Component {
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
                            {/*<Text style={{fontSize: 35, fontWeight: 'bold', color: 'white',fontFamily:font.MontserratBold}}>*/}
                            <Text  allowFontScaling={false} style={{
                                fontSize: 35,
                                fontWeight: 'bold',
                                color: 'white',
                                fontFamily: 'Montserrat-Bold'
                            }}>
                                Account Setting
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: '#0CE68B',
                                    fontFamily:'Montserrat-SemiBold',
                                }}
                            >
                                Change
                            </Text>
                        </View>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
                        <Image style={{width: 150, height: 150}} source={require('../assets/img/profilepicture.png')}/>
                        <View style={{marginTop: '3%', alignItems: 'center'}}>
                            <Text allowFontScaling={false} style={Styles.text1}>Sampath Priyankara</Text>
                            <Text  allowFontScaling={false} style={Styles.text2}>ID: 0001</Text>
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
                            <Text allowFontScaling={false} style={Styles.text2}>Email</Text>
                            <Text allowFontScaling={false} style={Styles.text3}>sampath@gmail.com</Text>
                        </View>
                        <View style={{width: '20%', marginTop: '3%'}}>
                            <TouchableOpacity style={Styles.btnchange}>
                                <Text allowFontScaling={false} style={Styles.text2}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: WIDTH / 1.1,
                            marginTop: '5%',
                            marginBottom: '5%',
                            marginLeft: '6%',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                            // justifyContent: 'space-between',
                        }}
                    >
                        <View style={{width: '20%'}}>
                            <Image style={Styles.icon4} source={require('../assets/icon/pass.png')}/>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text allowFontScaling={false} style={Styles.text2}>Password</Text>
                            <Text allowFontScaling={false} style={Styles.text3}>typeitheress</Text>
                        </View>
                        <View style={{width: '30%', alignItems: 'center'}}>
                            <Image style={Styles.icon2} source={require('../assets/icon/visibility.png')}/>
                        </View>
                        <View style={{width: '15%'}}>
                            <TouchableOpacity style={Styles.btnchange}>
                                <Text allowFontScaling={false} style={Styles.text2}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.line2}/>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: WIDTH / 1.1,
                            marginTop: '6%',
                            // marginBottom: '1%',
                            marginLeft: '6%',
                        }}
                    >
                        <View style={{width: '20%'}}>
                            <Image style={Styles.icon4} source={require('../assets/icon/cpass.png')}/>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text allowFontScaling={false} style={Styles.text2}>Confirm Password </Text>
                            <Text allowFontScaling={false} style={Styles.text3}>************</Text>
                        </View>
                        <View style={{width: '30%', alignItems: 'center'}}>
                            <Image style={Styles.icon5} source={require('../assets/icon/hide.png')}/>
                        </View>
                        <View style={{width: '15%'}}>
                            <TouchableOpacity style={Styles.btnchange}>
                                <Text allowFontScaling={false} style={Styles.text2}>Change</Text>
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
                            <Text allowFontScaling={false} style={Styles.text2}>Address</Text>
                            <Text allowFontScaling={false} style={Styles.text3}>100/5A Mahabuthgamuwa,
                                Angoda.</Text>
                        </View>
                        <View style={{width: '20%', marginTop: '3%'}}>
                            <TouchableOpacity style={Styles.btnchange}>
                                <Text allowFontScaling={false} style={Styles.text2}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentScreen: state.footer.currentScreen,
        changeIcon: state.footer.changeIcon,
    };
};

export default connect(mapStateToProps, {
    changeIconComponent,
    changeComponent,
})(ProfileScreen);

const Styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#1D219B',
        },
        text1: {
            // fontSize: RFPercentage(3),
            fontSize: 28,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
        },
        text2: {
            fontSize: 18,
            // fontSize: RFPercentage(2),
            color: 'white',
            fontFamily:'Poppins-Light',
        },
        text3: {
            fontSize: 20,
            // fontSize: RFPercentage(2),
            color: 'white',
            fontFamily:'Poppins-Bold',
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
            width: 15,
            height: 10,
            marginTop: '5%',
        },
        icon5: {
            width: 15,
            height: 12,
            // marginLeft:'40%',
            marginTop:'5%',
        },
        icon6: {
            width: 35,
            height: 38,
        },
    }
);
