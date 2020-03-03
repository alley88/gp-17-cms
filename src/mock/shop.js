import Mock from "mockjs"

let shopData = Mock.mock({
    "data|40":[
        {
            "id|+1":1001,
            "shopName":"@csentence(3, 5)",
            "shopAddress":"@county(true)",
            "shopTel":/^1(3|5|7|8|9)\d{9}$/,
            "shopDesc":"@csentence",
            "tag":()=>{
                var arr = [
                    {
                        text:"西虹市鸡蛋",
                        type:"success"
                    },
                    {
                        text:"小炒肉",
                        type:"info"
                    },
                    {
                        text:"宫保鸡丁",
                        type:"danger"
                    },
                    {
                        text:"水煮肉片",
                        type:"warning"
                    },
                    {
                        text:"爆炒腰花",
                        type:"success"
                    },{
                        text:"烤腰子",
                        type:"warning"
                    },
                    {
                        text:"甲鱼汤",
                        type:"danger"
                    }
                ];
                var n = parseInt(2+Math.random()*arr.length-1);
                return arr.slice(0,n);
            }
        }
    ]
})

Mock.mock(/\/shopmanage\/shoplist/,"get",(options)=>{
   let {limit,page} = JSON.parse(options.body);
   var arr = [];
   
    //分页
    for(var i=limit*(page-1);i<(limit*page);i++){
        arr.push(shopData.data[i]);
    }
    return {
        dataList:arr,
        total:shopData.data.length
    };
})