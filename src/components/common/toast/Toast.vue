<template>
    <div class="toast" v-show="isShow">
        <div class="toast2">{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return{
                message:'',
                isShow:false
            }
        },
        methods:{
            show(message,duration){
                this.message=message
                this.isShow=true
                setTimeout(()=>{
                    this.isShow=false
                },duration)
            }
        }
    }
</script>

<style scoped>
.toast2{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    background-color: rgba(0,0,0,.5);
    padding: 4px 6px;
    z-index: 9999;
}
</style>