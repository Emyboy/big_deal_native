import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import Global from '../../Global'
import CartItem from './CartItem'

export default function Cart() {
    return (
        <View>
            <Header type='back' />
            <ScrollView style={{ marginLeft: 18, paddingRight: 18, height: Global.HEIGHT - 200 }}>
                <Heading text='Cart' />
                <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </View>
            </ScrollView>
            <View style={{ paddingBottom: 120, paddingTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <View>
                    <Text style={{ fontFamily: Global.FONT_REGULAR, fontSize: 15, color: Global.GRAY_TEXT }}>TOTAL</Text>
                    <Text style={{ fontFamily: Global.FONT_BOLD, fontSize: 25, fontWeight: 'bold', color: Global.BLACK }}>₦255.00</Text>
                    <Text style={{ fontFamily: Global.FONT_REGULAR, color: Global.GRAY_TEXT }}>Free Domestic Shipping</Text>
                </View>
                <Button style={{ backgroundColor: Global.THEME_COLOR, borderRadius: 100, height: 40, elevation: 5, marginTop: 20 }}>
                    <Text style={{ fontFamily: Global.FONT_BOLD, color: 'white', }}>Checkout</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})
