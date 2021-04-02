import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Card } from 'react-native-paper'
import AuthInput from '../../components/AuthInput/AuthInput'
import Btn from '../../components/Btn/Btn'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import Global from '../../Global'

export default function Login() {
    return (
        <ScrollView>
            <Header type='back' />
            <View style={{ padding: 20 }}>
                <Heading text='Loign' />
            </View>
            <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                <Card style={{ width: Global.WIDTH - 50, elevation: 10, borderRadius: 15, paddingBottom: 20, paddingTop: 10, paddingLeft: 5 }}>
                    <AuthInput />
                    <AuthInput />
                    <AuthInput />
                </Card>
                <Btn text='LOGIN' style={{ width: Global.WIDTH - 40, height: 50,paddingTop: 5, alignSelf: 'center', marginTop: 20, elevation: 10 }} />
            </View>
        </ScrollView>
    )
}
