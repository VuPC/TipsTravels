import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import BoxImageContent from '../components/BoxImageContent'
import Header from '../components/Header'

export default function PopularDestination(props) {
    const getValueSearch = (search) => {
        console.log('PopularDestination: ',search)
    }

    let ItemPopulars = props.route.params.datas.map((data,index) => {
        return <BoxImageContent key={index} url={data.image} title={data.title} country={data.country} />
    })

    return (
        <View style={styles.container}>
            <Header name="Popular Destination" getValueSearch={getValueSearch} />

            <View style={{ padding: 20, paddingTop: 0, height: '88%' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    { ItemPopulars }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 30,
    },
})
