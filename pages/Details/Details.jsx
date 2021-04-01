import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Card } from 'react-native-paper'
import Btn from '../../components/Btn/Btn'
import Header from '../../components/Header/Header'
import Global from '../../Global'
import { AntDesign } from '@expo/vector-icons';

export default function Details() {
    const [state, setState] = useState({
        display: 'product'
    })
    return (
        <View>
            <Header type='back' />
            <View>
                <ScrollView>
                    <View style={{ backgroundColor: 'white', padding: 10 }}>
                        <Image
                            width={90}
                            height={90}
                            style={{ alignSelf: 'center', width: 230, height: 230, borderRadius: 20 }}
                            source={{ uri: Global.SHIRT_IMAGE }}
                        />
                    </View>
                    <Card style={{ backgroundColor: Global.GRAY, marginTop: 20 }}>
                        <View style={styles.tab}>
                            <TouchableOpacity onPress={() => setState({ ...state, display: 'product' })}>
                                <Card style={styles.tabBtn}>
                                    <Text style={{ ...styles.tagBtnText, color: state.display === 'product' ? Global.THEME_COLOR : 'black' }}>Product</Text>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setState({ ...state, display: 'details' })}>
                                <Card style={styles.tabBtn}>
                                    <Text style={{ ...styles.tagBtnText, color: state.display === 'details' ? Global.THEME_COLOR : 'black' }}>Details</Text>
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setState({ ...state, display: 'reviews' })}>
                                <Card style={styles.tabBtn}>
                                    <Text style={{ ...styles.tagBtnText, color: state.display === 'reviews' ? Global.THEME_COLOR : 'black' }}>Reviews</Text>
                                </Card>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 30 }}>
                            {
                                state.display === 'details' ? <Card.Content>
                                    <Text style={styles.des}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, odit voluptate architecto, nobis doloribus pariatur illum exercitationem vel officia voluptas hic repellat perferendis, dignissimos laudantium nostrum velit id saepe nam?</Text>
                                    <Btn text='Add To Cart' style={{ width: Global.WIDTH - 100, alignSelf: 'center' }} />
                                </Card.Content> : null
                            }
                            {
                                state.display === 'product' ? <Card.Content>
                                    <Text style={styles.heading}>SELECT COLOR</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                        <View style={{ ...styles.circle, backgroundColor: '#fe8c68', shadowColor: '#fe8c68' }}></View>
                                        <View style={{ ...styles.circle, backgroundColor: '#f04d98' }}><AntDesign name="checkcircleo" size={24} color='white' /></View>
                                        <View style={{ ...styles.circle, backgroundColor: '#67b5f7' }}></View>
                                        <View style={{ ...styles.circle, backgroundColor: '#3e3a39' }}></View>
                                    </View>
                                    <Text style={{...styles.heading, marginTop: 20 }}>SELECT SIZE UK</Text>
                                    <ScrollView horizontal style={{ height: 90 }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10, height: 70 }}>
                                            <Card style={styles.eachSize}>
                                                <Text style={styles.sizeText}>4.5</Text>
                                            </Card>
                                            <Card style={styles.eachSizeActive}>
                                                <Text style={styles.sizeTextActive}>4.5</Text>
                                            </Card>
                                            <Card style={styles.eachSize}>
                                                <Text style={styles.sizeText}>4.5</Text>
                                            </Card>
                                            <Card style={styles.eachSize}>
                                                <Text style={styles.sizeText}>4.5</Text>
                                            </Card>

                                            <Card style={styles.eachSize}>
                                                <Text style={styles.sizeText}>4.5</Text>
                                            </Card>
                                        </View>
                                    </ScrollView>
                                </Card.Content> : null
                            }
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: 20 }}>
                            <AntDesign name="hearto" size={30} color="black" style={{ marginTop: 10 }} />
                            <AntDesign name="heart" size={30} color={Global.THEME_COLOR} style={{ marginTop: 10 }} />
                            <Button style={styles.cartBtn}>
                                <Text style={{ color: 'white', fontFamily: Global.FONT_BOLD, fontSize: 15 }}>ADD TO CART</Text>
                            </Button>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartBtn: {
        backgroundColor: Global.THEME_COLOR,
        borderRadius: 20,
        padding: 10,
        // width: Global.WIDTH - 100
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: Global.FONT_BOLD
    },
    des: {
        fontFamily: Global.FONT_REGULAR,
        color: Global.GRAY_TEXT,
        textAlign: 'center',
        marginBottom: 20
    },
    tab: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tabBtn: {
        margin: 5,
        borderRadius: 10
    },
    tagBtnText: {
        padding: 8,
        fontFamily: Global.FONT_REGULAR
    },
    heading: {
        fontFamily: Global.FONT_REGULAR,
        color: Global.GRAY_TEXT
    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

        // shadowColor: "yellow",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,

        elevation: 10,
    },
    sizeText: {
        fontFamily: Global.FONT_BOLD,
        fontSize: 18,
        padding: 10
    },
    sizeTextActive: {
        fontFamily: Global.FONT_BOLD,
        fontSize: 18,
        padding: 10,
        color: Global.THEME_COLOR
    },
    eachSize: {
        width: 80,
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,

        shadowColor: "#f0eff5",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        // shadowOpacity: 1.74,
        shadowRadius: 6.87,

        elevation: 10,
    },
    eachSizeActive: {
        width: 80,
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    }
})
