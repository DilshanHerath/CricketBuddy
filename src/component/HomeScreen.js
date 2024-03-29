import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {LoginAction} from '../action/TestAction';
import {changeComponent, changeIconComponent} from '../action/FooterAction';
import {RFValue,RFPercentage} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {font} from '../utill/Fonts';

const {width: WIDTH, height: height} = Dimensions.get('window');
const video = require('../assets/img/ad.png');

const data = [
    {
        label: 'data 1',
    },
    {
        label: 'data 2',
    },
];

class HomeScreen extends Component {
    state = {
        username: '',
        password: '',
    };

    render() {
        return (
            <ScrollView>
                <View style={Styles.mainview}>
                    <View style={{marginTop: '7%', position: 'absolute'}}>
                        <Image
                            source={require('../assets/img/circle.png')}
                            style={{
                                width: WIDTH,
                                height: height / 1.5,
                                transform: [{rotate: '20deg'}],
                                marginLeft: '35%',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            marginTop: '8%',
                        }}
                    >
                        <View
                            style={{alignItems: 'center', justifyContent: 'center'}}
                        >
                            <ScrollView
                                style={{
                                    width: WIDTH - 30,
                                    marginBottom: '8%',
                                }}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                pagingEnabled
                            >
                                <TouchableOpacity>
                                    <Image source={video} style={Styles.videoImageStyle}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image source={video} style={Styles.videoImageStyle}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image source={video} style={Styles.videoImageStyle}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image source={video} style={Styles.videoImageStyle}/>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 25,
                                    borderColor: '#0CE68B',
                                    width: WIDTH - 30,
                                    height: height / 6.5,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: WIDTH / 2.5,
                                    }}
                                >
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt1}>MY POINTS</Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            width: WIDTH / 4.5,
                                        }}
                                    >
                                        <View style={{
                                            backgroundColor: '#06C0DA',
                                            width: 33,
                                            height: 50,
                                            alignItems: 'center'
                                        }}>
                                            <Text allowFontScaling={false} style={Styles.text1}>R</Text>
                                            <Text allowFontScaling={false} style={Styles.text2}>130</Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: '#FD2C5A',
                                            width: 33,
                                            height: 50,
                                            alignItems: 'center'
                                        }}>
                                            <Text allowFontScaling={false} style={Styles.text1}>W</Text>
                                            <Text allowFontScaling={false} style={Styles.text2}>5</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width: 1, backgroundColor: '#0CE68B'}}/>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: WIDTH / 2.5,
                                    }}
                                >
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt1}>YOUR BUDDIES</Text>
                                    <View
                                        style={{
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            width: WIDTH / 3.8,
                                        }}
                                    >
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/img/sanga.png')}
                                                style={Styles.buddiesimg}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/img/mali.png')}
                                                style={Styles.buddiesimg}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: '6%', marginLeft: '5%'}}>
                            <View>
                                <Text
                                    allowFontScaling={false}
                                    style={{ fontSize: 35, color: 'white', fontFamily:'Montserrat-Bold'}}
                                >
                                    Matches
                                </Text>
                            </View>
                            <View style={{marginTop: '2%', marginBottom: '8%'}}>
                                <Text
                                    allowFontScaling={false}
                                    style={{
                                        color: '#0CE68B',
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        fontFamily:'Montserrat-SemiBold',
                                    }}
                                >
                                    Today's Matches
                                </Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: '2%'}}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                pagingEnabled
                                style={{}}
                            >
                                <View style={{marginHorizontal: 12}}>
                                    <LinearGradient
                                        colors={['#C31339', '#FD2C5A']}
                                        style={{borderRadius: 20, width: WIDTH - 40}}
                                    >
                                        <View style={{marginLeft: '4%', marginTop: '7%'}}>
                                            <View>
                                                <Text allowFontScaling={false}
                                                    style={{
                                                        fontSize: 19,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-SemiBold',
                                                    }}
                                                >
                                                    Nagenahira Nagas Vs Ruhuna Royals
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 15,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Regular',
                                                    }}
                                                >
                                                    08:00 a.m , 20th November 2020{' '}
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 15,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Regular',
                                                    }}
                                                >
                                                    R. Premadasa International Cricket Stadium
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 23,
                                                        color: '#0CE68B',
                                                        fontFamily:'Montserrat-Bold',
                                                    }}
                                                >
                                                    Select your Team
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                    marginTop: '5%',
                                                    marginBottom: '10%',
                                                }}
                                            >
                                                <View style={{}}>
                                                    <Image
                                                        style={Styles.teamimg}
                                                        source={require('../assets/img/Nagenahiranagas.png')}
                                                    />
                                                    {/*<RadioButtonRN*/}
                                                    {/*  data={data}*/}
                                                    {/*  boxStyle={none}*/}
                                                    {/*  selectedBtn={(e) => console.log(e)}*/}
                                                    {/*/>*/}
                                                </View>
                                                <View style={{justifyContent: 'center'}}>
                                                    <Text
                                                        // allowFont={false}
                                                        style={{
                                                            fontSize:22,
                                                            fontFamily:'Montserrat-SemiBold',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        Vs
                                                    </Text>
                                                </View>
                                                <View style={{}}>
                                                    <Image
                                                        style={Styles.teamimg}
                                                        source={require('../assets/img/Ruhunaroyals.png')}
                                                    />
                                                    {/*<RadioButtonRN*/}
                                                    {/*  data={data}*/}
                                                    {/*  selectedBtn={(e) => console.log(e)}*/}
                                                    {/*/>*/}
                                                </View>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </View>
                                <View style={{marginHorizontal: 18}}>
                                    <LinearGradient
                                        colors={['#002270', '#08F8FF']}
                                        style={{borderRadius: 20, width: WIDTH - 40}}
                                    >
                                        <View style={{marginLeft: '4%', marginTop: '7%'}}>
                                            <View>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 19,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-SemiBold',
                                                    }}
                                                >
                                                    Nagenahira Nagas Vs Ruhuna Royals
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 15,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Regular',
                                                    }}
                                                >
                                                    08:00 a.m , 20th November 2020{' '}
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 15,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Regular',
                                                    }}
                                                >
                                                    R. Premadasa International Cricket Stadium
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 23,
                                                        color: '#0CE68B',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Bold',
                                                    }}
                                                >
                                                    Select your Team
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                    marginTop: '5%',
                                                    marginBottom: '10%',
                                                }}
                                            >
                                                <View style={{}}>
                                                    <Image
                                                        style={Styles.teamimg}
                                                        source={require('../assets/img/Nagenahiranagas.png')}
                                                    />
                                                    {/*<RadioButtonRN*/}
                                                    {/*  data={data}*/}
                                                    {/*  boxStyle={none}*/}
                                                    {/*  selectedBtn={(e) => console.log(e)}*/}
                                                    {/*/>*/}
                                                </View>
                                                <View style={{justifyContent: 'center'}}>
                                                    <Text
                                                        // allowFont={false}
                                                        style={{
                                                            fontSize: 22,
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                            fontFamily:'Montserrat-SemiBold',
                                                        }}
                                                    >
                                                        Vs
                                                    </Text>
                                                </View>
                                                <View style={{}}>
                                                    <Image
                                                        style={Styles.teamimg}
                                                        source={require('../assets/img/Ruhunaroyals.png')}
                                                    />
                                                    {/*<RadioButtonRN*/}
                                                    {/*  data={data}*/}
                                                    {/*  selectedBtn={(e) => console.log(e)}*/}
                                                    {/*/>*/}
                                                </View>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </View>
                                <View style={{marginHorizontal: 8}}>
                                    <LinearGradient
                                        colors={['#0F4772', '#00FF5F']}
                                        style={{borderRadius: 20, width: WIDTH - 40}}
                                    >
                                        <View style={{marginLeft: '4%', marginTop: '7%'}}>
                                            <View>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 19,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-SemiBold',
                                                    }}
                                                >
                                                    Nagenahira Nagas Vs Ruhuna Royals
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 15,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Regular',
                                                    }}
                                                >
                                                    08:00 a.m , 20th November 2020{' '}
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 15,
                                                        color: 'white',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Regular',
                                                    }}
                                                >
                                                    R. Premadasa International Cricket Stadium
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        fontSize: 23,
                                                        color: '#0CE68B',
                                                        // fontWeight: 'bold',
                                                        fontFamily:'Montserrat-Bold',
                                                    }}
                                                >
                                                    Select your Team
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                    marginTop: '5%',
                                                    marginBottom: '10%',
                                                }}
                                            >
                                                <View style={{}}>
                                                    <Image
                                                        style={Styles.teamimg}
                                                        source={require('../assets/img/Nagenahiranagas.png')}
                                                    />
                                                    {/*<RadioButtonRN*/}
                                                    {/*  data={data}*/}
                                                    {/*  boxStyle={none}*/}
                                                    {/*  selectedBtn={(e) => console.log(e)}*/}
                                                    {/*/>*/}
                                                </View>
                                                <View style={{justifyContent: 'center'}}>
                                                    <Text
                                                        allowFontScaling={false}
                                                        style={{
                                                            fontSize: 22,
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                            fontFamily:'Montserrat-SemiBold',
                                                        }}
                                                    >
                                                        Vs
                                                    </Text>
                                                </View>
                                                <View style={{}}>
                                                    <Image
                                                        style={Styles.teamimg}
                                                        source={require('../assets/img/Ruhunaroyals.png')}
                                                    />
                                                    {/*<RadioButtonRN*/}
                                                    {/*  data={data}*/}
                                                    {/*  selectedBtn={(e) => console.log(e)}*/}
                                                    {/*/>*/}
                                                </View>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{marginLeft: '5%', marginTop: '5%'}}>
                            <Text
                                allowFontScaling={false}
                                style={{ fontSize: 18, fontFamily:'Montserrat-Bold', color: '#0CE68B', fontWeight: 'bold'}}
                            >
                                SELECT PLAYERS
                            </Text>
                        </View>
                        <View style={{marginTop: '5%', justifyContent: 'center', alignItems: 'center'}}>

                            <View style={{flexDirection: 'row', marginTop: '8%'}}>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        width: WIDTH - 40,
                                    }}
                                >
                                    <View>
                                        <Text
                                            allowFontScaling={false}
                                            style={{
                                                color: 'white',
                                                fontSize: 17,
                                                fontFamily:'Montserrat-Bold'
                                            }}
                                        >
                                            Your Buddy Bowler
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <LinearGradient
                                                colors={['#02AD93', '#0CF287']}
                                                style={Styles.btnselect}
                                            >
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        color: 'white',
                                                        fontSize: 15,
                                                        fontFamily:'Montserrat-Bold'

                                                    }}
                                                >
                                                    Select
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: '8%'}}>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        width: WIDTH - 40,
                                    }}
                                >
                                    <View>
                                        <Text
                                            allowFontScaling={false}
                                            style={{
                                                color: 'white',
                                                fontSize:17,
                                                fontFamily:'Montserrat-Bold'

                                            }}
                                        >
                                            Your Buddy Batsman
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <LinearGradient
                                                colors={['#02AD93', '#0CF287']}
                                                style={Styles.btnselect}
                                            >
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        color: 'white',
                                                        fontSize: 15,
                                                        fontFamily:'Montserrat-Bold'

                                                    }}
                                                >
                                                    Select
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: '8%'}}>
                                <View
                                    style={{
                                        flexDirection: 'row-reverse',
                                        width: WIDTH - 40,
                                    }}
                                >
                                    <View>
                                        <TouchableOpacity>
                                            <LinearGradient
                                                colors={['#02AD93', '#0CF287']}
                                                style={Styles.btnconfirm}
                                            >
                                                <Text
                                                    allowFontScaling={false}
                                                    style={{
                                                        color: 'white',
                                                        fontSize:15,
                                                        fontFamily:'Montserrat-Bold'

                                                    }}
                                                >
                                                    Confirm
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                width: WIDTH - 30,
                                alignItems: 'center',
                                marginTop: '12%',
                                marginBottom: '8%',
                            }}
                        >
                            <Text
                                allowFontScaling={false}
                                style={{ fontSize:30, fontFamily:'Montserrat-Bold', color: 'white'}}
                            >
                                WINING PRIZES
                            </Text>
                        </View>
                        <View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '5%',
                                }}
                            >
                                <Image
                                    style={Styles.prizeimg}
                                    source={require('../assets/img/prize1.png')}
                                />
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width: WIDTH / 1.5,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <View>
                                        <Image
                                            style={Styles.prizeimg}
                                            source={require('../assets/img/prize2.png')}
                                        />
                                    </View>
                                    <View style={{marginTop: '5%'}}>
                                        <Image
                                            style={Styles.prizeimg}
                                            source={require('../assets/img/prize3.png')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.loading.username,
        currentScreen: state.footer.currentScreen,
        changeIcon: state.footer.changeIcon,
    };
};

