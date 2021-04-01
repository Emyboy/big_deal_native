import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-paper'
import EachProduct from '../../components/EachProduct/EachProduct'
import EachCategory from './EachCategory'
import Btn from '../../components/Btn/Btn'
import Global from '../../Global'
import Header from '../../components/Header/Header'

export default function Home() {
    return (
        <View style={{ height: Global.HEIGHT + 30 }}>
            <Header/>
            <Card>
                <Card.Content style={{ display: 'flex', flexDirection: 'row' }}>
                    <ScrollView horizontal>
                        <EachCategory active />
                        <EachCategory />
                        <EachCategory />
                        <EachCategory />
                        <EachCategory />
                        <EachCategory />
                    </ScrollView>
                </Card.Content>
            </Card>
            <ScrollView >
                <ScrollView horizontal style={{ marginLeft: 5 }}>
                    <EachProduct />
                    <EachProduct />
                    <EachProduct />
                    <EachProduct />
                </ScrollView>
                <Image
                    width={200}
                    height={100}
                    style={{ alignSelf: 'center' }}
                    source={require('../../assets/logo.png')}
                />
                <Btn
                    text='Create Store'
                    style={{ width: Global.WIDTH - 100, marginTop: 10, marginBottom: 10, alignSelf: 'center' }}
                    onPress={() => { }}
                />
                <ScrollView horizontal style={{ marginLeft: 5 }}>
                    <EachProduct />
                    <EachProduct />
                    <EachProduct />
                    <EachProduct />
                </ScrollView>
                <Image
                    // width={200}
                    // height={100}
                    style={{ alignSelf: 'center', width: Global.WIDTH, height: 90, margin: 10 }}
                    source={require('../../assets/img/1.jpg')}
                />
                {/* <View style={{ marginBottom: 20 }}></View> */}
            </ScrollView>
        </View>
    )
}

