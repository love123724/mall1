<template>
  <div class="cart-list">
     <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"></cart-list-item>
  </div>
</template>

<script>
    import CartListItem from "views/Cart/CartListItem";
    import {mapGetters} from 'vuex'
    export default {
        name: "CartList",
        components:{
            CartListItem
        },
        computed:{
            ...mapGetters({
                cartList:'cartList'
            })
        }
    }
</script>

<style scoped>

</style>