<template>
    <div class="main-tab-bar2">
        <tab-bar>
            <tab-bar-item path="/home" activeColor="green">
                <img src="~assets/img/tabbar/home.svg" slot="item-image1">
                <img src="~assets/img/tabbar/home_active.svg" slot="item-image2">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/cart" activeColor="red">
                <img src="~assets/img/tabbar/shopcart.svg" slot="item-image1">
                <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-image2">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img src="~assets/img/tabbar/category.svg" slot="item-image1">
                <img src="~assets/img/tabbar/category_active.svg" slot="item-image2">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <img src="~assets/img/tabbar/profile.svg" slot="item-image1">
                <img src="~assets/img/tabbar/profile_active.svg" slot="item-image2">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar2",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
