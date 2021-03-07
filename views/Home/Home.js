import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { ScrollView } from 'react-native';
import EachCategory from '../../components/EachCategory/EachCategory';
import Heading from '../../components/Heading/Heading';
import { View } from 'native-base';
import Layout from '../../components/Layout/Layout';

export default function Home({
    navigation,
}) {
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
                        <EachCategory />
                        <EachCategory />
                        <EachCategory />
                        <EachCategory />
                        <EachCategory />
                    </ScrollView>
                </View>
                <Heading heading='Best Sellers' />
                <View>
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal
                    >
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                    </ScrollView>
                </View>
                {/* <View style={{ padding: 3 }}>
            <ScrollView
              scrollEventThrottle={16}
              horizontal
            >
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
            </ScrollView>
          </View> */}
                <Heading heading='Recently Added' />
                <View>
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal
                    >
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                        <ProductCard onPress={() => navigation.navigate('Details')} />
                    </ScrollView>
                </View>
            </ScrollView>
        </Layout>
    )
}
