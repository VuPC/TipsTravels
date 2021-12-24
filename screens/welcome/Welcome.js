import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { viewportWidth } from './CarouselCardItem'

const data = [
    {
        imgUrl: require("../../assets/images/welcome/image_slider_01.png")
    },
    {
        imgUrl: require("../../assets/images/welcome/image_slider_02.png")
    },
];

export default function Welcome({navigation}) {
    const [index, setIndex] = useState(0);
    const isCarousel  = useRef(null);

    let tit1 = 'Let’s Travel';
    let tit2 = 'Plan A Trip';
    let txt1 = '1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore';
    let txt2 = '2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit';
    const [title, setTitle] = useState(tit1)
    const [text, setText] = useState(txt1)

    const handleItem = (index) => {
        setIndex(index)
        if(index == 1) {
            setTitle(tit2)
            setText(txt2)
        } else{
            setTitle(tit1)
            setText(txt1)
        }
    }

    const getStart = async () => {
        await AsyncStorage.setItem('isGetStart', JSON.stringify(true));
        navigation.navigate("SignIn");
    }

    return (
        <View style={styles.container}>
            <View style={styles.description}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.itemButton}
                    onPress={getStart}
                >
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>Get started</Text>
                </TouchableOpacity>
            </View>
            <Carousel
                layout={'default'}
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={viewportWidth-40}
                itemWidth={viewportWidth-40}
                slideStyle={{ width: viewportWidth-40 }}
                inactiveSlideOpacity={1}
                onSnapToItem={(index) => handleItem(index)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 150,
        paddingHorizontal: 20,
    },
    description: {
        position: 'absolute',
        top: 40,
        left: 40,
        zIndex: 100,
    },
    title: {
        color: '#312DA4',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        color: '#707070',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        paddingRight: 60,
    },
    itemButton: {
        width: 150,
        backgroundColor: '#F38000',
        padding: 14,
        borderRadius: 30,
        alignItems: 'center',
    },
})
