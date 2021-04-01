import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Global from '../../Global'

export default function EachCategory({
    active
}) {
    return (
        <View style={styles.category}><Text style={{ ...styles.name, color: active ? Global.THEME_COLOR : 'black' }}>CATEGROY NAME</Text></View>
    )
}

const styles = StyleSheet.create({
    category: { marginLeft: 7, marginRight: 7, marginBottom: 7 },
    name: { fontFamily: Global.FONT_BOLD, fontWeight: 'bold' }
})
