import React, { Component } from "react"
import { Text, View, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import {Home, Pesanan, Akun, Jadwal} from '../../../pages'
const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            >
            <Stack.Screen name="Home" component={BottomTabs} />
            <Stack.Screen name="Jadwal" component={Jadwal} />
        </Stack.Navigator>
    )
}

const BottomTabs = () => {
    return (
        <MaterialBottom.Navigator
            shifting={false}
            initialRouteName="Home"
            activeColor="#0984E3"
            inactiveColor="#b2bec3"
            barStyle={{ backgroundColor: '#ffffff' }}
        >
            <MaterialBottom.Screen name="Dashboard" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            <Image source={require('../../icon/nav-home.png')} style={{ height: 30, width: 30 }} />
                        </View>
                    )
                }}
            />
            <MaterialBottom.Screen name="Pesanan" component={Pesanan}
                options={{
                    tabBarLabel: 'Pesanan',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            <Image source={require('../../icon/nav-pesanan.png')} style={{ height: 30, width: 30 }} />
                        </View>
                    )
                }}
            />
            <MaterialBottom.Screen name="Akun" component={Akun}
                options={{
                    tabBarLabel: 'Akun',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            <Image source={require('../../icon/nav-akun.png')} style={{ height: 30, width: 30 }} />
                        </View>
                    )
                }}
            />
        </MaterialBottom.Navigator>
    )
}

export default class index extends Component {
    render() {
        return (
            <NavigationContainer>
                <HomeStack />
            </NavigationContainer>
        )
    }
}