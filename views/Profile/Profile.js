import { Text, View } from 'native-base'
import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import Btn from '../../components/Btn/Btn'
import Global from '../../Global';
import { logout } from '../../redux/actions/auth.action'

const mapState = state => ({
    auth: state.auth
})

const mapDispatch = {
    Logout: logout
}

export default connect(
    mapState,
    mapDispatch,
)(({
    navigation,
    Logout,
    auth
}) => {
    const { userData } = auth;
    return (
        <ScrollView style={{margin: 20 }}>
            {userData ? <>
                <View style={styles.avatar}>
                    <Image
                        style={{ height: 150, width: 150 }}
                        source={{
                            uri: 'http://formatoselectronicos.com/Dashboard/modern/resources/images/icon_user_cancel.png',
                        }}
                    />
                </View>
                <Text style={styles.username}>{userData.user.username}</Text>
                <Text style={styles.email}>{userData.user.email}</Text>
                <Btn
                    text='Logout'
                    onPress={() => Logout()}
                />
            </>:null}
        </ScrollView>
    )
})


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
