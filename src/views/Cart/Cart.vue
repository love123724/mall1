<template>
    <div class="cart">
           <cart-nav-bar></cart-nav-bar>
          <scroll class="content">
        <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
    </div>

</template>

<script>
    import CartNavBar from "views/Cart/CartNavBar";
    import CartList from "views/Cart/CartList"
    import Scroll from "components/common/bscroll/Scroll";
    import CartBottomBar from "views/Cart/CartBottomBar";
    export default {
        name: "Cart",
        components:{
            CartNavBar,
            CartList,
            Scroll,
            CartBottomBar
        },

    }
</script>

<style scoped>
    .cart{
        height: 100vh;
        overflow: hidden;
    }
.content{
    height: calc(100% - 44px - 49px - 40px);
}
</style>