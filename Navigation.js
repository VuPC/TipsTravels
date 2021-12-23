import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './screens/auth/Login'
import Home from './screens/home/Home'

export default function RootNavigation() {
    
    const Stack = createStackNavigator()
    const screenOptions = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}