export default {
    path:"/login",
    component:_=>import('@pages/login'),
    name:"login",
    meta:{
        //凡是为true都是不需要验证
        authRequired:true
    }
}