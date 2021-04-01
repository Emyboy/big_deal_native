import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import Global from '../../Global'
import { useNavigation } from '@react-navigation/native';
import Btn from '../Btn/Btn'
import CartButton from '../CartButton/CartButton'

export default function EachProduct() {
    const navigation = useNavigation();
    return (
        <Card style={styles.card}>
            {/* 
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Card.Cover source={{ uri: Global.SHIRT_IMAGE }} />
            <Card.Content>
            <Text style={styles.title}>New Shirt From The UK</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            </View>
            </Card.Content>
                </TouchableOpacity>
                <Btn text='Add To Cart' />
                <CartButton /> 
            */}
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Card.Cover style={{ marginTop: 20, backgroundColor: 'white' }} source={{ uri: Global.SHIRT_IMAGE }} />
            </TouchableOpacity>
            <Card.Content>
                <Text style={styles.title}>New Shirt From The UK</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>₦255.00</Text>
                    <Text style={styles.discountPrice}>₦455.00</Text>
                </View>
                <Btn style={{ marginTop: 10 }} text='Add To Cart' onPress={() => {}}/>
                {/* <CartButton style={{ marginTop: 10 }}/> */}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 340,
        width: 200,
        margin: 5,
        borderRadius: 10,
    },
    title: {
        fontFamily: Global.FONT_BOLD,
        fontSize: 16,
        color: Global.GRAY_TEXT
    },
    price: {
        fontFamily: Global.FONT_BOLD,
        color: Global.THEME_COLOR,
        fontWeight: 'bold'
    },
    discountPrice: {
        fontFamily: Global.FONT_REGULAR,
        textDecorationLine: 'line-through',
        color: Global.GRAY_TEXT
    }
})
