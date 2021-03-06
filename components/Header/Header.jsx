import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Global from '../../Global';
import { AntDesign } from '@expo/vector-icons';

export default () => {
    return (
        <Header transparent style={{ backgroundColor: 'white' }}>
            <Left>
                <Button transparent>
                    <Icon style={{ color: Global.THEME_COLOR }} name='menu' />
                </Button>
            </Left>
            <Body>
                <Title style={{ color: Global.THEME_COLOR, fontFamily: Global.FONT_REGULAR }}>Header</Title>
            </Body>
            <Right>
                <Button transparent>
                    <AntDesign style={{ color: Global.THEME_COLOR }} name="shoppingcart" size={24} color="black" />
                </Button>
                <Button transparent>
                    <AntDesign style={{ color: Global.THEME_COLOR }}  name="user" size={24} color="black" />
                </Button>
            </Right>
        </Header>
    );
}