import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {LoginAction} from '../action/TestAction';
import { changeComponent, changeIconComponent } from '../action/FooterAction';
import {connect} from 'react-redux';

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
                            marginLeft: '4%',
                        }}
                    >
                        <ScrollView
                            style={{
                                height: height / 2,
                                // width:WIDTH - 30,
                                marginTop: '2%',
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

                        <View
                            style={{
                                borderWidth: 1,
                                borderRadius: 25,
                                borderColor: '#0CE68B',
                                width: WIDTH - 30,
                                height: 100,
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
                                <Text style={Styles.txt1}>MY POINTS</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: WIDTH / 3.1,
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 50,
                                            height: 50,
                                            backgroundColor: '#06C0DA',
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: 50,
                                            height: 50,
                                            backgroundColor: '#FD2C5A',
                                        }}
                                    />
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
                                <Text style={Styles.txt1}>YOUR BUDDIES</Text>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
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
                        <View style={{marginTop: '6%'}}>
                            <View>
                                <Text
                                    style={{fontSize: 42, fontWeight: 'bold', color: 'white'}}
                                >
                                    Matches
                                </Text>
                            </View>
                            <View style={{marginTop: '4%', marginBottom: '10%'}}>
                                <Text
                                    style={{
                                        color: '#0CE68B',
                                        fontSize: 25,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Today's Matches
                                </Text>
                            </View>
                        </View>
                        <View style={{height: height / 2}}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                pagingEnabled
                                style={{}}
                            >
                                <View style={{marginHorizontal: 6}}>
                                    <LinearGradient
                                        colors={['#C31339', '#FD2C5A']}
                                        style={{borderRadius: 20, width: WIDTH - 30}}
                                    >
                                        <View style={{marginLeft: '4%', marginTop: '7%'}}>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 22,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    Nagenahira Nagas Vs Ruhuna Royals
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    08:00 a.m , 20th November 2020{' '}
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    R. Premadasa International Cricket Stadium
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 25,
                                                        color: '#0CE68B',
                                                        fontWeight: 'bold',
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
                                                        style={{
                                                            fontSize: 24,
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        VS
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
                                <View style={{marginHorizontal: 6}}>
                                    <LinearGradient
                                        colors={['#002270', '#08F8FF']}
                                        style={{borderRadius: 20, width: WIDTH - 30}}
                                    >
                                        <View style={{marginLeft: '4%', marginTop: '7%'}}>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 22,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    Nagenahira Nagas Vs Ruhuna Royals
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    08:00 a.m , 20th November 2020{' '}
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    R. Premadasa International Cricket Stadium
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 25,
                                                        color: '#0CE68B',
                                                        fontWeight: 'bold',
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
                                                        style={{
                                                            fontSize: 24,
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        VS
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
                                <View style={{marginHorizontal: 6}}>
                                    <LinearGradient
                                        colors={['#0F4772', '#00FF5F']}
                                        style={{borderRadius: 20, width: WIDTH - 30}}
                                    >
                                        <View style={{marginLeft: '4%', marginTop: '7%'}}>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 22,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    Nagenahira Nagas Vs Ruhuna Royals
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    08:00 a.m , 20th November 2020{' '}
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    R. Premadasa International Cricket Stadium
                                                </Text>
                                            </View>
                                            <View style={Styles.boxview}>
                                                <Text
                                                    style={{
                                                        fontSize: 25,
                                                        color: '#0CE68B',
                                                        fontWeight: 'bold',
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
                                                        style={{
                                                            fontSize: 24,
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        VS
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
                        <View>
                            <View>
                                <Text
                                    style={{fontSize: 20, fontWeight: 'bold', color: '#0CE68B'}}
                                >
                                    SELECT PLAYERS
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: '8%'}}>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        width: WIDTH - 50,
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: 22,
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
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: 20,
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
                                        width: WIDTH - 50,
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: 22,
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
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: 20,
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
                                        width: WIDTH - 50,
                                    }}
                                >
                                    <View>
                                        <TouchableOpacity>
                                            <LinearGradient
                                                colors={['#02AD93', '#0CF287']}
                                                style={Styles.btnconfirm}
                                            >
                                                <Text
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: 20,
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
                                style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}
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
                                            source={require('../assets/img/prize1.png')}
                                        />
                                    </View>
                                    <View style={{marginTop: '5%'}}>
                                        <Image
                                            style={Styles.prizeimg}
                                            source={require('../assets/img/prize1.png')}
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
        width: WIDTH - 30,
        height: 200,
        marginHorizontal: 6,
        borderRadius: 21,
    },

    txt1: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
    },
    buddiesimg: {
        width: 50,
        height: 50,
    },
    boxview: {
        // marginLeft: '4%',
        // width: WIDTH - 50,
        marginTop: '5%',
    },
    teamimg: {
        width: 70,
        height: 70,
    },
    box: {
        width: WIDTH - 50,
        // backgroundColor: '#FD2C5A',
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
});
