import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const DataPenumpang = ({ route, navigation }) => {

    const onError = (error) => {
        alert("Terjadi kesalahan, silahkan coba lagi")
        navigation.goBack();
    }

    return (
        <WebView 
            source={{ uri: 'https://kapalin.zulkarnainspj.my.id/cus/order/' + route.params.jumlahPenumpang + '/' + route.params.userEmail + '/' + route.params.scheduleID }} 
            onLoad={(event) => {
                navigation.setOptions({
                    headerTitle: event.nativeEvent.title, // get webpage title 
                });
            }}
            onError={err => onError(err)} /> 
    )

}

export default DataPenumpang