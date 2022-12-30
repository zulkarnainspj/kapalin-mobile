import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScheduleList from '../../components/ScheduleList'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { format } from 'date-fns'
import ApiManager from '../../api/ApiManager'

const Schedule = ({ route, navigation }, props) => {
    const [data, setData] = useState()

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

    useEffect(() => {
        getData();
    }, [])

    

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
                    />
                })}
            </View>
        </ScrollView>

    )
}

export default Schedule

const styles = StyleSheet.create({})