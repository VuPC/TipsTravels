import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import firebase from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {
    const navigation = useNavigation();
    const { isLogin, name } = useSelector(state => state.loginReducer.auth);

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
        <View>
            <Text>Name: { name }</Text>
            <Text>Email: { firebase.auth().currentUser?.email }</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
            <Button title="About" onPress={() => navigation.navigate("About")} />
            
        </View>
    )
}

const styles = StyleSheet.create({})
