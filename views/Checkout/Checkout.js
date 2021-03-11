import { Button, Text, View } from 'native-base'
import React from 'react'
import Global from '../../Global'
import Btn from '../../components/Btn/Btn';

export default function Checkout() {
    return (
        <View style={{ marginTop: 30 }}>
            <Text style={{ alignSelf: 'center', fontFamily: Global.FONT_REGULAR }}>Total</Text>
            <Text style={{ alignSelf: 'center', fontFamily: Global.FONT_BOLD, fontSize: 30 }}>$ 23,00.00</Text>
            <View style={{ borderTopColor: Global.GRAY, borderWidth: 1, marginTop: 10 }}></View>

            
            
            <Btn text='Pay Now' onPress={() => { }} />
        </View>
    )
}
