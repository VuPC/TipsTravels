import React, { useState } from 'react'
import {
    StyleSheet, Text, View,
    TouchableOpacity, Image, TextInput,
} from 'react-native'

import firebase from '../../firebase'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email.trim(),password)
            .then((userCredentials) => {
                console.log(userCredentials.user.email);
                navigation.replace("SignIn")
            }).catch((error) => {
                console.log(error.message);
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
                    onPress={handleSignUp}
                >
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.signIn}>
                    <Text style={{ color: '#253570', fontWeight: 'bold' }}>Are you already have an account?</Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.replace("SignIn")}
                    >
                        <Text style={{
                            color: '#253570',
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 10
                        }}>Sign In</Text>
                    </TouchableOpacity>
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
    signIn: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image_bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        left: 0,
        bottom: 0
    }
})
