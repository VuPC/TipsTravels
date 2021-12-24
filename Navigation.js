import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

import Welcome from './screens/welcome/Welcome'
import Lauch from './screens/auth/Lauch'
import SignIn from './screens/auth/SignIn'
import SignUp from './screens/auth/SignUp'
import Home from './screens/home/Home'
import About from './screens/about/About'

export default function RootNavigation() {
    const Stack = createStackNavigator()
    
    const screenOptions = {
        headerShown: false
    }

    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Lauch" screenOptions={screenOptions}>
                    <Stack.Screen name="Lauch" component={Lauch} />
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="About" component={About} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}