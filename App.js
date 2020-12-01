/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { StatusBar } from 'react-native';
import Routers from '../CricketBuddy/src/navigation/Router';
import reducer from '../CricketBuddy/src/reducer/index';

export default class App extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(true);
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}
