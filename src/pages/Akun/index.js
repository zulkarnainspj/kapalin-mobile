import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MenuAkun from '../../components/MenuAkun'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native';

const Akun = ({navigation}) => {
  const [auth, setAuth] = useState(false);
  const isFocused = useIsFocused();

  const getToken = async () => {
    const dataToken = await AsyncStorage.getItem("userToken");

    if (dataToken){
      setAuth(true);
    }
  }

  useEffect(() => {
    getToken();
  }, [isFocused]);

  const LogOut = () => {
    AsyncStorage.removeItem("userToken");
    navigation.replace("MainApp");
  }
  
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20, marginBottom:20}}>
        <Text style={styles.title}>Akun</Text>
        <View style={styles.divider}></View>
      </View>

      <ScrollView style={{ }} showsVerticalScrollIndicator={false}>
        <MenuAkun title={"Data Pemesan"} />
        {!auth ? (
          <MenuAkun title={"Login"} onPress={() => navigation.navigate('Login')} />
        ) : (
          <MenuAkun color={'red'} title={"Logout"} onPress={() => LogOut()} />
        ) }
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