export default connect(mapStateToProps, {
    LoginAction,
    changeIconComponent,
    changeComponent,
})(HomeScreen);
const Styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: '#16185B',
    },

    advimg: {
        width: WIDTH - 50,
        height: height / 3.5,
        borderRadius: 21,
    },
    videoImageStyle: {
        width: WIDTH - 40,
        height: height / 3.3,
        marginHorizontal: 6,
        borderRadius: 21,
    },

    txt1: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
    },
    buddiesimg: {
        width: 50,
        height: 50,
    },
    boxview: {
        marginTop: '5%',
    },
    teamimg: {
        width: 70,
        height: 70,
    },
    box: {
        width: WIDTH - 50,
        borderRadius: 20,
        marginHorizontal: 6,
        marginTop: '5%',
    },
    btnselect: {
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH / 4,
        height: 30,
        borderRadius: 50,
    },
    btnconfirm: {
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH / 4,
        height: 33,
        borderRadius: 8,
    },
    prizeimg: {
        width: 85,
        height: 95,
    },
    text1: {
        fontSize: 15,
        // fontSize: RFValue(20, 680),
        color: 'white',
        // fontWeight: 'bold',
        fontFamily:'Montserrat-Regular',
    },
    text2: {
        fontSize: 15,
        color: 'white',
        // fontWeight: 'bold',
        fontFamily:'Montserrat-Regular',
    },
});
