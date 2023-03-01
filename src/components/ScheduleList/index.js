import React from "react";
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, TextComponent } from "react-native";
import { imgSanus91 } from "../../assets/img";


const ScheduleList = (props) => {
    function formatRupiah(angka, prefix){
        var number_string = angka.toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if (ribuan) {
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }
  return (
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
              {/* <Image style={{ width: 100, height: 100, marginVertical:6 }} source={imgSanus91} /> */}
              <View style={{ marginLeft: 8, flex:1}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.title}</Text>
                  <Text style={{ fontSize: 15, marginTop: 5 }}>{props.date}</Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>{formatRupiah(props.price, "Rp. ")}/orang ({props.kelas})</Text>

                  <View style={{ backgroundColor: '#636e72', padding: 10, marginTop: 10, alignItems: 'center' }}>
                      <Text style={{ color: '#f5f6fa', fontSize: 15 }}>Pesan Tiket</Text>
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

