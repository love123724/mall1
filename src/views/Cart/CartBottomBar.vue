<template>
   <div class="cart-bottom-car">
     <div class="cart-bottom-bar-left">
         <check-button class="check-btn"  :is-active="isSelectAll" @click.native="checkClick"></check-button>
         <div class="check-text">全选</div>
     </div>
       <div class="cart-bottom-bar-middle">
           总计 : ({{total|showTotal}})
       </div>
       <div class="cart-bottom-bar-right">
           去结算({{relLength}})
       </div>
   </div>
</template>

<script>
    import CheckButton from "components/context/CheckButton/CheckButton";
    import {mapGetters} from 'vuex'
    export default {
        name: "CartBottomBar",
        components:{
            CheckButton
        },
        data(){
          return {
              isActive:false
          }
        },
        computed:{
            ...mapGetters({
                cartList:"cartList",
                length:'cartLength'
            }),
            total(){
                return this.$store.getters.cartList.filter(item=>{
                    return item.check===true
                }).reduce((pre,value)=>{
                    return pre+value.count*value.price
                },0).toFixed(2)
            },
            isSelectAll(){
                if(this.$store.getters.cartList.length===0) return false
                return !(this.$store.getters.cartList.find(item => !item.check))
            },
            relLength(){
                return this.$store.getters.cartList.filter((item)=>{
                    return item.check===true
                }).length
            }
        },
        filters:{
            showTotal(value){
                return '¥'+value
            }
        },
        methods:{
            checkClick(){
                if(this.isSelectAll){
                    this.$store.getters.cartList.forEach(item=>item.check=false)
                }else{
                    this.$store.getters.cartList.forEach(item=>item.check=true)
                }
            }
        }




    }
</script>

<style scoped>
.cart-bottom-car{
    position: relative;
    left: 0;
    bottom: 12px;
    height: 40px;
    background-color: white;
    z-index: 999;
    display: flex;
     align-items: center;
    justify-content: space-between;
}
    .cart-bottom-car>div{
        flex: 1;
    }
    .cart-bottom-bar-left{
        display: flex;
    }
.check-btn{
    margin-left:15px;
}
    .check-btn,.check-text{
        margin-top: 7px;

    }
.cart-bottom-bar-middle{
  font-size: 14px;
}
    .cart-bottom-bar-right{
        text-align: center;
        height: 40px;
        background-color: red;
        color: white;
        line-height: 40px;
    }
</style>