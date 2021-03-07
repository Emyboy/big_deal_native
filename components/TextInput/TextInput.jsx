import { Input, Item, Label, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import Global from '../../Global'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function Textnput({
    label,
    onChangeText,
    placeholder,
    autoCompleteType,
    autoFocus,
    keyboardType,
    secureTextEntry,
    editable
}) {
    return (
        <View style={styles.item}>
            <Label style={styles.label}>{label}</Label>
            <TextInput
                editable={editable}
                onChangeText={e => onChangeText(e)}
                style={styles.input}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                onChangeText={text => { }}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCompleteType={autoCompleteType}
            // value={}
            />
        </View>
        // <Item floatingLabel last style={styles.item}>
        //     <Label style={styles.label}>{label}</Label>
        //     <Input
        //         underlineColorAndroid={null}
        //         selectionColor={Global.THEME_COLOR}
        //         style={styles.input}
        //     />

        //     <AntDesign name="user" size={24} color="black" />
        // </Item>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: Global.THEME_COLOR,
        borderWidth: 1,
        marginTop: 10,
        height: 50,
        borderRadius: 5,
        fontFamily: Global.FONT_REGULAR,
        padding: 7,
        fontSize: 17
    },
    label: {
        fontFamily: Global.FONT_REGULAR,
        color: Global.GRAY
    },
    item: {
        marginTop: 20
    }
})
