 import axios from "axios";

 const ApiManager = axios.create({
     baseURL: 'https://kapalin.zulkarnainspj.my.id/api/',
     responseType: 'json',
    //  withCredentials: true,
 });

 export default ApiManager;