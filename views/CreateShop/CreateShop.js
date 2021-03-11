import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Btn from '../../components/Btn/Btn'
import Layout from '../../components/Layout/Layout'
import TextInput from '../../components/TextInput/TextInput'

export default function CreateShop({
    navigation
}) {
    return (
        <Layout
            nav={navigation}
            back={true}
        >
            <View style={{ padding: 15, paddingTop: 20 }}>
                <Text style={styles.heading}>Create A Store</Text>
                <TextInput
                    label='Store Name'
                    placeholder='Ex. Amazon / Netflix'
                    autoFocus={true}
                    onChangeText={e => { }}
                />
                <TextInput
                    label='Store Description'
                    placeholder='Tell Us About Your Store..'
                    onChangeText={e => { }}
                    multiline={true}
                    style={{ height: 20 }}
                />
                <Btn
                    text='Create'
                    onPress={() => { }}
                />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    heading: {
        alignSelf: 'center',
        fontSize: 25,
    }
})
