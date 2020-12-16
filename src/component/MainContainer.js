import React from 'react';
import {BackHandler, LayoutAnimation, UIManager,View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HomePage from './HomeScreen';
import ScoreRankingPage from './ScoreRankingScreen';
import BuddiesPage from './MyBuddiesScreen';
import ProfilePage from './ProfileScreen';
import NewsPage from './NewsScreen';
import FooterScreen from './Footerrr';
import { connect } from 'react-redux';
import { changeComponent,changeIconComponent } from '../action/FooterAction';

var props;
var scene;

class MainContainer extends React.Component {
    constructor() {
        super();

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    componentWillMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
    }

    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
    }

    // handleBackButtonClick() {
    //     if (
    //         Actions.currentScene === 'mainCon' &&
    //         (scene === 'Score' ||
    //             scene === 'Buddies' ||
    //             scene === 'News' ||
    //             scene === 'profile'
    //         )
    //     ) {
    //         props.changeComponent('Home');
    //         return true;
    //     } else if (Actions.currentScene === 'mainCon' && scene === 'Home') {
    //
    //             BackHandler.exitApp();
    //             return true;
    //
    //     } else {
    //         if (Actions.currentScene === 'profile') {
    //             if (scene === 'Score') {
    //                 props.changeComponent('Score');
    //                 alert('Score');
    //                 Actions.mainCon();
    //             } else if (scene === 'Buddies') {
    //                 props.changeComponent('Buddies');
    //                 alert('Buddies');
    //                 Actions.mainCon();
    //             } else if (Actions.currentScene === 'News') {
    //                 alert('News');
    //                 Actions.pop();
    //             } else {
    //                 props.changeComponent('Home');
    //                 alert('Home');
    //                 Actions.mainCon();
    //             }
    //             return true;
    //         } else {
    //             Actions.pop();
    //             return true;
    //         }
    //     }
    // }

    render() {
        props = this.props;
        scene = this.props.currentScreen;
        alert('mainContainer');

        return (
            <View style={{ flex: 1 }}>
                {this.props.currentScreen === 'Home' ? (
                    <HomePage />
                ) : this.props.currentScreen === 'Score' ? (
                    <ScoreRankingPage />
                ) : this.props.currentScreen === 'Buddies' ? (
                    <BuddiesPage />
                ) : this.props.currentScreen === 'News' ? (
                    <NewsPage />
                ) : this.props.currentScreen === 'profile' ? (
                    <ProfilePage />
                ) : (
                    undefined
                )}
                <FooterScreen />
            </View>
        );
    }

}
const mapStateToProps = state => {
    return {
        currentScreen: state.footer.currentScreen,
        changeIcon: state.footer.changeIcon,
    };
};

export default connect(
    mapStateToProps,
    {
        changeComponent,
        changeIconComponent,
    },
)(MainContainer);
