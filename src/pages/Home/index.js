import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShipList from '../../components/ShipList'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

const Home = ({navigation}) => {
  const [data, setData] = useState()

  const getData = async () => {
    try {
      const res = await axios.get('http://172.16.2.206:8000/api/ship'); 

      setData(res.data.ships);
    } catch (error) {
      alert(error); 
    }
  }

  useEffect(() => {
    getData();
  }, [])

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