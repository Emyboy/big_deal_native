import * as React from 'react';
import { Appbar, Text } from 'react-native-paper';
import Global from '../../Global';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{
            backgroundColor: Global.THEME_COLOR,
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10
        }}>
            <Entypo name="menu" size={24} color="black" />
            {/* <Text>hi</Text> */}
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <AntDesign name="user" size={24} color="black" style={{ marginLeft: 15 }} />
            </View>
        </Appbar.Header>
    );
};

export default Header;