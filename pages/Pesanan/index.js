import React, { Component } from "react";
import { View, Text, Image, StatusBar } from "react-native"
import ScheduleList from "../../components/ScheduleList"

class Pesanan extends Component {
    render() {
        return (
            <View style={{ marginTop: 50, marginHorizontal: 15 }}>
                <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
                <View>
                    <Text>Hello World</Text>
                </View>
            </View>
        )
    }
}

export default Pesanan;
