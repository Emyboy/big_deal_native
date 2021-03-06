import { View, Text } from 'native-base'
import React from 'react'
import Global from '../../Global'

export default function Heading({
    heading
}) {
    return (
        <View style={{ padding: 5, backgroundColor: 'white', marginTop: 10, marginBottom: 5 }}>
            <Text style={{ fontFamily: Global.FONT_BOLD, fontSize: 20}}>{heading}</Text>
        </View>
    )
}
