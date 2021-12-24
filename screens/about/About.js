import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export default function About() {
    const navigation = useNavigation();
    const { isLogin, name } = useSelector(state => state.loginReducer.auth);

    return (
        <View>
            <Text>name: {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
