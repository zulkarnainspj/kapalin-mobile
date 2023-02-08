import React from "react";
import { Image, Text, View, Button, TouchableOpacity } from "react-native";

class ScheduleList extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => console.log(this.props.onPress)} style={{ marginTop: 10, padding: 10, backgroundColor: '#dfe4ea' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 100, height: 100 }} source={require("../assets/img/sanus91.jpg")} />
                    <View style={{ marginHorizontal: 10, width: '68%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{this.props.title}</Text>

                        <View style={{ backgroundColor: '#636e72', padding: 10, marginTop: 37, alignItems: 'center' }}>
                            <Text style={{ color: '#f5f6fa', fontSize: 15 }}>Lihat Jadwal</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ScheduleList;