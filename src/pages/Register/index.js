import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RegisterApi } from '../../api/RegisterApi'
// import { RadioButton } from 'react-native-paper'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [errorName, setErrorName] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    // const [checked, setChecked] = useState('pria');

    const RegisterHandle = () => {
        RegisterApi({
            name: name,
            email: email,
            password: password,
        }).then((result) => {
            if (result.status == 200) {
                alert("Pendaftaran berhasil, silahkan Login!");
                navigation.navigate('Login');
            } else {
                setErrorName(result.name ? result.name : null);
                setErrorEmail(result.email ? result.email : null);
                setErrorPassword(result.password ? result.password : null);
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
                    <TextInput onChangeText={text => setName(text)} style={{ padding: 10, borderWidth: 1, borderColor: errorName ? 'red' : '#0984e3', fontSize: 17, borderRadius: 5 }} placeholder="Nama Lengkap" keyboardType='text' />
                    {errorName ? (
                        <Text style={{ color:'red' }}>{errorName}</Text>
                    ) : ''}

                    <TextInput onChangeText={text => setEmail(text)} style={{ padding: 10, borderWidth: 1, borderColor: errorEmail ? 'red' : '#0984e3', marginTop: 20, fontSize: 17, borderRadius: 5 }} placeholder="Email" keyboardType='text' />
                    {errorEmail ? (
                        <Text style={{ color: 'red' }}>{errorEmail}</Text>
                    ) : ''}

                    <TextInput onChangeText={text => setPassword(text)} style={{ padding: 10, borderWidth: 1, borderColor: errorPassword ? 'red' : '#0984e3', marginTop: 20, fontSize: 17, borderRadius: 5 }} secureTextEntry={true} placeholder="Password" keyboardType='text' />
                    {errorPassword ? (
                        <Text style={{ color: 'red' }}>{errorPassword}</Text>
                    ) : ''}

                    {/* <Text style={{ marginTop:20 }}>Jenis Kelamin</Text>

                    <View style={{ flexDirection:'row', paddingLeft:5 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => setChecked('pria')}>
                            <RadioButton
                                value="pria"
                                status={checked === 'pria' ? 'checked' : 'unchecked'} 
                                onPress={() => setChecked('pria')}/>
                            <Text style={{ fontSize: 20, marginRight: 20 }}>Pria</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => setChecked('wanita')}>
                            <RadioButton
                                value="wanita"
                                status={checked === 'wanita' ? 'checked' : 'unchecked'} 
                                onPress={() => setChecked('wanita')}/>
                            <Text style={{ fontSize: 20, marginRight: 20 }}>Wanita</Text>
                        </TouchableOpacity>
                    </View> */}
                    


                    <TouchableOpacity onPress={() => RegisterHandle()} style={{ backgroundColor: '#0984e3', padding: 10, marginTop: 20, alignItems: 'center', borderRadius: 5 }}>
                        <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 17 }}>Daftar</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'center', flex: 1 }}>
                        <Text>Sudah punya akun? </Text>
                        <Text style={{ color: '#0984e3' }} onPress={() => navigation.navigate('Login') }>LOGIN</Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Login

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