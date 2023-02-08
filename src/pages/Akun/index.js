import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MenuAkun from '../../components/MenuAkun'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native';
import ApiManager from '../../api/ApiManager'

const Akun = ({navigation}) => {
  const [auth, setAuth] = useState(false);
  const [userID, setUserID] = useState(null);
  const [data, setData] = useState()
  const [token, setToken] = useState()
  const isFocused = useIsFocused();

  const getToken = async () => {
    const dataToken = await AsyncStorage.getItem("userToken");
    const dataID = await AsyncStorage.getItem("userID");

    if (dataToken){
      setAuth(true);
      setToken(dataToken);
      setUserID(dataID);
    }else{
      setAuth(false);
    }
  }

  const getData = async () => {
    try {
      const res = await ApiManager("/account/" + userID, {
        method: 'GET',
        headers: {
          'content-type': "application/json",
          'Authorization': "Bearer " + token
        } 
      });

      setData(res.data.user);
      console.log(res.data.user);

    } catch (error) {
      if (error.response.status == "401") {
        ToastAndroid.show("Akunmu telah keluar, silahkan login ulang", ToastAndroid.SHORT);
        AsyncStorage.removeItem("userToken");
        setToken("");
        setAuth(false);
      }
        console.log("ERR " + error + " " + token);
    }
  }

  useEffect(() => {
    getToken();
    if (auth == true){
      getData();
    }
  }, [isFocused]);  

  const LogOut = () => {
    AsyncStorage.clear();
    navigation.replace("MainApp");
  }
  
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20, marginBottom:20}}>
        <Text style={styles.title}>Akun</Text>
        <View style={styles.divider}></View>
      </View>

      <ScrollView style={{ }} showsVerticalScrollIndicator={false}>
        {/* <MenuAkun title={"Data Pemesan"} /> */}
        {!auth ? (
          <MenuAkun title={"Login"} onPress={() => navigation.navigate('Login')} />
        ) : (
          <View>
            { data && (
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ fontSize: 20, fontWeight:'bold' }}>{data.name}</Text>
                  <Text style={{ fontSize: 15, fontWeight:'300' }}>{data.email}</Text>
                </View>
            )}
              <View style={styles.divider2}></View>
              <MenuAkun color={'red'} title={"Logout"} onPress={() => LogOut()} />
          </View>
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
  },
  divider2: {
    height: .8,
    backgroundColor: '#bedef7',
    marginTop: 20,
    width: '100%'
  }
})