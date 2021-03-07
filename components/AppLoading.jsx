import { Spinner, View } from 'native-base';
import React from 'react';
import Global from '../Global';


export default () => {
    return (
        <View style={{ flex: 1, paddingTop: Global.WIDTH - 100 }}>
            <Spinner color={Global.THEME_COLOR} />
        </View>
    )
}