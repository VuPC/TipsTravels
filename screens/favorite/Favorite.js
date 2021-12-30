import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function Favorite() {
    const listSelectCategories = useSelector(state => state.categoryReducer.stateCategories.listSelectCategories)
    console.log('Favorite: ', listSelectCategories)
    return (
        <View><Text>Favorite</Text></View>
    )
}

const styles = StyleSheet.create({})
