<template>
 <div class="cart-nav-bar">
     <nav-bar>
         <div slot="center" class="cart-nav-bar-text">
             购物车({{length}})
         </div>
     </nav-bar>
 </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {mapGetters} from 'vuex'
    export default {
        name: "CartNavBar",
        components:{
            NavBar
        },
        computed:{
            ...mapGetters({
                length:'cartLength'
            })
        }
    }
</script>

<style scoped>
.cart-nav-bar{
    height: 44px;
    background-color: lightcoral;
    position: relative;
z-index: 999;
}
    .cart-nav-bar-text{
        color: white;
    }
</style>