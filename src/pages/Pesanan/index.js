import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import DaftarPesanan from '../../components/DaftarPesanan'
import axios from 'axios'
import { useIsFocused } from '@react-navigation/native';
import ApiManager from '../../api/ApiManager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

const Pesanan = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState()
  const [auth, setAuth] = useState(true);

  const getData = async () => {
    try {
      let email = await AsyncStorage.getItem('userEmail');
      let token = await AsyncStorage.getItem("userToken");

      const res = await ApiManager("/transaction/" + email, {
        method: 'GET',
        headers: {
          'content-type': "application/json",
          'Authorization': 'Bearer ' + token
        },
        data: data
      });

      setData(res.data.tickets);
      setAuth(true);
    } catch (error) {
      if (error.response.status == "401") {
        setAuth(false);
      } else {
        ToastAndroid.show("Terjadi kesalahan saat mencoba terhubung ke Server", ToastAndroid.SHORT);
      }
    }
  }

  // const getToken = async () => {
  //   const dataToken = await AsyncStorage.getItem("userToken");

  //   if (dataToken) {
  //     setAuth(true);
  //   } else {
  //     setAuth(false);
  //   }
  // }



  useEffect(() => {
    getData();

  }, [isFocused])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesanan</Text>
      <View style={styles.divider}></View>
      <ScrollView style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false}>
        {
          auth ?
            data && data.map((item, i) => {
              var date = new Date(item.created_at);

              return (
                <DaftarPesanan
                  key={i}
                  title={item.ship}
                  route={item.port + ' - ' + item.next_port}
                  date={format(date, "d MMMM y H:mm")}
                  status={item.status}
                  onPress={() => navigation.navigate('Rincian Pesanan', {
                    'code': item.ticket_code,
                  })} />
              )
            })
            :
            (
              <View style={{ marginTop: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Silahkan login untuk melihat pesanan</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#0984e3', padding: 10, marginTop: 20, alignItems: 'center', borderRadius: 5 }}>
                  <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
                </TouchableOpacity>
              </View>
            )
        }
      </ScrollView>
    </View>
  )
}

export default Pesanan

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  divider: {
    height: .8,
    backgroundColor: '#636e72',
    marginTop: 10,
    width: 50
  }
})