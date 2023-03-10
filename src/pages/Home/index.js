import { StyleSheet, Text, View, StatusBar, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShipList from '../../components/ShipList'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import ApiManager from '../../api/ApiManager'
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation}) => {
  const [data, setData] = useState();
  const [token, setToken] = useState();
  const isFocused = useIsFocused();

  const getToken = async () => {
    const dataToken = await AsyncStorage.getItem("userToken");

    if (dataToken) {
      setToken(dataToken);
    }
  }

  const getData = async () => {
    try {
      const res = await ApiManager("/ship", {
        method: 'GET',
        headers: {
          'content-type': "application/json"
        }
      }); 

      setData(res.data.ships);
    } catch (error) {
      alert(error); 
    }
  }

  // const checkAuth = async () => {
  //   try {
  //     const res = await ApiManager("/check", {
  //       method: 'GET',
  //       headers: {
  //         'content-type': "application/json",
  //         'Authorization': "Bearer " + token
  //       }
  //     });
  //   } catch (error) {
  //     if (token){
  //       ToastAndroid.show("Akunmu telah keluar, silahkan login ulang", ToastAndroid.SHORT);
  //       AsyncStorage.removeItem("userToken");
  //       setToken("");
  //       // navigation.replace("MainApp");
  //     }
  //   }
  // }

  useEffect(() => {
    getToken();
    getData();
    // if (token) {
    //   checkAuth();
    // }
  }, [isFocused])  

  // if (isFocused){
  //   getData();
  // }

  return (
    <ScrollView style={{ marginTop: 50, marginHorizontal: 15 }} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
      <View>
        <Text>Selamat Datang</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Beli tiket mudah, tanpa antri</Text>
        {/* <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Zulkarnain</Text> */}
      </View>

      <View style={{ marginTop: 30, marginBottom:20 }}>
        <Text>Daftar Kapal</Text>
        <View style={{ height: .8, backgroundColor: '#636e72', marginTop: 10, width: 50 }}></View>
        {data && data.map((item, i) => {
          return <ShipList onPress={() => navigation.navigate('Jadwal', {
            'shipID' : item.id,
            'shipName' : item.name
          })} key={i} title={item.name} />
        })}        
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})