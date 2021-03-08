import React from 'react'
import { ScrollView } from 'react-native';
import CartItem from './EachCartItem'
import Btn from '../../components/Btn/Btn';
import { Text, View } from 'native-base';
import Global from '../../Global';

export default function Cart({
    navigation
}) {
    return (
        <ScrollView>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <View style={{ borderWidth: 1, borderColor: Global.GRAY, marginBottom: 20 }}></View>
            <Text
                style={{
                    fontFamily: Global.FONT_BOLD,
                    fontSize: 20,
                    textAlign: 'center'
                }}
            >Total: $3,450.00</Text>
            <Btn text='Checkout' style={{ marginTop: 5 }} onPress={() => navigation.navigate('Checkout')} />
        </ScrollView>
    )
}
