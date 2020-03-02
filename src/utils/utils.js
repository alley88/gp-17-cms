export const queryObject = (url)=>{
    var queryString = url.split("?")[1];
    var obj = {};
    var arr = queryString.split("&");
    for(var i=0;i<arr.length;i++){
        var key = arr[i].split("=")[0];
        var value = arr[i].split("=")[1];
        obj[key] = value;
    }

    return obj;

}