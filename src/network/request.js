import axios from 'axios'
export function request(config) {
   const instance=axios.create({
       baseURL:"http://123.207.32.32:8000/api/m3",
       timeout:8000
   })
    return instance(config)
}
export function request2(config) {
    const instance=axios.create({
        baseURL:"http://vue.thexxdd.cn",
        timeout:5000,
    })
    instance.interceptors.request.use(config=>{
        config.headers.Authorization=window.sessionStorage.getItem('token')
    })
    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response) {
                switch(error.response.status) {
                    case 401:
                        console.log('错误了')
                        break;
                }
            }
            return Promise.reject(error.response.data)
        })

    return instance(config)
}