import React, { useState } from 'react'
import { Card, CardItem, Button, Row, Text, View, Body, Col } from "native-base";
import { Image as Img } from 'react-native'
import Global from '../../Global';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductCard({
    onPress
}) {
    const [state, setState] = useState({
        add: false
    })
    return (
        <React.Fragment>
            <Card transparent style={{
                height: Global.HEIGHT - 350, padding: 10, width: 200,
                backgroundColor: 'white'
            }}
            >
                <CardItem cardBody>
                    <Col>
                        <TouchableOpacity onPress={onPress}>
                            <Img
                                // style={{ height: Global.HEIGHT - 600, width: Global.WIDTH - 270, }}
                                style={{ height: 200, width: 180 }}
                                source={{
                                    uri: Global.SHIRT_IMAGE,
                                }}
                            />
                            <View style={{ padding: 0, display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                <AntDesign name="star" size={20} color={Global.THEME_COLOR} />
                                <AntDesign name="star" size={20} color={Global.THEME_COLOR} />
                                <AntDesign name="staro" size={20} color={Global.THEME_COLOR} />
                                <AntDesign name="staro" size={20} color={Global.THEME_COLOR} />
                            </View>
                            <Text style={{ color: Global.GRAY, fontFamily: Global.FONT_REGULAR, marginBottom: 10 }}>reader will be distracted.</Text>
                        </TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textDecorationLine: 'line-through', color: Global.GRAY, fontFamily: Global.FONT_REGULAR }}>$ 56.21</Text>
                            <Text style={{ color: Global.THEME_COLOR, marginLeft: Global.WIDTH - 700, fontFamily: Global.FONT_REGULAR }}>$ 24.05</Text>
                        </View>
                        {
                            state.add ? <View style={{ borderColor: Global.THEME_COLOR, borderWidth: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 130, marginBottom: 5, alignSelf:'center' }}>
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
                                <Button full onPress={() => setState({ ...state, add: !state.add })} style={{ backgroundColor: null, borderWidth: 2, borderColor: Global.THEME_COLOR, alignSelf: 'center', width: 130, marginBottom: 10 }}>
                                    <Text style={{ color: Global.THEME_COLOR, alignSelf: 'center', fontFamily: Global.FONT_REGULAR, fontSize: 15 }}>Add +</Text>
                                </Button>
                        }

                    </Col>
                </CardItem>
                <View style={{
                    backgroundColor: Global.THEME_COLOR, borderRadius: 44 / 2, width: 55,
                    height: 47, position: 'absolute', padding: 10, margin: 10
                }}>
                    <Text style={{ color: 'white', fontFamily: Global.FONT_REGULAR }}>New</Text>
                </View>
            </Card>
        </React.Fragment>
    )
}
