import * as React from 'react';
import { View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Text, Button, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header/Header';
import Global from './Global'
import { Provider } from 'react-redux';
import store from './redux/store'
import Router from './Router';
import * as Font from 'expo-font';
import AppLoading from './components/AppLoading';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    // primary: Global.THEME_COLOR,
    // accent: Global.THEME_COLOR,
  },
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    // AsyncStorage.getItem('state')
    //   .then(res => {
    //     store.dispatch({
    //       type: 'SET_VIEW_STATE',
    //       payload: JSON.parse(res).view
    //     })
    //   })
    // AsyncStorage.getItem('auth')
    //   .then(res => {
    //     store.dispatch({
    //       type: 'SET_AUTH_STATE',
    //       payload: JSON.parse(res).auth
    //     })
    //   })
    // const state = await AsyncStorage.getItem('auth')
    // console.log('FETCH STATE ---', state)
    await Font.loadAsync({
      nunito: require('./assets/fonts/NunitoSans-Regular.ttf'),
      nunito_bold: require('./assets/fonts/NunitoSans-Bold.ttf'),
      // ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}