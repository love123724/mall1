import {request2} from "./request";
export function getCode(mobile) {
return request2({
    url:'/codes/',
    method:'post',
    data:{
        mobile
    }
})
}

export function zc(username,code,password  ) {
return request2({
    url:'/users/',
    method:'post',
    data:{
        username,
        code,
    password
}
})
}