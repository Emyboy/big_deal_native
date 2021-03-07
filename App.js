import React from 'react';
import { Container, Text, View } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header/Header';
import Global from './Global';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home/Home';
import ProductDetails from './views/ProductDetails/ProductDetails';
import Cart from './views/Cart/Cart';
import Login from './views/Login/Login';
import AppLoading from './components/AppLoading';
import Signup from './views/Signup/Signup';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
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

    const headerOptions = {
      headerStyle: {
        backgroundColor: Global.THEME_COLOR,
        borderColor: Global.THEME_COLOR,
      },
      headerTitleStyle: {
        color: 'white',
        fontFamily: Global.FONT_BOLD,
        fontSize: 25
      },
      headerTintColor: 'white',
    }

    return (
      <Container style={{ backgroundColor: Global.BG_COLOR }}>
        {/* <Header /> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen name="Details" options={headerOptions} component={ProductDetails} />
            <Stack.Screen name="Cart" options={headerOptions} component={Cart} />
            <Stack.Screen name="Login" options={headerOptions} component={Login} />
            <Stack.Screen name="Signup" options={headerOptions} component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    );
  }
}
