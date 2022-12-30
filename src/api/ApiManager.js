 import axios from "axios";

 const ApiManager = axios.create({
     baseURL: 'http://172.16.2.206:8000/api/',
     responseType: 'json',
     withCredentials: true,
 });

 export default ApiManager;