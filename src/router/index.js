import React, { useContext } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Jadwal, Splash, Beranda, Pesanan, Akun, Login, Register, Pesan, DataPenumpang } from '../pages';
import { BottomNavigator } from '../components';
import { navAkun, navAkunActive, navPesanan, navPesananActive, navHome, navHomeActive } from '../assets/icon'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext, AuthProvider } from '../context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#0984e3"
    }}>
      <Tab.Screen name="Beranda" component={Beranda} options={{
        tabBarIcon: ({ color }) => (
          <View style={{}}>
            <Icon name="home" size={30} color={color} />
          </View>
        )
      }} />
      <Tab.Screen name="Pesanan" component={Pesanan} options={{
        tabBarIcon: ({ color }) => (
          <View style={{}}>
            <Icon name="assignment" size={30} color={color} />
          </View>
        )
      }} />
      <Tab.Screen name="Akun" component={Akun} options={{
        tabBarIcon: ({ color }) => (
          <View style={{}}>
            <Icon name="person" size={30} color={color} />
          </View>
        )
      }} />
    </Tab.Navigator>
  )
}

const Router = () => {
  // if (isLoading) {
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <ActivityIndicator size={'large'} />
  //   </View>
  // }

  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >

        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        <Stack.Screen name="Jadwal" component={Jadwal} options={{}} />
        <Stack.Screen name="Login" component={Login} options={{}} />
        <Stack.Screen name="Daftar" component={Register} options={{}} />
        <Stack.Screen name="Pesan" component={Pesan} options={{}} />
        <Stack.Screen name="Data Penumpang" component={DataPenumpang} options={{}} />

    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})