<template>
    <div class="login">
        <div class="login-img"><img src="~assets/img/profile/enter.svg"></div>
        <div class="login-data">
            <div class="login-way">
                <span class="login-in" @click="login">登入</span><span class="register" @click="register">/注册</span>
            </div>
            <div class="login-state">
                <img src="~assets/img/profile/phone.svg">
                <span>暂无手机绑定{{$store.cartList}}</span>
            </div>
        </div>
        <div class="back">
            <img src="~assets/img/profile/back.svg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods:{
            register(){
                this.$router.push('/register')
            },
            login(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
.login{
    background-color: #ff5777;
    border-top: 2px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 1px rgba(100, 100, 100, .05);
    padding-bottom: 20px;
}
.login>div{
    flex: 1;
}
.login-img img{
    width: 72px;
    margin-left: 10px;
    margin-top: 5px;
}
    .login-data{
        margin-left: -25px;
        color: white;
        font-size: 14px;
    }

.login-state{
    margin-top: 5px;
    font-size: 12px;

}
    .login-state>img{
        width: 18px;
        vertical-align: bottom;
    }
    .back{
       margin-left: auto;
        text-align: center;
    }
    .back>img{
        width: 15px;
    }
</style>