import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

import Welcome from './screens/welcome/Welcome'
import Lauch from './screens/auth/Lauch'
import SignIn from './screens/auth/SignIn'
import SignUp from './screens/auth/SignUp'
import Home from './screens/home/Home'
import Category from './screens/category/Category'
import Profile from './screens/profile/Profile'
import Favorite from './screens/favorite/Favorite'
import Post from './screens/post/Post'
import PopularDestination from './screens/home/PopularDestination'

export default function RootNavigation() {
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()

    const CustomTabBarButton = ({ children, onPress }) => (
        <TouchableOpacity
            activeOpacity={1}
            style={{
                top: -40,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 35,
                backgroundColor: '#F38000'
            }}>{children}</View>
        </TouchableOpacity>
    )

    const HomeTabs = () => {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 16,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 15,
                        height: 80,
                        ...styles.shadow
                    }
                }}
            >
                <Tab.Screen 
                    name="Home Tab" 
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Image
                                    source={require('./assets/images/icons/icon_home.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#F38000' : '#748c94'
                                    }}
                                />
                                <Text style={{ color: focused ? '#F38000' : '#748c94', fontSize: 12 }}>HOME</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Category Tab" 
                    component={Category}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Image
                                    source={require('./assets/images/icons/icon_categorize.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#F38000' : '#748c94'
                                    }}
                                />
                                <Text style={{ color: focused ? '#F38000' : '#748c94', fontSize: 12 }}>CATEGORY</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Post" component={Post}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <Image
                                source={require('./assets/images/icons/icon_plus.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: '#ffffff'
                                }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <CustomTabBarButton {...props} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Favorite Tab" 
                    component={Favorite}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Image
                                    source={require('./assets/images/icons/icon_favorites.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#F38000' : '#748c94'
                                    }}
                                />
                                <Text style={{ color: focused ? '#F38000' : '#748c94', fontSize: 12 }}>FAVORITE</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Profile Tab" 
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Image
                                    source={require('./assets/images/icons/icon_profile.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#F38000' : '#748c94'
                                    }}
                                />
                                <Text style={{ color: focused ? '#F38000' : '#748c94', fontSize: 12 }}>PROFILE</Text>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }

    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Lauch" component={Lauch} />
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="PopularDestination" component={PopularDestination} />
                    <Stack.Screen name="HomeTabs" component={HomeTabs} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#F38000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})