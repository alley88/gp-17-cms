import http from "@utils/requets.js";


export const loginApi = (loginModel)=>{
    return http({
        method:"get",
        url:"/v3/login",
        data:loginModel
    })
}


