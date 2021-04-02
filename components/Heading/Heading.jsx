import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Global from '../../Global'

export default function Heading({
    text
}) {
    return (
        <View>
            <Text style={styles.heading}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: Global.FONT_BOLD,
        color: Global.BLACK
    }
})
