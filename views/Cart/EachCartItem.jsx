import { Text, Button } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Global from '../../Global'
import { Image as Img } from 'react-native'


export default function EachCartItem() {
    const [state, setState] = useState({
        add: false
    })
    return (
        <View style={styles.item}>
            <Img
                style={styles.img}
                source={{
                    uri: Global.SHIRT_IMAGE,
                }}
            />
            <View>
                <Text style={styles.title}>cotton shirt</Text>
                <Text style={styles.price}>$63.00</Text>
                {
                    state.add ? <View style={{ borderColor: Global.THEME_COLOR, borderWidth: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 130, alignSelf: 'center', marginTop: 10 }}>
                        <Button full onPress={() => { }} style={{ backgroundColor: null }} transparent>
                            <Text style={{ color: Global.THEME_COLOR }}>-</Text>
                        </Button>
                        <Button disabled full onPress={() => { }} style={{ backgroundColor: Global.BG_COLOR, width: Global.WIDTH - 400 }} transparent>
                            <Text style={{ color: Global.THEME_COLOR, fontSize: 18 }}>5</Text>
                        </Button>
                        <Button full onPress={() => { }} style={{
                            backgroundColor:
                                null
                        }} transparent>
                            <Text style={{ color: Global.THEME_COLOR }}>+</Text>
                        </Button>
                    </View> :
                        <Button full onPress={() => setState({ ...state, add: !state.add })} style={{ backgroundColor: null, borderWidth: 2, borderColor: Global.THEME_COLOR, alignSelf: 'center', width: 100, marginTop: 10 }}>
                            <Text style={{ color: Global.THEME_COLOR, alignSelf: 'center', fontFamily: Global.FONT_REGULAR, fontSize: 15 }}>Add +</Text>
                        </Button>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    price: {
        fontFamily: Global.FONT_REGULAR,
        color: Global.GRAY,
        // marginBottom: Global.HEIGHT - 800
    },
    title: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontFamily: Global.FONT_BOLD,
    },
    item: {
        margin: 6,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Global.GRAY,
        height: 130
    },
    img: {
        height: 120,
        width: 100,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginRight: 20
    }
})
