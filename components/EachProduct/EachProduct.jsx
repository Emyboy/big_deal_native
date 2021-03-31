import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import Global from '../../Global'

export default function EachProduct() {
    return (
        <TouchableOpacity onPress={() => {}}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: Global.SHIRT_IMAGE }} />
                <Card.Content>
                    <Text style={styles.title}>New Shirt From The UK</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.price}>₦255.00</Text>
                        <Text style={styles.discountPrice}>₦455.00</Text>
                    </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 280,
        width: 200,
        margin: 5
    },
    title: {
        fontFamily: Global.FONT_REGULAR,
        fontSize: 16
    },
    price: {
        fontFamily: Global.FONT_BOLD,
        color: Global.THEME_COLOR
    },
    discountPrice: {
        fontFamily: Global.FONT_REGULAR,
        textDecorationLine: 'line-through',
        color: Global.GRAY
    }
})
