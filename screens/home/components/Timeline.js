import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BoxImageContent from '../../components/BoxImageContent'
import LineBorder from '../../components/LineBorder'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Timeline({ listPopular, listExplore, listCategories }) {
    return (
        <View style={{ height: '74%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ShowPost datas={listCategories} />
                <PopularDestination datas={listPopular} />
                <Explore datas={listExplore} />
            </ScrollView>
        </View>
    )
}

const ShowPost = ({ datas }) => {
    return (
        <View>
            <LineBorder bottom={20} />
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => console.log('post')}
                style={{
                    paddingHorizontal: 20, 
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>Show post</Text>
                <Icon name="arrow-right" size={25} color="#F38000" 
                    style={{
                        position: 'absolute',
                        right: 20
                    }}
                />
            </TouchableOpacity>
            <LineBorder top={20} bottom={20} />
            <ScrollImageHorizontal datas={datas} />
        </View>
    )
}

const ImageHorizontal = ({url,country}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => console.log('hi')}
            style={{ marginRight: 10 }}
        >
            <ImageBackground
                source={{ uri: url}}
                resizeMode="cover"
                imageStyle={{ borderRadius: 6 }}
                style={{
                    width: 140,
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>{country}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const ScrollImageHorizontal = ({ datas }) => {
    let ItemImage = datas.map((data,index) => {
        return <ImageHorizontal key={index} url={data.image} country={data.country} />
    })

    return (
        <View
            onLayout={event => {
                const layout = event.nativeEvent.layout;
                console.log('height:', layout.height);
                console.log('width:', layout.width);
            }}
            style={{ paddingHorizontal: 20 }}
        >
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                onScroll={({nativeEvent}) => {
                    // console.log(nativeEvent.contentOffset.x);
                }}
                scrollEventThrottle={400}
            >
                { ItemImage }
            </ScrollView>
        </View>
    )
}

const PopularDestination = ({ datas }) => {
    const navigation = useNavigation()

    let ItemPopulars = datas.map((data,index) => {
        if(index < 2) return <BoxImageContent key={index} url={data.image} title={data.title} country={data.country} />
    })
  
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                <View style={{ width: '80%' }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Popular Destination</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate('PopularDestination', {datas})}
                    style={{
                        width: '20%',
                        alignItems: 'flex-end'
                    }}
                >
                    <Text style={{ fontSize: 16, color: '#BCBCBC' }}>View All</Text>
                </TouchableOpacity>
            </View>
                { ItemPopulars }
        </View>
    )
}

const Explore = ({ datas }) => {
    let ItemExplores = datas.map((data,index) => {
        return <BoxImageContent key={index} url={data.image} title={data.title} country={data.country} />
    })

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 20
            }}>Explore</Text>
            { ItemExplores }
        </View>
    )
}

const styles = StyleSheet.create({})
