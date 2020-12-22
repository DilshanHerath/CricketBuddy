import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {number, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP as hp2dp, widthPercentageToDP as wp2dp,} from 'react-native-responsive-screen';


const TestScreen = ({navigation}) => {

    const [emailaddress, setemailaddress] = useState();
    const onChangePhone = () => {
        setemailaddress(Text)
    };
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center',marginTop:'5%'}}>
                <Text style={{fontSize: 30, color: 'white', fontWeight: "bold",marginTop:'5%'}}>
                    Create Your Account
                </Text>
            </View>
            <View style={{backgroundColor: 'blue', width: '100%', height: 350, borderRadius: 250, marginTop: '-50%'}}>

            </View>
            <View style={styles.avatar}>
                <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',}}
                        style={{height: 150, width: 150}}
                        size='xlarge'
                        title="HA"
                        rounded>
                </Avatar>

                <View style={{alignItems:'center',justifyContent:'center',marginTop:'5%'}}>
                    <Text style={styles.username}>Sampath Priyankara</Text>
                    <Text style={styles.userid}>ID: 0001</Text>
                </View>

            </View>
            {/* <View style={{
          borderBottomColor: '#b2beb7',
          borderBottomWidth: 1,
          }}

        /> */}
            <View style={styles.openDialogView}>
                <Text style={{fontSize: 12, color: '#D6D6D6'}}>{"Email"}</Text>
                <TextInput
                    style={styles.phoneInputStyle} placeholder="Enter E-mail Address"
                    value={number}
                    onChangeText={onChangePhone}
                    secureTextEntry={false}
                >
                </TextInput>
                <View style={styles.containerInput}></View>
            </View>
            <View style={styles.openDialogView1}>
                <Text style={{fontSize: 12, color: '#D6D6D6'}}>{"Password"}</Text>
                <TextInput
                    style={styles.phoneInputStyle} placeholder="Enter your Password"
                    value={number}
                    onChangeText={onChangePhone}
                    secureTextEntry={false}
                >
                </TextInput>
                <View style={styles.containerInput}></View>
            </View>
            <View style={styles.openDialogView2}>
                <Text style={{fontSize: 12, color: '#D6D6D6'}}>{"Confirm Password"}</Text>
                <TextInput
                    style={styles.phoneInputStyle} placeholder="Re-enter your Password"
                    value={number}
                    onChangeText={onChangePhone}
                    secureTextEntry={false}
                >
                </TextInput>
                <View style={styles.containerInput}></View>
            </View>

            <View style={styles.startgame}>
                <TouchableOpacity><Text style={{marginTop: 7, fontSize: 18, fontWeight: 'bold', color: '#FD2C5A'}}>Start
                    Game</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}
                                  style={{
                                      borderColor: 'rgba(0,0,0,0.2)',
                                      marginLeft: 10,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: 40,
                                      height: 40,
                                      backgroundColor: '#FD2C5A',
                                      borderRadius: 50
                                  }}>
                    <Icon name={"arrow-right"} size={30} color="#FFFFFF"/>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    stretch: {
        width: wp2dp('100%'),
        height: hp2dp('100%'),
    },
    topline: {
        flexDirection: 'row',
        marginTop: 25
    },
    avatar: {
        marginTop: '-20%',
       alignItems:'center',
    },
    openDialogView: {
        flex: 1,
        marginLeft: 20,
        marginTop: 320,
        alignItems: 'flex-start',
        width: wp2dp('90%'),
        height: hp2dp('7.5%'),
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
    },
    openDialogView1: {
        flex: 1,
        marginLeft: 20,
        marginTop: 400,
        alignItems: 'flex-start',
        width: wp2dp('90%'),
        height: hp2dp('7.5%'),
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
    },
    openDialogView2: {
        flex: 1,
        marginLeft: 20,
        marginTop: 480,
        alignItems: 'flex-start',
        width: wp2dp('90%'),
        height: hp2dp('7.5%'),
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
    },
    userbox: {
        alignContent: 'center',
        // marginTop: hp2dp('27%')

    },

    username: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    userid: {
        fontSize: 17,
    },
    idnum: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: wp2dp('100%'),
        marginLeft: 30,
        marginTop: 40,
        fontSize: 17,
    },
    startgame: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        marginTop: hp2dp('80%'),
        marginLeft: wp2dp('60%')

    }

});

export default TestScreen
