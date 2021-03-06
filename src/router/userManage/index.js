export default {
    path:"/userManage",
    component:_=>import("@pages/user-manage"),
    name:"userManage",
    children:[
        {
            path:"userList",
            name:"userList",
            component:_=>import("@pages/user-manage/user-list"),
            meta:{
                breadcrumb:[
                    {
                        path:"/userManage",
                        text:"用户管理"
                    },
                    {
                        path:"/userManage/userList",
                        text:"用户列表"
                    }
                ]
            }
        }
    ]
}