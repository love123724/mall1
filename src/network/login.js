import {request2} from 'network/request'

export function dr(username,password ) {
  return request2({
      url:'/login/',
      method:'post',
     data:{
         username,
         password
     }
  })
}