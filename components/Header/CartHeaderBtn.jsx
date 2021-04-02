import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CartHeaderBtn({
    onPress
}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign name="shoppingcart" size={24} color={"black"} />
        </TouchableOpacity>
    )
}
