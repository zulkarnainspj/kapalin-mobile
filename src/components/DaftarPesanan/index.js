import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const DaftarPesanan = (props) => {
    let ticket_status = "";
    let status_color = "";

    if (props.status == "1"){
        ticket_status = "Dipesan";
        status_color = "#3498db";
    } else if (props.status == "2") {
        ticket_status = "Checkin";
        status_color = "#f39c12";
    } else if (props.status == "3") {
        ticket_status = "Selesai";
        status_color = "#2ecc71";
    } else if (props.status == "0") {
        ticket_status = "Batal";
        status_color = "#e74c3c";
    } else if (props.status == "expired"){
        ticket_status = "Kadaluarsa";
        status_color = "#e74c3c";
    } else if (props.status == "pending") {
        ticket_status = "Pending";
        status_color = "#2d3436";
    }
  return (
      <TouchableOpacity style={styles.item} onPress={props.onPress}>
          <View style={{}}>
              <Text style={styles.itemTitle}>{props.title}</Text>
              <Text style={styles.route}>{props.route}</Text>
              <Text style={styles.date}>{props.date}</Text>
          </View>
          <View style={{ padding: 10, borderRadius: 20, height: 40, backgroundColor: status_color, marginTop: 7 }}>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#f5f6fa' }}>{ticket_status}</Text>
          </View>
      </TouchableOpacity>
  )
}

export default DaftarPesanan

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',  // <==== HERE
        padding: 17,
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.39,
        shadowRadius: 80,
        elevation: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 10
    }
})