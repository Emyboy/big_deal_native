import { Card } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Global from '../../Global'

export default function EachCategory() {
    return (
        <Card style={styels.cat}>
            <Text style={{ fontFamily: Global.FONT_REGULAR, fontSize: 20}}>Shoes and Bags</Text>
        </Card>
    )
}

const styels = StyleSheet.create({
    cat: {
        borderColor: Global.THEME_COLOR,
        borderWidth: 6,
        height: Global.HEIGHT - 810,
        margin: 3,
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 3
    }
})
