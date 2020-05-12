import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

const Home=()=>import("views/Home/Home")
const Cart=()=>import("views/Cart/Cart")
const Profile=()=>import('views/Profile/Profile')
const Category=()=>import('views/Category/Category')
const Detail=()=>import('views/Detail/Detail')
const Register=()=>import("components/common/register/Register")
const Login=()=>import('components/common/login/Login')
const routes=[
    {
      path:"",
      redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/cart",
        component:Cart
    },
    {
     path:"/profile",
     component:Profile,
        children:[

        ]
    },
    {
        path:"/category",
        component:Category
    },
    {
        path:"/detail/:iid",
        component:Detail
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    }

]
const router=new Router({
    routes,
    mode:"history"
})
/*router.beforeEach((to,from,next)=>{
    if(to.path==='/login'||to.path==='/register'){
        return next()
    }else{
        const token=window.sessionStorage.getItem('token')
        if(!token){
            return next('/login')
        }
    }
    next()
})*/
export default router