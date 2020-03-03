import http from "@utils/requets.js";

//登陆
export const loginApi = (loginModel)=>{
    return http({
        method:"get",
        url:"/v3/login",
        data:loginModel
    })
}

//商家列表
export const shopListApi = (shopInfo)=>{
    return http({
        method:"get",
        url:"/shopmanage/shoplist",
        data:shopInfo
    })
}

//用户列表
export const userListApi = (userInfo)=>{
    return http({
        method:"get",
        url:"/usermanage/userlist",
        data:userInfo
    })
}

