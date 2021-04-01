import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import Global from './Global';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';
import store from './redux/store';


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
            <Stack.Screen options={{ headerShown: false,headerTitle: false, headerStyle: { backgroundColor: Global.THEME_COLOR } }} name="Details" component={Details} />
        </Stack.Navigator>
    )
})
