import React from 'react'
import Global from '../../Global'
import { Image } from 'react-native'

export default function EachImage() {
    return (
        <Image
            style={{ width: 130, height: 130, margin: 10 }}
            source={{
                uri: Global.SHIRT_IMAGE,
            }}
        />
    )
}
