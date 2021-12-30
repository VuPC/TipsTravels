import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

export default function BoxImageContent({url, title, country}) {
    return <BoxImage url={url} title={title} country={country} />
}

const BoxImage = ({url, title, country}) => (
    <TouchableOpacity
        activeOpacity={1}
        onPress={() => console.log('Box Image')}
        style={{
            borderRadius: 15,
            borderWidth: 2,
            borderColor: '#EDEDED',
            marginBottom: 15
        }}
    >
        <ImageLink url={url} />
        <Description title={title} country={country} />
    </TouchableOpacity>
)

const ImageLink = ({url}) => (
    <Image
        style={{
            width: '100%',
            height: 160,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
        }}
        source={{ uri: url}}
        resizeMode="cover"
    />
)

const Description = ({title,country}) => (
    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5
        }}>{title}</Text>
        <Text style={{ fontSize: 16 }}>{country}</Text>
    </View>
)

const styles = StyleSheet.create({})
