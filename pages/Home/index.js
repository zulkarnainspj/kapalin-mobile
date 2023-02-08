import React, { Component } from "react";
import { View, Text, Image, StatusBar } from "react-native"
import ScheduleList from "../../components/ScheduleList"
import { useNavigation } from "@react-navigation/native";
const navigation = useNavigation();

class Home extends Component { 
    render() {

        return (
            <View style={{ marginTop: 50, marginHorizontal: 15 }}>
                <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
                <View>
                    <Text>Selamat Datang</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Beli tiket mudah, tanpa antri</Text>
                    {/* <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Zulkarnain</Text> */}
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text>Jadwal Kapal Terbaru</Text>
                    <View style={{ height: .8, backgroundColor: '#636e72', marginTop: 10, width: 50 }}></View>
                    <ScheduleList title="KM. Sabuk Nusantara 92" onPress={() => navigation.navigate('Jadwal')} />
                </View>
            </View>
        )
    }
}

export default Home;
