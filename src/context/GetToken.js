import AsyncStorage from "@react-native-async-storage/async-storage";


export const GetToken = async () => {

    const dataToken = await AsyncStorage.getItem("userToken")
    const token = dataToken;

    return token;
}