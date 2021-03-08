import { Button, Text, View } from 'native-base'
import React from 'react'
import Global from '../../Global'
import Btn from '../../components/Btn/Btn';
import StripeCheckout from 'expo-stripe-checkout'

export default function Checkout() {
    return (
        <View style={{ marginTop: 30 }}>
            <Text style={{ alignSelf: 'center', fontFamily: Global.FONT_REGULAR }}>Total</Text>
            <Text style={{ alignSelf: 'center', fontFamily: Global.FONT_BOLD, fontSize: 30 }}>$ 23,00.00</Text>
            <View style={{ borderTopColor: Global.GRAY, borderWidth: 1, marginTop: 10 }}></View>

            <StripeCheckout
                publicKey="sk_test_4eC39HqLyjWDarjtT1zdp7dc"
                amount={100000}
                imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
                storeName="Stripe Checkout"
                description="Test"
                currency="USD"
                allowRememberMe={false}
                prepopulatedEmail="test@test.com"
                // onClose={this.onClose}
                // onPaymentSuccess={this.onPaymentSuccess}
            />
            
            <Btn text='Pay Now' onPress={() => { }} />
        </View>
    )
}
