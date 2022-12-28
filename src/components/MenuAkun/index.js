import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"


const MenuAkun = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ flexDirection: 'row', marginTop: 1, paddingHorizontal: 20, backgroundColor: '#ffffff', paddingVertical: 20, flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20 }}>{props.title}</Text>
            </View>
            <Icon name="angle-right" size={30} color="#0984e3" />
        </TouchableOpacity>
    )
}

export default MenuAkun