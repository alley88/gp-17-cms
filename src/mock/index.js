import Mock from "mockjs";
import {queryObject} from "@utils/utils.js"



//登陆接口
Mock.mock(/\/v3\/login/,"get",(options)=>{
    let obj = queryObject(options.url);
    
    if(obj.username == 'admin' && obj.username == 'admin'){
        return {
            code:200,
            data:{
                authToken:"s228hds276aa21kdhska"
            }
        }
    }else{
        return {
            code:500,
            data:{
                info:"用户名或者密码错误"
            }
        }
    }


   
})