import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MenuAkun from '../../components/MenuAkun'

const Akun = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20, marginBottom:20}}>
        <Text style={styles.title}>Akun</Text>
        <View style={styles.divider}></View>
      </View>

      <ScrollView style={{ }} showsVerticalScrollIndicator={false}>
        <MenuAkun title={"Data Pemesan"} />
        <MenuAkun title={"Login"} onPress={() => navigation.navigate('Login')} />
      </ScrollView>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor:'#ffff'
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