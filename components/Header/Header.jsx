import * as React from 'react';
import { Appbar, Card, Text } from 'react-native-paper';
import Global from '../../Global';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SearchInput from '../SearchInput/SearchInput';
import { Feather } from '@expo/vector-icons';

const Header = ({
    type,
    back
}) => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    const Component = () => {
        switch (type) {
            case 'search':
                return <Card.Content style={styles.header}>
                    <View style={{ marginRight: 10 }}>
                        <Ionicons style={styles.icon} name="chevron-back" size={24} color={Global.THEME_COLOR} />
                    </View>
                    <SearchInput />
                    <View>
                        <Feather style={{ ...styles.icon, marginLeft: 10 }} name="filter" size={24} />
                    </View>
                </Card.Content>
            case 'back':
                return <Card.Content style={{ ...styles.header, justifyContent: 'space-between' }}>
                    <View style={{ marginRight: 10 }}>
                        <Ionicons onPress={back} style={styles.icon} name="chevron-back" size={30} color={Global.THEME_COLOR} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: Global.FONT_REGULAR, color: Global.GRAY_TEXT }}>Name Of The Product</Text>
                        <Text style={{ fontFamily: Global.FONT_BOLD }}>₦456.00</Text>
                    </View>
                    <View>
                        <Feather style={{ ...styles.icon, marginLeft: 10 }} name="filter" size={24} />
                    </View>
                </Card.Content>
            default:
                return <Card.Content style={{...styles.header, justifyContent: 'space-between'}}>
                    <Entypo name="menu" size={24} color={Global.THEME_COLOR} />
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <AntDesign name="shoppingcart" size={24} color={"black"} />
                        <AntDesign name="user" size={24} color={"black"} style={{ marginLeft: 15 }} />
                    </View>
                </Card.Content>
        }
    }
    return <Card>
        <Component />
    </Card>
    // return (
    //     <Appbar.Header 
    //     style={{
    //         backgroundColor: 'white',
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         paddingLeft: 10,
    //         paddingRight: 10
    //     }}>
    //         <Entypo name="menu" size={24} color={"black"} />
    //         {/* <Text>hi</Text> */}
    //         <View style={{ display: 'flex', flexDirection: 'row' }}>
    //             <AntDesign name="shoppingcart" size={24} color={"black"} />
    //             <AntDesign name="user" size={24} color={"black"} style={{ marginLeft: 15 }} />
    //         </View>
    //     </Appbar.Header>
    // );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        // justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 40,
        backgroundColor: 'white',
        paddingBottom: 10,
        width: Global.WIDTH,
    },
    icon: {
        marginTop: 10
    }
})

export default Header;