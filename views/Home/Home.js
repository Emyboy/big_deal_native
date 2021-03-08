import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { ScrollView, Image } from 'react-native';
import EachCategory from '../../components/EachCategory/EachCategory';
import Heading from '../../components/Heading/Heading';
import { Container, Text, View } from 'native-base';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { getAllCategories } from '../../redux/actions/view.action';
import axios from 'axios';
import Global from '../../Global';
import Btn from '../../components/Btn/Btn'


const mapState = state => ({
    view: state.view
})

const mapAction = {
    GetAllCategories: getAllCategories
}

export default connect(
    mapState,
    mapAction
)(({
    view,
    navigation,
    GetAllCategories
}) => {

    const [state, setState] = useState({
        products: [],
        loading: false
    });

    const getProducts = () => {
        axios(Global.API_URL + '/products')
            .then(res => {
                setState({
                    ...state,
                    products: res.data
                })
            })
            .catch(err => {
                alert('error getting products')
            })
    }

    useEffect(() => {
        getProducts()
        GetAllCategories();
    }, [])
    // console.log('VIEW -', view)
    return (
        <Layout
            nav={navigation}
        >
            <ScrollView style={{ marginBottom: 10 }}>
                <View style={{ padding: 3 }}>
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal
                    >
                        {/* <EachCategory data={{ name: 'Ramdom' }} /> */}
                        {
                            view.categories.map((val, i) => {
                                return <EachCategory key={i} data={val} />
                            })
                        }
                    </ScrollView>
                </View>
                <Heading heading='Best Sellers' />
                <View>
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal
                    >
                        {
                            state.products.map((val, i) => {
                                return <ProductCard key={i} data={val} />
                            })
                        }
                    </ScrollView>
                </View>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: Global.WIDTH, height: 110 }}
                        // width={20}
                        height={20}
                    />
                    <Text style={{ fontFamily: Global.FONT_BOLD, textAlign: 'center', fontSize: 20, color: Global.GRAY }}>
                        Create Your Own Store Today
                    </Text>
                    <Btn
                        text='Create Store'
                        onPress={() => { }}
                        style={{
                            marginTop: 0,
                            width: Global.WIDTH - 100,
                            alignSelf: 'center',
                            height: 30,
                            marginTop: 10
                        }}
                    />
                </View>
                <Heading heading='Recently Added' />
                <View>
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal
                    >
                        {
                            state.products.map((val, i) => {
                                return <ProductCard key={i} data={val} />
                            })
                        }
                    </ScrollView>
                </View>
                <Image
                    source={require('../../assets/img/1.jpg')}
                    style={{ width: Global.WIDTH, height: 100 }}
                    width={20}
                    height={20}
                />
            </ScrollView>
        </Layout>
    )
});
