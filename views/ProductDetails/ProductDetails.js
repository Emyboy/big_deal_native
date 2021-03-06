import { View, Text, Button } from 'native-base'
import React, { useState } from 'react'
import { Image as Img, ScrollView, StyleSheet } from 'react-native'
import Global from '../../Global'
import EachImage from './EachImage'

export default function ProductDetails() {
    const [state, setState] = useState({
        add: false
    })
    return (
        <ScrollView style={{ margin: 10, marginBottom: 80, marginTop: 1 }}>
            <Img
                style={{ height: Global.HEIGHT - 400, width: Global.WIDTH - 600, }}
                source={{
                    uri: Global.SHIRT_IMAGE,
                }}
            />
            <ScrollView
                horizontal
            >
                <EachImage />
                <EachImage />
                <EachImage />
                <EachImage />
            </ScrollView>
            <Text style={styles.title}>Women Pink Shirt</Text>
            <View style={styles.priceView}>
                <Text style={styles.discountPrice}>$459.00</Text>
                <Text style={styles.price}>$459.00</Text>
            </View>
            <View style={styles.colors}>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
            </View>
            <View style={{ borderTopWidth: 1, borderColor: Global.GRAY }}></View>
            <View style={styles.sizeHeading}>
                <Text style={styles.sizeHeadingText}>select size </Text>
                <Text style={{ ...styles.sizeHeadingText, color: Global.THEME_COLOR }}>size chart</Text>
            </View>
            <View style={{ ...styles.colors, marginBottom: 15 }}>
                <View style={{ ...styles.circle, borderWidth: 1, borderColor: Global.GRAY, backgroundColor: '#ddd', padding: 12, width: 50, height: 50 }}>
                    <Text style={{ fontFamily: Global.FONT_BOLD, fontSize: 18 }}>XL</Text>
                </View>
                <View style={{ ...styles.circle, borderWidth: 1, borderColor: Global.GRAY, backgroundColor: null, padding: 12, width: 50, height: 50 }}>
                    <Text style={{ fontFamily: Global.FONT_BOLD, fontSize: 18 }}>XL</Text>
                </View>
                <View style={{ ...styles.circle, borderWidth: 1, borderColor: Global.GRAY, backgroundColor: null, padding: 12, width: 50, height: 50 }}>
                    <Text style={{ fontFamily: Global.FONT_BOLD, fontSize: 18 }}>XL</Text>
                </View>
            </View>
            <Text style={{ alignSelf: 'center', fontSize: 18, fontFamily: Global.FONT_BOLD, marginBottom: 10}}>Quantity</Text>
            {
                state.add ? <View style={{ borderColor: Global.THEME_COLOR, borderWidth: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: Global.WIDTH - 300, alignSelf: 'center' }}>
                    <Button full onPress={() => { }} style={{ backgroundColor: null }} transparent>
                        <Text style={{ color: Global.THEME_COLOR }}>-</Text>
                    </Button>
                    <Button disabled full onPress={() => { }} style={{ backgroundColor: 'white', width: Global.WIDTH - 400 }} transparent>
                        <Text style={{ color: Global.THEME_COLOR, fontSize: 18 }}>5</Text>
                    </Button>
                    <Button full onPress={() => { }} style={{
                        backgroundColor:
                            null
                    }} transparent>
                        <Text style={{ color: Global.THEME_COLOR }}>+</Text>
                    </Button>
                </View> :
                    <Button full onPress={() => setState({ ...state, add: !state.add })} style={{ backgroundColor: null, borderWidth: 2, borderColor: Global.THEME_COLOR, alignSelf: 'center', width: Global.WIDTH - 300 }}>
                        <Text style={{ color: Global.THEME_COLOR, alignSelf: 'center', fontFamily: Global.FONT_REGULAR, fontSize: 15 }}>Add +</Text>
                    </Button>
            }
            <View style={{ borderTopWidth: 1, borderColor: Global.GRAY, marginTop: 25 }}></View>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: Global.FONT_BOLD, marginBottom: 10, marginTop: 20 }}>Product Details</Text>
            <Text style={styles.details}>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    details: {
        fontFamily: Global.FONT_REGULAR,
        fontSize: 18,
        color: Global.GRAY,
        textAlign: 'center'
    },
    sizeHeadingText: {
        fontSize: 20,
        textTransform:'capitalize',
        fontFamily: Global.FONT_BOLD,
    },
    sizeHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: Global.FONT_REGULAR,
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20
    },
    priceView: {
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-evenly'
    },
    price: {
        fontFamily: Global.FONT_BOLD, fontSize: 10,
        fontSize: 25
    },
    discountPrice: {
        textDecorationLine: 'line-through',
        fontFamily: Global.FONT_REGULAR,
        color: Global.GRAY,
        fontSize: 18
    },
    colors: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 100,
        backgroundColor: '#d0edff',
        margin: 10
    }
})
