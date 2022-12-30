import ApiManager from "./ApiManager";

export const RegisterApi = async data => {
    try {
        const result = await ApiManager("/register", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            data: data
        })

        return result;
    } catch (error) {
        return error.response.data
    }
}