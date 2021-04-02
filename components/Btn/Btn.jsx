import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text, ActivityIndicator, Colors } from 'react-native-paper'
import Global from '../../Global'

export default function Btn({
    text,
    onPress,
    disabled,
    style,
    loading
}) {
    return (
        <Button
            onPress={onPress}
            disabled={disabled || loading}
            loading={loading}
            style={{ ...styles.btn, ...style }}
        >
            {
                loading ?
                    <ActivityIndicator animating={true} color={Colors.yellow100} /> :
                    <Text style={styles.text}>{text}</Text>
            }
        </Button>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Global.THEME_COLOR,
        borderRadius: 100,
    },
    text: {
        fontFamily: Global.FONT_BOLD,
        color: 'white'
    }
})
