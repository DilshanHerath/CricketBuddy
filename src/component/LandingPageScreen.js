import React, { useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const {width: WIDTH, height: height} = Dimensions.get('window');

const LandingPageScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center',height:height,justifyContent:'center'}}>
              <Image source={require('../assets/img/logo2.png')}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232883',
    },

});

export default LandingPageScreen
