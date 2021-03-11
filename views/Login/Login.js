import React, { useState } from 'react';
import { Toast, Content, Form, Text, View, Button } from 'native-base';
import { StyleSheet, ToastAndroid } from 'react-native';
import TextInput from '../../components/TextInput/TextInput';
import Global from '../../Global';
import Btn from '../../components/Btn/Btn';
import { connect } from 'react-redux';
import { login } from "../../redux/actions/auth.action";

const mapDispatch = {
    Login: login
}

const mapState = state => ({
    auth: state.auth
})

export default connect(
    mapState,
    mapDispatch
)(({
    navigation,
    auth,
    Login
}) => {
    const [state, setState] = useState({
        loading: false
    });

    const [data, setData] = useState({
        identifier: null,
        password: null
    })

    const handleSubmit = () => {
        console.log(data);
        if (data.identifier && data.password) {
            Login(data);
        }else {
            ToastAndroid.showWithGravityAndOffset(
                "Please Fill Out The Form",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );

        }
    }

    return (
        <Content>
            <Form style={styles.form}>
                <View >
                    <Text style={styles.heading}>Login</Text>
                </View>
                <TextInput
                    onChangeText={e => setData({
                        ...data,
                        identifier: e
                    })}
                    editable={!auth.loading}
                    label='Email / Username'
                    placeholder='Ex. john@mail.com'
                    autoCompleteType='email'
                    autoFocus={true}
                    keyboardType={'email-address'}
                />
                <TextInput
                    onChangeText={e => setData({
                        ...data,
                        password: e
                    })}
                    editable={!auth.loading}
                    label='Password'
                    placeholder='* * * * * * *'
                    autoCompleteType='password'
                    secureTextEntry={true}
                />
                <Btn
                    text='Login'
                    onPress={() => handleSubmit()}
                    loading={auth.loading}
                    style={{
                        alignSelf: 'center',
                        width: Global.WIDTH - 40
                    }}
                />
                <Button onPress={() => navigation.navigate('Signup')} full transparent style={{ marginTop: 30 }}>
                    <Text style={{ color: Global.THEME_COLOR }}>Register</Text>
                </Button>
            </Form>
        </Content>
    );
});

const styles = StyleSheet.create({
    form: {
        paddingTop: 20,
        fontFamily: Global.FONT_BOLD,
        margin: 20
    },
    heading: {
        textAlign: 'center',
        fontSize: 30
    }
})
