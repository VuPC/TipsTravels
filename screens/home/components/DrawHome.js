import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import GlobalDataModel from '../../../data/DataCommon'
import LineBorder from '../../components/LineBorder'

export default function DrawHome({ handleDrawHome }) {
    return (
        <TouchableOpacity 
            activeOpacity={1} 
            style={styles.container} 
            onPress={() => handleDrawHome('')}
        >
            <View style={styles.draw}>
                <View style={{
                    backgroundColor: '#F38000',
                    paddingHorizontal: 20,
                    paddingVertical: 14,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image 
                        source={{uri: 'https://www.hridaymitracardiaclinic.com/wp-content/uploads/2017/09/male-512.png'}}
                        resizeMode='cover'
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            marginRight: 20
                        }}
                    />
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>Hello, DrawHome</Text>
                </View>
                <View>
                    <ItemLists handleDrawHome={handleDrawHome} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Item = ({ item, handleDrawHome }) => (
    <View>
        <TouchableOpacity
            activeOpacity={1}
            style={{ padding: 20 }}
            onPress={() => handleDrawHome(item.route)}
        >
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
        </TouchableOpacity>
        <LineBorder width={1} />
    </View>
)

const ItemLists = ({ handleDrawHome }) => (
    GlobalDataModel.listDrawHome.map((item,index) => {
        return <Item key={index} item={item} handleDrawHome={handleDrawHome} />
    })
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52,52,52,.7)',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
    },
    draw: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: '70%',
    }
})
