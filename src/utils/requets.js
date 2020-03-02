import axios from "axios";
import Vue from "vue";
console.log(Vue)
const http = axios.create({
    timeout:5000,
    withCredentials:true,
    //baseUrl:""
})

http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }
   

    return config;
},(err)=>{
    return Promise.reject(err);
})


http.interceptors.response.use(config=>{
    //关闭loading

    if(config.status == 200){
       
        return config.data;
    }
},(err)=>{
    return Promise.reject(err);
})


export default http;