import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {connect} from "react-redux";
import {changeComponent, changeIconComponent} from "../action/FooterAction";

const {width: WIDTH, height: height} = Dimensions.get('window');

class NewsScreen extends Component {
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
                            <Text allowFontScaling={false}
                                  style={{fontSize: 35, color: 'white', fontFamily: 'Montserrat-Bold'}}>
                                News
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: '#0CE68B',
                                    fontFamily: 'Montserrat-Bold'
                                }}
                            >
                                updates
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', marginTop: '5%'}}>
                        <View
                            style={{
                                width: WIDTH / 1.1,
                                backgroundColor: '#151757',
                                borderRadius: 20,
                                zIndex: 10,
                            }}
                        >
                            <View style={{marginBottom: '8%', alignItems: 'center'}}>
                                <Image
                                    style={{
                                        width: WIDTH / 1.1,
                                        height: height / 2.8,
                                        borderRadius: 20,
                                    }}
                                    source={require('../assets/img/winner.png')}
                                />
                                <View style={{alignItems: 'center', marginTop: '5%'}}>
                                    <Text
                                        allowFontScaling={false}
                                        style={{ fontSize: 15, color: 'white',fontFamily:'Montserrat-Medium'}}
                                    >
                                        CRICKET - SRI LANKA PREMIER
                                    </Text>
                                    <Text
                                        allowFontScaling={false}
                                        style={{ fontSize: 14, color: 'white',fontFamily:'Montserrat-Medium'}}

                                    >
                                        LEAGUE M8 BASNAHIRA V NAGENAHIRA
                                    </Text>
                                    <Text
                                        allowFontScaling={false}
                                        style={{
                                            fontSize: 14,
                                            // fontSize: RFPercentage(2),
                                            color: '#FD2C5A',
                                            fontFamily:'Montserrat-Medium',
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
                    <View style={{alignItems: 'center', marginTop: '6%', marginBottom: '7%'}}>
                        <View style={{
                            flexDirection: 'row',
                            width: WIDTH / 1.1,
                            backgroundColor: '#151757',
                            borderRadius: 20,
                            justifyContent: 'space-around'
                        }}>
                            <View style={{marginTop: '5%', marginBottom: '5%'}}>
                                <Image style={{borderRadius: 20, width: WIDTH / 2.6, height: height / 4.5}}
                                       source={require('../assets/img/out.png')}/>
                                <View style={{alignItems: 'center', marginTop: '5%'}}>
                                    <Text  allowFontScaling={false} style={Styles.text4}>Mushfiqur carries</Text>
                                    <Text  allowFontScaling={false} style={Styles.text4}>Nagenahira home</Text>
                                </View>
                            </View>
                            <View style={{marginTop: '5%', marginBottom: '5%'}}>
                                <Image style={{borderRadius: 20, width: WIDTH / 2.6, height: height / 4.5}}
                                       source={require('../assets/img/centuries.png')}/>
                                <View style={{alignItems: 'center', marginTop: '5%'}}>
                                    <Text  allowFontScaling={false} style={Styles.text4}>CRICKET - SRI LANKA </Text>
                                    <Text  allowFontScaling={false} style={Styles.text4}>PREMIER LEAGUE</Text>
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
        currentScreen: state.footer.currentScreen,
        changeIcon: state.footer.changeIcon,
    };
};

export default connect(mapStateToProps, {
    changeIconComponent,
    changeComponent,
})(NewsScreen);


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D219B',
    },
    text4: {
        fontSize: 12,
        color: 'white',
        fontFamily:'Montserrat-Medium',
    },

    proimg: {
        width: 45,
        height: 45,
    },
});
