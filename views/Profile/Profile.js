import { Text, View } from 'native-base'
import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'
import Btn from '../../components/Btn/Btn'
import Global from '../../Global'

export default function Profile({
    navigation
}) {
    return (
        <ScrollView style={{margin: 20 }}>
            <View style={styles.avatar}>
                <Image
                    style={{ height: 150, width: 150 }}
                    source={{
                        uri: 'http://formatoselectronicos.com/Dashboard/modern/resources/images/icon_user_cancel.png',
                    }}
                />
            </View>
            <Text style={styles.username}>Username</Text>
            <Text style={styles.email}>Email@mail.com</Text>
            <Btn 
                text='Logout'
                onPress={() => navigation.navigate('Login')}
            />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20
    },
    username: {
        fontFamily: Global.FONT_REGULAR,
        fontSize: 20,
        textAlign: 'center'
    },
    email: {
        color: Global.GRAY,
        fontSize: 15,
        textAlign: 'center'
    }
})
