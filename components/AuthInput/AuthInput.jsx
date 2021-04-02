import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Global from '../../Global';

export default function AuthInput() {
    return (
        <View style={styles.container}>
            <AntDesign name="user" size={30} color={Global.GRAY_TEXT} style={{ paddingTop: 10 }} />
            <View style={{ paddingLeft: 20 }}>
                <Text style={styles.label}>EMAIL</Text>
                <TextInput
                    style={{ width: Global.WIDTH - 150, paddingBottom: 5, fontFamily: Global.FONT_REGULAR, fontSize: 18 }}
                    onChangeText={e => console.log(e)}
                    value={'emy@mail.com'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 0
    },
    label: {
        color: Global.GRAY_TEXT,
        fontFamily: Global.FONT_BOLD
    }
})
