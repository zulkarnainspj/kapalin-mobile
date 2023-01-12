import { Button, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { LoginApi } from '../../api/LoginApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NumericInput from 'react-native-numeric-input'
import { RadioButton } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns'
import { OrderApi } from '../../api/OrderApi'
import { useIsFocused } from '@react-navigation/native'
import { GetToken } from '../../context/GetToken'

const DataPenumpang = ({ route, navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState();
    const isFocused = useIsFocused();

    const pnp = [
        { id: 0, name: "", gender: "", doh: "" },
        { id: 1, name: "", gender: "", doh: "" },
        { id: 2, name: "", gender: "", doh: "" },
        { id: 3, name: "", gender: "", doh: "" },
        { id: 4, name: "", gender: "", doh: "" },
    ]
    const [penumpang, setPenumpang] = useState(pnp);
    
    const psgName = [
        { id: 0, name: "" },
        { id: 1, name: "" },
        { id: 2, name: "" },
        { id: 3, name: "" },
        { id: 4, name: "" },
    ];

    const [psgrName, setPsgrName] = useState(psgName);

    const tgl = [
        { id: 0, pick: false, date: new Date() },
        { id: 1, pick: false, date: new Date() },
        { id: 2, pick: false, date: new Date() },
        { id: 3, pick: false, date: new Date() },
        { id: 4, pick: false, date: new Date() },
    ]

    const [date, setDate] = useState(tgl);

    const jenisKelamin = [
        { id:0, checked:"pria" },
        { id:1, checked:"pria" },
        { id:2, checked:"pria" },
        { id:3, checked:"pria" },
        { id:4, checked:"pria" },
    ]
    const [jk, setJK] = useState(jenisKelamin);

    // const order = () => {
    //     if (penumpang > 0) {
    //         navigation.navigate("DataPenumpang", {
    //             userName: route.params.userName,
    //             userEmail: route.params.userEmail,
    //             ship: route.params.ship,
    //             routes: route.params.routes,
    //             date: route.params.date,
    //             scheduleID: route.params.scheduleID,
    //             jumlahPenumpang: penumpang,
    //         });
    //     }
    // }
    const ambilToken = async => {
        GetToken().then((token) => {
            setToken(token)
        });
    }

    useEffect(() => {
        ambilToken();
    }, [isFocused])  
    

    const showDatePicker = (id) => {
        if (id >= 0) {
            const newState = date.map(obj => {
                if (obj.id === id) {
                    return { ...obj, pick: true };
                }

                return obj;
            });

            setDate(newState);
        }
    };

    const onDateSelected = (value, id) => {
        const newState = date.map(obj => {
            if (obj.id === id) {
                return { ...obj, pick: false, date: value };
            }

            return obj;
        });

        setDate(newState);
    };

    const updateJK = (id, value) => {
        const newState = jk.map(obj => {
            if (obj.id === id) {
                return { ...obj, checked: value };
            }

            return obj;
        });

        setJK(newState);
    };

    const generateData = () => {
        for (let i = 0; i < route.params.jumlahPenumpang; i++) {
            const newState = penumpang.map(obj => {
                if (obj.id === i) {
                    return { ...penumpang, id:i, name: psgrName[i].name, gender: jk[i].checked, doh: format(date[i].date, "dd/MM/y") };
                }

                return obj;
            });
            setPenumpang(newState);
            console.log(psgrName[i].name)
        }
    }

    const order = () => {  
        generateData();      
        OrderApi({
            dataPenumpang : penumpang,
            jumlah : route.params.jumlahPenumpang,
            token : token
        }).then((result) => {
            if (result.status == 200) {
                console.log(result.data);
            } else {
                if (result.success == false){
                    ToastAndroid.show(result.message, ToastAndroid.SHORT)
                    navigation.replace("MainApp");
                }else{
                    console.log(result)
                }
            }

        }).catch(error => {
            alert(error);
        })
    }

    const addName = (id, name) => {
        const newState = psgrName.map(obj => {
            if (obj.id === id) {
                return { ...obj, name: name };
            }

            return obj;
        });

        setPsgrName(newState);
        console.log(psgrName);
    };

    const dtPenumpang= [];

    for (let i = 0; i < route.params.jumlahPenumpang; i++) {
        dtPenumpang.push( 
            <View key={i}>
                <Text style={{ fontSize:15, marginBottom:5 }}>Penumpang {i+1}</Text>
                <TextInput onChangeText={text => addName(i,text)} placeholder="Nama Lengkap" style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color: 'black' }}  />
                <Text style={{ marginTop: 10, fontSize: 15 }}>Jenis Kelamin</Text>

                <View style={{ flexDirection:'row', paddingLeft:5 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => updateJK(i, 'pria')}>
                        <RadioButton
                            value="pria"
                            status={jk[i].checked === 'pria' ? 'checked' : 'unchecked'} 
                            onPress={() => updateJK(i, 'pria')}/>
                        <Text style={{ fontSize: 20, marginRight: 20 }}>Pria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => updateJK(i, 'wanita')}>
                        <RadioButton
                            value="wanita" 
                            status={jk[i].checked === 'wanita' ? 'checked' : 'unchecked'} 
                            onPress={() => updateJK(i, 'wanita')}/>
                        <Text style={{ fontSize: 20, marginRight: 20 }}>Wanita</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ marginVertical: 10, fontSize: 15 }}>Tanggal Lahir</Text> 


                {date[i].pick && (
                    <DateTimePicker
                        value={date[i].date}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={(e, value) => onDateSelected(value, i)}
                    />
                )}     
                              
                <View style={{ flexDirection:'row', flex:1, marginBottom:20 }}>
                    <TouchableOpacity onPress={() => showDatePicker(i)} >
                        <TextInput style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color: 'black', width: 150, marginRight: 20 }} value={date[i].date ? (format(date[i].date, "dd/MM/y")) : '' }  editable={false} />
                    </TouchableOpacity>
                </View>

            </View>
        )
        
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 5, fontWeight:'bold' }}>Pemesan</Text>
                    <View>
                        <Text style={{ fontSize: 15, marginBottom: 5 }}>Nama</Text>
                        <TextInput value={route.params.userName} editable={false} style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color: 'black' }} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 15, marginBottom: 5 }}>Email</Text>
                        <TextInput value={route.params.userEmail} editable={false} style={{ padding: 10, borderWidth: 1, borderColor: '#0984e3', fontSize: 17, borderRadius: 5, color: 'black' }} />
                    </View>

                    <View style={{ height: .8, backgroundColor: '#636e72', marginVertical:20, flex:1 }}></View>

                    <Text style={{ fontSize: 20, marginBottom: 5, fontWeight: 'bold' }}>Penumpang</Text>
                    {dtPenumpang}

                    <TouchableOpacity onPress={() => order()} style={{ backgroundColor: '#0984e3', padding: 10, marginTop: 20, alignItems: 'center', borderRadius: 5 }}>
                        <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 17 }}>Lanjut</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default DataPenumpang

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