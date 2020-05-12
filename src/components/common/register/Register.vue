<template>
    <div class="register">
     <nav-bar class="nav-bar">
         <div slot="center">注册</div>
     </nav-bar>

        <form>
             <div class="register-content">
                    <div>
                        <input type="text" placeholder="手机号" v-model="phone" class="register_text">
                    </div>
                 <div class="register_text verify">
                     <input type="text" placeholder="请输入验证码" v-model="verify" style="outline: none;width: 100%;margin-bottom: 5px;border: none" >
                     <input type="button"  v-model="yzm" class="ver-input" :disabled="!isSend" @click="test" :class="{active2:isSend}">
                 </div>
                 <div>
                     <input type="password" placeholder="请输入密码" v-model.trim="password" class="register_text">
                 </div>
                 <div>
                     <input type="password" placeholder="请确认密码" v-model.trim="password2" class="register_text">
                 </div>
                 <div class="register_btn">
                     <input type="button" value="注册并登入" :disabled="!isDisabled" :class={active:isDisabled} @click="submit">
                 </div>
             </div>
        </form>
    </div>
</template>

<script>
    import NavBar from "../navbar/NavBar";
    import {getCode,zc} from "network/register";
    import cookie from 'network/cookie'
    export default {
        name: "Register",
        components:{
            NavBar
        },
        data(){
            return{
                phone:'',
                password:'',
                password2:'',
                verify:'',
                yzm:'发送验证码',
                isSend:false,
                err:''
            }
        },
        computed:{
            isDisabled(){
                return this.phone&&this.password&&this.password2&&this.verify
            },
        },
        methods:{
            test(){
                let time=60
                let that=this
                change()
               function change(){
                    if(time>=0){
                        time-=1
                        that.yzm=time+"s后重发验证码"
                        that.isSend=false
                    }else{
                        that.yzm="重发验证码"
                        clearInterval(timer)
                    }
                }
                let timer=setInterval(function () {
                    change()
                },1000)
                getCode(that.phone).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                    that.$toast.show(err.mobile[0],10000)
                    return
                })
            },
            submit(){
                if(this.password!==this.password2){
                    this.$toast.show("密码不一致",2000)
                    return
                }else{
                   zc(this.phone,this.verify,this.password).then(res=>{
                       console.log(res)
                       cookie.setCookie('phone',res.data.username,7)
                       cookie.setCookie('token',res.data.token,7)
                       this.$store.dispatch('user')
                   }).catch(err=>{
                       console.log(err)
                   })
                }
            }
        },
        watch:{
            phone(){
                if(!(/^1(3|5|7|8)\d{9}$/.test(this.phone))){
                    this.$toast.show("手机号码不正确",2000)
                    this.isSend=false
                }else{
                    this.isSend=true
                }
            },
        }
    }
</script>

<style scoped>
.nav-bar{
    background-color: #ff8198;
    color: white;
}
.ver-input{
    background-color: gray;
    color: white;
    border:none;
    width: 100px;
    outline: none;
    height: 44px;
   margin-top: -5px;

}
.active2{
    background-color: #00B7FF;
}
.active{
    background:#e54847!important;
}
.register_text{
    display: flex;
}
.register_btn{ height:50px; margin:10px;}
.register_btn input{ width:100%; height:100%; background:gray; border-radius: 3px; border:none; display: block;color:white; font-size:20px}
.register_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent:10px}
</style>