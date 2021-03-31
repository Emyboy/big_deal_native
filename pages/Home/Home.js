import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-paper'
import EachProduct from '../../components/EachProduct/EachProduct'
import EachCategory from './EachCategory'
import Btn from '../../components/Btn/Btn'
import Global from '../../Global'

export default function Home() {
    return (
        <ScrollView>
            <ScrollView horizontal style={{ padding: 5 }}>
                <EachCategory />
                <EachCategory />
                <EachCategory />
                <EachCategory />
                <EachCategory />
                <EachCategory />
            </ScrollView>
            <ScrollView horizontal style={{ marginLeft: 5 }}>
                <EachProduct />
                <EachProduct />
                <EachProduct />
                <EachProduct />
            </ScrollView>
            <View style={{ backgroundColor: 'white', margin: 10, alignItems: 'center' }}>
                <Image
                    width={200}
                    height={100}
                    style={{ alignSelf: 'center' }}
                    source={require('../../assets/logo.png')}
                />
                <Btn 
                    text='Create Store'
                    style={{ width: Global.WIDTH - 100, marginTop: 10, marginBottom: 10 }}
                    onPress={() => {}}
                />
            </View>
            <ScrollView horizontal style={{ marginLeft: 5 }}>
                <EachProduct />
                <EachProduct />
                <EachProduct />
                <EachProduct />
            </ScrollView>
        </ScrollView>
    )
}

