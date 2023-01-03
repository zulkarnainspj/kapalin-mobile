import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import DaftarPesanan from '../../components/DaftarPesanan'
import axios from 'axios'
import { useIsFocused } from '@react-navigation/native';

const Pesanan = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesanan</Text>
      <View style={styles.divider}></View>
      <ScrollView style={{ marginBottom:50 }} showsVerticalScrollIndicator={false}>
        <DaftarPesanan onPress={() => {console.log('halo')}} title="KM. Sabuk Nusantara 92" route="Sapeken - Pagerungan Besar" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 115" route="Sapeken - Tanjung Wangi" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 51" route="Sapeken - Kalianget" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 51" route="Sapeken - Kalianget" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 51" route="Sapeken - Kalianget" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 51" route="Sapeken - Kalianget" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 51" route="Sapeken - Kalianget" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 51" route="Sapeken - Kalianget" date="16 Desember 2022 15:13" status="Selesai" />
        <DaftarPesanan title="KM. Sabuk Nusantara 51" route="Sapeken - Kalianget" date="16 Desember 2022 15:13" status="Selesai" />
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