import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'

export default function SelectCountry() {
    const [country, setCountry] = useState("Country")
    const [showSelect, setShowSelect] = useState(false)
    const { listSelectCategories } = useSelector(state => state.categoryReducer.stateCategories)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.boxSelect}
                onPress={() => {
                    setShowSelect(!showSelect)
                }}
            >
                <Text style={{ color: '#ffffff', fontSize: 16 }}>{country}</Text>
                <Icon name={ showSelect ? "arrow-up" : "arrow-down" } size={16} color="#ffffff" 
                    style={{
                        position: 'absolute',
                        right: 10
                    }}
                />
            </TouchableOpacity>
            { showSelect 
                ? <CountryInfo
                    listSelectCate={listSelectCategories}
                    setCountry={setCountry} 
                    setShowSelect={setShowSelect}
                    />
                : <></>}
        </View>
    )
}

const CountryItem = ({url, value, setCountry, setShowSelect}) => (
    <TouchableOpacity 
        activeOpacity={1}
        style={styles.country}
        onPress={() =>  {
            setCountry(value)
            setShowSelect(false)
        }}
    >
        <Image
            source={{uri: url}}
            style={{
                width: 30,
                height: 16,
                marginRight: 10
            }}
            resizeMode='cover'
        />
        <Text style={{ fontSize: 16 }}>{value}</Text>
    </TouchableOpacity>
)

const CountryInfo = ({listSelectCate, setCountry, setShowSelect}) => {
    if(listSelectCate == undefined) {
        return null
    } else {
        let ItemCountry = listSelectCate.map((data,index) => {
            return <CountryItem 
                        key={index} url={data.image} 
                        value={data.name} setCountry={setCountry} 
                        setShowSelect={setShowSelect}
                    />
        })

        return <View style={styles.select}>{ ItemCountry }</View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxSelect: {
        backgroundColor: '#F38000',
        width: 140,
        height: 40,
        padding: 10,
        borderRadius: 6,
        justifyContent: 'center',
        marginBottom: 6
    },
    select: {
        backgroundColor: '#ffffff',
        borderRadius: 6,
        flexDirection: 'column',
        borderWidth: 1,
        width: 150
    },
    country: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 14,
        alignItems: 'center',
        width: 150
    }
})
