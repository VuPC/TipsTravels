import React from 'react'
import { StyleSheet, View } from 'react-native'
import { color } from 'react-native-reanimated'

export default function LineBorder({ clr, width, top, bottom }) {
    return (
        <View
            style={{
                borderBottomColor: clr ? clr : '#EDEDED',
                borderBottomWidth: width ? width : 1,
                marginTop: top,
                marginBottom: bottom
            }}
        />
    )
}

const styles = StyleSheet.create({})
