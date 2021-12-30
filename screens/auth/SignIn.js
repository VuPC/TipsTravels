import React, { useState } from 'react'
import {
    StyleSheet, Text, View,
    TextInput, TouchableOpacity, Alert, Image,
} from 'react-native'

import { SocialIcon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'

import firebase from '../../firebase'

export default function SignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email.trim(), password)
            .then((userCredentials) => {
                console.log('user: ', userCredentials.user);
                console.log('email: ', userCredentials.user.email);
                AsyncStorage.setItem('isLogin', JSON.stringify(true));
                navigation.navigate("HomeTabs");
            }).catch((error) => {
                console.log(error.message);
                console.log("Authentication failed");
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/image_travel.jpg')}
                    resizeMode="cover"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.itemButton}
                    onPress={handleSignIn}
                >
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => console.log('Forgot password')}
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text style={{
                        color: '#253570',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.groupSignUp}>
                    <View style={styles.signinSocial}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => Alert.alert('Sign In Facebook')}
                        >
                            <SocialIcon
                                raised={false}
                                iconSize={20}
                                type='facebook'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => Alert.alert('Sign In Google')}
                        >
                            <SocialIcon
                                raised={false}
                                iconSize={20}
                                type='google'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signUp}>
                        <Text style={{ color: '#253570', fontWeight: 'bold' }}>Don't have an account?</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            <Text style={{
                                color: '#253570',
                                fontSize: 16,
                                fontWeight: 'bold',
                                marginLeft: 10
                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.image_bg}>
                <Image
                    style={{
                        width: '100%',
                        height: 400,
                    }}
                    source={require('../../assets/images/image_bg.png')}
                    resizeMode="cover"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    form: {
        padding: 20,
        zIndex: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    input: {
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        fontSize: 16,
        backgroundColor: '#edf0f7'
    },
    itemButton: {
        backgroundColor: '#F38000',
        padding: 16,
        borderRadius: 30,
        marginBottom: 25,
        alignItems: 'center',
    },
    groupSignUp: {
        marginTop: 40,
        alignItems: 'center'
    },
    signinSocial: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    signUp: {
        flexDirection: 'row',
    },
    image_bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        left: 0,
        bottom: 0
    }
})
