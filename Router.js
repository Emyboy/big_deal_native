import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import Global from './Global';
import store from './redux/store';
import Cart from './views/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import CreateShop from './views/CreateShop/CreateShop';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import ProductDetails from './views/ProductDetails/ProductDetails';
import Profile from './views/Profile/Profile';
import Signup from './views/Signup/Signup';

const Stack = createStackNavigator();

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

const mapState = state => ({
    auth: state.auth
})

export default connect(
    mapState
)((props) => {
    const { auth } = props;

    useEffect(() => {

    }, [auth])

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen name="Details" options={headerOptions} component={ProductDetails} />
            {
                !auth.userData ? <><Stack.Screen name="Login" options={headerOptions} component={Login} />
                    <Stack.Screen name="Signup" options={headerOptions} component={Signup} /></> :
                    <>
                        <Stack.Screen name="Profile" options={headerOptions} component={Profile} />
                    </>
            }
            <Stack.Screen name="Cart" options={headerOptions} component={Cart} />
            <Stack.Screen name="Checkout" options={headerOptions} component={Checkout} />
            <Stack.Screen name="CreateStore" options={{ headerShown: false }} component={CreateShop} />
        </Stack.Navigator>
    )
})
