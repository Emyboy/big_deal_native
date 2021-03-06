import React, { useState } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, View, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import TextInput from '../../components/TextInput/TextInput';
import Global from '../../Global';
import Btn from '../../components/Btn/Btn';
export default ({
    navigation
}) => {
    const [state, setState] = useState({
        loading: false
    })
    return (
        <Content>
            <Form style={styles.form}>
                <View >
                    <Text style={styles.heading}>Signup</Text>
                </View>
                <TextInput
                    editable={!state.loading}
                    label='Username'
                    placeholder='Your Username'
                    autoCompleteType='username'
                    autoFocus={true}
                    // keyboardType={'email-address'}
                />
                <TextInput
                    editable={!state.loading}
                    label='Email'
                    placeholder='Ex. john@mail.com'
                    autoCompleteType='email'
                    keyboardType={'email-address'}
                />
                <TextInput
                    editable={!state.loading}
                    label='Password'
                    placeholder='* * * * * * *'
                    autoCompleteType='password'
                    secureTextEntry={true}
                />
                <Btn
                    text='Signup'
                    onPress={() => { }}
                    loading={state.loading}
                    style={{
                        alignSelf: 'center',
                        width: Global.WIDTH - 40
                    }}
                />
                <Button onPress={() => navigation.navigate('Login')} full transparent style={{ marginTop: 30 }}>
                    <Text style={{ color: Global.THEME_COLOR }}>Login</Text>
                </Button>
            </Form>
        </Content>
    );
}

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
