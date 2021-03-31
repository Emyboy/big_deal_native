import { ActivityIndicator, View } from "react-native";
import React from 'react';
import Global from '../Global';


export default () => {
    return (
        <View style={{ flex: 1, paddingTop: Global.WIDTH - 100 }}>
            {/* <Spinner color={Global.THEME_COLOR} /> */}
            <ActivityIndicator size="large" color={Global.THEME_COLOR} />
        </View>
    )
}