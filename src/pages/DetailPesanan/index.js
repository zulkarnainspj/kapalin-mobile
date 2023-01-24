import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const DetailPesanan = ({ route, navigation }) => {

    const onError = (error) => {
        alert("Terjadi kesalahan, silahkan coba lagi")
        navigation.goBack();
    }

    return (
        <WebView
            source={{ uri: 'https://kapalin.zulkarnainspj.my.id/cus/' +route.params.code }}
            onLoad={(event) => {
                navigation.setOptions({
                    headerTitle: event.nativeEvent.title, // get webpage title 
                });
            }}
            onError={err => onError(err)} />
    )

}

export default DetailPesanan