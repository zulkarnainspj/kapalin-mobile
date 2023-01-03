import React, { useState } from "react";

export const CheckAuth = () => {
    const [auth, setAuth] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const getToken = async () => {
        const dataToken = await AsyncStorage.getItem("userToken");

        if (dataToken) {
            setAuth(true);            
        }
    }

    return auth;
}