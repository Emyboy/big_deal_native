import React from 'react'
import { Button } from 'react-native-paper'
import { StyleSheet, View, Text } from 'react-native'
import Global from '../../Global'

export default function CartButton({
    style
}) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', ...style }}>
            <Button style={styles.btn}>
                <Text style={styles.text}>-</Text>
            </Button>
            <Button style={styles.btn}>
                <Text style={styles.text}>5</Text>
            </Button>
            <Button style={styles.btn}>
                <Text style={styles.text}>+</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: { borderWidth: 1, borderColor: Global.THEME_COLOR, borderRadius: 0 },
    text: {
        fontFamily: Global.FONT_REGULAR,
        color: 'black',
        fontWeight: 'bold'
    } 
})
