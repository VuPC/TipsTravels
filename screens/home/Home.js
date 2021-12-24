import React, { useState } from 'react'
import { 
    StyleSheet, Text, View, TouchableOpacity,
    TextInput, Image
} from 'react-native'
import { useSelector } from 'react-redux'
import firebase from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Timeline from './components/Timeline'

export default function Home({navigation}) {
    const { isLogin, name } = useSelector(state => state.loginReducer.auth)
    const [search, setSearch] = useState('')

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            AsyncStorage.setItem('isLogin', JSON.stringify(false));
            AsyncStorage.setItem('isGetStart', JSON.stringify(false));
            navigation.replace("SignIn");
        }).catch(error => {
            console.log(error.message);
        })
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            left: 0,
                        }}
                        activeOpacity={1}
                        onPress={() => console.log('aa')}
                    >
                        <Image
                            style={{
                                tintColor: '#F38000',
                                resizeMode: "contain",
                                height: 30,
                                width: 30
                            }}
                            source={require('../../assets/images/icons/icon_hamburger.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>Home</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image
                        style={{
                            tintColor: '#F38000',
                            resizeMode: "contain",
                            height: 25,
                            width: 25,
                            position: 'absolute',
                            left: 14,
                            zIndex: 10,
                        }}
                        source={require('../../assets/images/icons/icon_search.png')}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.inputSearch}
                        placeholder="Search"
                        onChangeText={(search) => setSearch(search)}
                    />
                </View>
            </View>

            <View
                style={{
                    borderBottomColor: '#EDEDED',
                    borderBottomWidth: 1,
                    marginVertical: 15,
                }}
            />

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

            <View
                style={{
                    borderBottomColor: '#EDEDED',
                    borderBottomWidth: 1,
                    marginTop: 15,
                }}
            />

            <Timeline />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 30,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleHeader: {
        color: '#F38000',
        fontSize: 26,
        fontWeight: 'bold',
    },
    inputSearch: {
        backgroundColor: '#EDEDED',
        padding: 10,
        fontSize: 18,
        borderRadius: 8,
        paddingLeft: 50,
        color: '#BCBCBC'
    }
})
