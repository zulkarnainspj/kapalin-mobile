import ApiManager from "./ApiManager";

export const LoginApi = async data => {
    try{
        const result = await ApiManager("/login", {
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            data:data
        })

        return result;
    }catch (error){
        return error.response.data
    }
}