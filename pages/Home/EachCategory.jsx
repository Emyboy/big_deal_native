import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Global from '../../Global'

export default function EachCategory() {
    return (
        // <Card style={styles.category}>
            <Card.Content style={styles.category}><Text style={styles.name}>Name</Text></Card.Content>
        // </Card>
    )
}

const styles = StyleSheet.create({
    category: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Global.THEME_COLOR,
        margin: 4,
        backgroundColor: 'white',
        padding: 3
    },
    name: {
        fontSize: 17,
        fontFamily: Global.FONT_BOLD
    }
})
