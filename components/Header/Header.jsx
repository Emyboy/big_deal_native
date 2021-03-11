import React, { useEffect } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Global from '../../Global';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const mapState = state => ({
    auth: state.auth
})

export default connect(
    mapState
)((props) => {
    const { nav, back, auth } = props;
    const userExist = auth.userData;
    console.log(auth)

    useEffect(() => {
        
    }, [auth])

    return (
        <Header androidStatusBarColor={Global.THEME_COLOR} transparent style={{ backgroundColor: 'white' }}>
            <Left>
                <Button transparent>
                    {
                        back ? <Ionicons onPress={() => nav.goBack()} name="arrow-back" size={24} color={Global.THEME_COLOR} /> :
                            <Icon style={{ color: Global.THEME_COLOR }} name='menu' />
                    }
                </Button>
            </Left>
            <Body>
                {/* <Title style={{ color: Global.THEME_COLOR, fontFamily: Global.FONT_REGULAR }}>Header</Title> */}
            </Body>
            <Right>
                <Button transparent>
                    <AntDesign onPress={() => nav.navigate('Cart')} style={{ color: Global.THEME_COLOR }} name="shoppingcart" size={24} />
                </Button>
                <Button transparent>
                    <AntDesign onPress={() => nav.navigate(userExist ? 'Profile' : 'Login')} style={{ color: Global.THEME_COLOR }} name="user" size={24} color="black" />
                </Button>
            </Right>
        </Header>
    );
});
