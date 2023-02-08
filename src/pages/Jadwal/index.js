import { StyleSheet, Text, View, StatusBar, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScheduleList from '../../components/ScheduleList'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { format } from 'date-fns'
import ApiManager from '../../api/ApiManager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CheckAuth } from '../../context/CheckAuth'

const Schedule = ({ route, navigation }, props) => {
    const [data, setData] = useState()
    const [auth, setAuth] = useState(false);
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [token, setToken] = useState();

    const getData = async () => {
        try {
            const res = await ApiManager("/ship/" + route.params.shipID, {
                method: 'GET',
                headers: {
                    'content-type': "application/json"
                },
                data: data
            });

            setData(res.data.schedule);
        } catch (error) {
            alert(error);
        }
    }

    const getToken = async () => {
        const dataToken = await AsyncStorage.getItem("userToken");
        const dataName = await AsyncStorage.getItem("userName");
        const dataEmail = await AsyncStorage.getItem("userEmail");

        if (dataToken) {
            setAuth(true);

            setUserName(dataName);
            setUserEmail(dataEmail);
            setToken(dataToken);
        }
    }

    const checkAuth = async () => {
        try {
            const res = await ApiManager("/check", {
                method: 'GET',
                headers: {
                    'content-type': "application/json",
                    'Authorization': "Bearer " + token
                }
            });
        } catch (error) {
            if (error.response.status == "401") {
                ToastAndroid.show("Akunmu telah keluar, silahkan login ulang", ToastAndroid.SHORT);
                AsyncStorage.removeItem("userToken");
                setToken("");
                setAuth(false);
                // navigation.replace("MainApp");
            }
        }
    }

    useEffect(() => {
        getData();
        getToken();
    }, [])

    const Orders = (routes, date, ship, scheduleID) => {
        checkAuth();
        if (!auth) {
            ToastAndroid.show("Kamu belum Login!", ToastAndroid.SHORT);
        } else {
            navigation.navigate("Pesan", {
                userName: userName,
                userEmail: userEmail,
                ship: ship,
                routes: routes,
                date: date,
                scheduleID: scheduleID,
            });
        }
    }

    return (
        <ScrollView style={{ marginTop: 15, marginHorizontal: 15 }} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
            <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{route.params.shipName}</Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text>Jadwal Terbaru</Text>
                <View style={{ height: .8, backgroundColor: '#636e72', marginTop: 10, width: 50 }}></View>
                {data && data.map((item, i) => {
                    var date = new Date(item.etd);

                    return <ScheduleList
                        key={i}
                        title={item.route.port.name + ' - ' + item.route.next_port.name}
                        date={format(date, "d MMMM y H:mm")}
                        price={item.price}
                        onPress={() => Orders(item.route.port.name + ' - ' + item.route.next_port.name, format(date, "d MMMM y H:mm"), route.params.shipName, item.id)}
                    />
                })}
            </View>
        </ScrollView>

    )
}

export default Schedule

const styles = StyleSheet.create({})