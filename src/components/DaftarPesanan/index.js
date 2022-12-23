import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DaftarPesanan = (props) => {
  return (
      <TouchableOpacity style={styles.item}>
          <View style={{}}>
              <Text style={styles.itemTitle}>{props.title}</Text>
              <Text style={styles.route}>{props.route}</Text>
              <Text style={styles.date}>{props.date}</Text>
          </View>
          <View style={{ padding: 10, borderRadius: 20, height: 40, backgroundColor: "#00b894", marginTop: 7 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#f5f6fa' }}>{props.status}</Text>
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