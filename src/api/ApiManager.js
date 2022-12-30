 import axios from "axios";

 const ApiManager = axios.create({
     baseURL: 'http://172.16.2.195:8000/api/',
     responseType: 'json',
     withCredentials: true,
 });

 export default ApiManager;