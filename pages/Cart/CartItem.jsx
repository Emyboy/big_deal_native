import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Global from '../../Global'

export default function CartItem() {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: Global.SHIRT_IMAGE }} height={100} width={100} style={styles.image} />
                </View>
                <View style={styles.right}>
                    <Text style={styles.title}>New Shirt From The UK</Text>
                    <Text style={styles.subTitle}>This is just another text</Text>
                    <Text style={styles.price}>₦255.00</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    right: {
        marginTop: 20,
        paddingLeft: 10
    },  
    title: {
        fontSize: 16,
        color: Global.BLACK,
        fontFamily: Global.FONT_BOLD
    },
    subTitle: {
        fontSize: 14,
        color: Global.GRAY_TEXT,
        fontFamily: Global.FONT_REGULAR
    },
    price: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        color: Global.THEME_COLOR,
        fontFamily: Global.FONT_BOLD
    },
    image: {
        width: 70,
        height: 70,
        // backgroundColor: 'white',
        // borderRadius: 100,
        padding: 30
    },
    imageContainer: {
        backgroundColor: 'white',
        width: 110,
        height: 110,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        margin: 6
    }
})
