export default {
    path:"/home",
    component:_=>import("@pages/home"),
    name:"home",
    meta:{
        breadcrumb:[
            {
                path:"/home",
                text:"首页"
            }
        ]
    }
}