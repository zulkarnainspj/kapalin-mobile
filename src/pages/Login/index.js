import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import DaftarPesanan from '../../components/DaftarPesanan'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { LoginApi } from '../../api/LoginApi'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const LoginHandle = () => {
        LoginApi({
            email: email,
            password: password,
        }).then((result) => {
            if (result.status == 200){
                AsyncStorage.setItem("userToken", result.data.token);
                navigation.replace('MainApp');
            }else{
                alert(result.message);
            }
        }).catch(error => {
            alert(error);
        })
        
    }
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Login</Text>
            <View style={styles.divider}></View> */}
            <ScrollView style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={{ marginVertical: 20 }}>
                    <TextInput onChangeText={text => setEmail(text)} style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5 }} placeholder="Email" keyboardType='text' />
                    <TextInput onChangeText={text => setPassword(text)}  style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', marginTop: 20, fontSize: 17, borderRadius: 5 }} secureTextEntry={true} placeholder="Password" keyboardType='text' />
                    <TouchableOpacity onPress={() => LoginHandle()} style={{ backgroundColor: '#0984e3', padding: 10, marginTop: 20, alignItems:'center', borderRadius:5 }}>
                            <Text style={{ color : '#ffff', fontWeight:'bold', fontSize:17 }}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection:'row', marginTop:50, justifyContent:'center', flex:1 }}>
                        <Text>Belum punya akun? </Text>
                        <Text style={{ color: '#0984e3' }} onPress={() => navigation.navigate('Daftar')}>DAFTAR</Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 10,
        paddingHorizontal: 15,
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