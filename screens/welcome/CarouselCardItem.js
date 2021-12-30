import React from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native'

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

const CarouselCardItem = ({ item }) => {
    return (
        <Image
            source={item.imgUrl}
            style={styles.image}
            resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
})

export default CarouselCardItem;