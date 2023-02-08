import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ( { navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp')
    }, 3000)
  }, [navigation]);

  return (
    <View style={styles.splash}>
      <View style={styles.titleView}>
        <Text style={styles.title}>KAPALIN</Text>
        <Text style={styles.subtitle}>Rencanakan Perjalananmu Dengan Mudah</Text>
      </View>

      <View style={styles.appVerView}>
        <Text style={styles.appVer}>V 1.0.0</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  splash: {
    flex:1
  },
  titleView: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color:'#0984e3'
  },
  subtitle: {
    fontSize:12
  },
  appVerView: {
    alignItems:'center'
  },
  appVer: {
    position:'absolute',
    bottom:35
  }
})