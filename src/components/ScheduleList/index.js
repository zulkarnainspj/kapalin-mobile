import React from "react";
import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from "react-native";
import { imgSanus91 } from "../../assets/img";

const ScheduleList = (props) => {
  return (
      <TouchableOpacity style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 100, height: 100 }} source={imgSanus91} />
              <View style={{ marginLeft: 8, flex:1}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{props.title}</Text>

                  <View style={{ backgroundColor: '#636e72', padding: 10, marginTop: 37, alignItems: 'center' }}>
                      <Text style={{ color: '#f5f6fa', fontSize: 15 }}>Lihat Jadwal</Text>
                  </View>
              </View>
          </View>
      </TouchableOpacity>
  )
}

export default ScheduleList

const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        marginBottom:5,
        padding: 10,
        borderRadius:10,
        marginHorizontal:5,
        backgroundColor: '#dfe4ea',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.39,
        shadowRadius: 80,
        elevation: 7,
    }
})

