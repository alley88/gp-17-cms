import Mock from "mockjs"


let userData = Mock.mock({
    "data|100":[
        {
            "id|+1":12570,
            "status":()=>{
                if(Math.random()>0.5){
                    return true;
                }else{
                    return false;
                }
            },
            "username":"@email()",
            "fullname":"@cname",
            "auth":()=>{
                var arr = ["超级管里员","管理员","普通用户","部门主管"];
                var n = parseInt(Math.random()*5);
                return arr[n];
            },
            "firstTimeDate":"@date(yyyy-MM-dd hh:mm:ss)",
            "email":"@email()",
            "lastTimeDate":"@date(yyyy-MM-dd hh:mm:ss)"
        }
    ]
})


//用户列表

Mock.mock(/\/usermanage\/userlist/,"get",(options)=>{
    let {limit,page} = JSON.parse(options.body);
    var arr = [];
    for(var i=limit*(page-1);i<(limit*page);i++){
        arr.push(userData.data[i]);
    }

    return {
        data:arr,
        total:userData.data.length
    };
})