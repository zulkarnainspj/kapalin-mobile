import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { LoginApi } from '../../api/LoginApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NumericInput from 'react-native-numeric-input'

const Pesan = ({ route, navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [penumpang, setPenumpang] = useState();       

    // const LoginHandle = () => {
    //     LoginApi({
    //         email: email,
    //         password: password,
    //     }).then((result) => {
    //         if (result.status == 200) {
    //             AsyncStorage.setItem("userToken", result.data.token);
    //             AsyncStorage.setItem("userName", result.data.user.name);
    //             AsyncStorage.setItem("userEmail", result.data.user.email);
    //             navigation.replace('MainApp');
    //         } else {
    //             alert(result.message);
    //         }
    //     }).catch(error => {
    //         alert(error);
    //     })
    // }    

    const order = () => {
        if (penumpang > 0){
            navigation.navigate("DataPenumpang", {
                userName: route.params.userName,
                userEmail: route.params.userEmail,
                ship: route.params.ship,
                routes: route.params.routes,
                date: route.params.date,
                scheduleID: route.params.scheduleID,
                jumlahPenumpang:penumpang,
            });
        }
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Login</Text>
            <View style={styles.divider}></View> */}
            <ScrollView style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={{ marginVertical: 20 }}>
                    <View>
                        <Text style={{ marginBottom:5, fontSize:20 }}>Kapal</Text>
                        <TextInput style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color:'black' }} editable={false} value={route.params.ship} />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 5, fontSize: 20 }}>Rute</Text>
                        <TextInput style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color: 'black' }} editable={false} value={route.params.routes} />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 5, fontSize: 20 }}>Keberangkatan</Text>
                        <TextInput style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color: 'black' }} editable={false} value={route.params.date} />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 5, fontSize: 20 }}>Jumlah Penumpang</Text>
                        <View style={{ justifyContent:'flex-start', flex:1, flexDirection:'row' }}>
                            {/* <Button onPress={plus()}>+</Button> */}                            
                            <NumericInput editable={false} onChange={value => setPenumpang(value)} maxValue={5} minValue={0} style={{ padding: 10, width: 50, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color: 'black' }} />                            
                        </View>
                    </View>
            
                    <TouchableOpacity onPress={() => order()} style={{ backgroundColor: '#0984e3', padding: 10, marginTop: 20, alignItems: 'center', borderRadius: 5 }}>
                        <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 17 }}>Lanjut</Text>
                    </TouchableOpacity>
                    
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Pesan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ffff'
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