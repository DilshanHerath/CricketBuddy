import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Dimensions,
    Image,
    ScrollView,
} from 'react-native';
import {changeComponent, changeIconComponent} from '../action/FooterAction';
import { connect } from 'react-redux';
import { Button, Footer, FooterTab } from 'native-base';

const { width: WIDTH, height: height } = Dimensions.get('window');

const home = require('../assets/icon/home.png');
const home2 = require('../assets/icon/Shome.png');

const score = require('../assets/icon/score.png');
const Sscore = require('../assets/icon/Sscore.png');

const buddies = require('../assets/icon/buddies.png');
const Sbuddies = require('../assets/icon/Sbuddies.png');

const news = require('../assets/icon/news.png');
const Snews = require('../assets/icon/Snews.png');

const setting = require('../assets/icon/settings.png');
const Ssetting = require('../assets/icon/Ssetting.png');

class Footerrr extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
               <Footer style={styles.footerStyles}>
                   <FooterTab
                       style={styles.footerTab}>
                       <Button
                           onPress={() => {
                               this.props.changeComponent('Home');
                               alert('Home');
                           }}

                       >
                           <Image
                               source={this.props.currentScreen === 'Home' ? home2 : home}
                               style={styles.allIcons}
                           />
                       </Button>
                       <Button

                           onPress={() => {
                               alert('Score');
                               this.props.changeComponent('Score');

                           }}
                       >
                           <Image
                               source={
                                   this.props.currentScreen === 'Score'
                                       ? Sscore
                                       : score
                               }
                               style={styles.allIcons}
                           />
                       </Button>
                       <Button

                           onPress={() => {
                               this.props.changeComponent('Buddies');
                               alert('Buddies');
                           }}
                       >
                           <Image
                               source={
                                   this.props.currentScreen === 'Buddies' ? Sbuddies : buddies
                               }
                               style={styles.allIcons}
                           />
                       </Button>
                       <Button
                           onPress={() => {
                               this.props.changeComponent('News');
                               alert('News');
                           }}
                       >
                           <Image
                               source={
                                   this.props.currentScreen === 'News' ? Snews: news
                               }
                               style={styles.allIcons}
                           />
                       </Button>
                       <Button

                           onPress={() => {
                               this.props.changeComponent('profile');
                               alert('Home');
                           }}
                       >
                           <Image
                               source={
                                   this.props.currentScreen === 'profile' ? Ssetting: setting
                               }
                               style={styles.allIcons}
                           />
                       </Button>
                   </FooterTab>
               </Footer>
        );
    }
}

var styles = {
    footerStyles: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#16185B',
        zIndex:15,
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
        // borderWidth: 1,
        height: 50,
    },
    footerTab: {
        backgroundColor: '#16185B',
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
        // borderWidth: 1,
        // borderColor: '#F3F3F3',
    },
    allIcons: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
};
const mapStateToProps = (state) => {
    return {
        currentScreen: state.footer.currentScreen,
        changeIcon: state.footer.changeIcon,
    };
};

export default connect(mapStateToProps, {
    changeComponent,
    changeIconComponent,
})(Footerrr);
