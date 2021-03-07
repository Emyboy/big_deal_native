import React from 'react'
import { ScrollView } from 'react-native';
import CartItem from './EachCartItem'

export default function Cart() {
    return (
        <ScrollView>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </ScrollView>
    )
}
