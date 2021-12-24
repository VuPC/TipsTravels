import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Lauch() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                await AsyncStorage.getItem('isGetStart', function (err, value) {
                    var isGetStart = JSON.parse(value);
                    if (isGetStart) {
                        (async () => {
                            await AsyncStorage.getItem('isLogin', function (err, value) {
                                var isLogin = JSON.parse(value);
                                if (isLogin) {
                                    navigation.navigate("Home");
                                } else {
                                    navigation.navigate("SignIn");
                                }
                            })
                        })();
                    } else {
                        navigation.navigate("Welcome");
                    }
                })
            })();
            }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/background_lauch.jpg')}
                resizeMode="cover"
                style={styles.background}
            >
                <View style={styles.text}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        textTransform:'uppercase'
                    }}>Hello</Text>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 10,
                    }}>Welcome to Tips Travels</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    text: {
        alignItems: 'center',
        marginTop: 140,
        color: '#253570',
    },
})
