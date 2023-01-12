import React, { useState } from "react";
import { GetToken } from "../context/GetToken";
import ApiManager from "./ApiManager";

// const [token, setToken] = useState();
export const OrderApi = async data => {

    try{
        const result = await ApiManager("/order", {
            method:'POST',
            headers:{
                'content-type':"application/json",
                'Authorization': "Bearer " + data.token
            },
            data: data
        })        

        return result;
    }catch (error){
        return error.response.data 
    }
}