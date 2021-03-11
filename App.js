import React from 'react';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Global from './Global';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from './components/AppLoading';
import { Provider } from 'react-redux';
import store from './redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Router from './Router';

store.subscribe(() => {
  AsyncStorage.setItem('view', JSON.stringify(store.getState().view))
  AsyncStorage.setItem('auth', JSON.stringify(store.getState().auth))
  // console.log('change has happened VIEW ---', JSON.stringify(store.getState().view))
  console.log('--------------------------------------------')
  console.log('change has happened AUTH ---', JSON.stringify(store.getState().auth))
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    AsyncStorage.getItem('state')
      .then(res => {
        store.dispatch({
          type: 'SET_VIEW_STATE',
          payload: JSON.parse(res).view
        })
      })
    AsyncStorage.getItem('auth')
      .then(res => {
        store.dispatch({
          type: 'SET_AUTH_STATE',
          payload: JSON.parse(res).auth
        })
      })
    const state = await AsyncStorage.getItem('auth')
    console.log('FETCH STATE ---', state)
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      nunito: require('./assets/fonts/NunitoSans-Regular.ttf'),
      nunito_bold: require('./assets/fonts/NunitoSans-Bold.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <Provider store={store}>
        <Container style={{ backgroundColor: Global.BG_COLOR }}>
          {/* <Header /> */}
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </Container>
      </Provider>
    );
  }
}
