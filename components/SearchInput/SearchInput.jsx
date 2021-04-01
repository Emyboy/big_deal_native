import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Global from '../../Global';
import { TextInput } from 'react-native';

export default function SearchInput() {
    return (
        <View style={styles.view}>
            <Ionicons name="ios-search-sharp" size={24} color="black" />
            <TextInput
                style={styles.input}
                onChangeText={e => console.log(e)}
                placeholder='Search'
            // value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: Global.GRAY,
        width: Global.WIDTH - 100,
        borderRadius: 20,
        padding: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        padding: 0,
        marginLeft: 5,
        width: Global.WIDTH - 150,
        // backgroundColor: 'blue'
    }
})
