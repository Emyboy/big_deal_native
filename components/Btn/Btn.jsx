import { Button, Spinner, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import Global from '../../Global'

export default function Btn({
    onPress,
    text,
    style,
    loading,
    disabled
}) {
    return (
        <Button disabled={disabled || loading} full onPress={() => onPress()} style={{ ...styles.btn, ...style }}>
            {
                loading ? <Spinner color='white' />
                    : <Text style={styles.btnText}>{text}</Text>
            }
        </Button>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Global.THEME_COLOR,
        marginTop: 30,
        height: 55,
        borderRadius: 5
    },
    btnText: {
        fontFamily: Global.FONT_BOLD,
        textAlign: 'center'
    }
})
