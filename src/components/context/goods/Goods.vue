<template>
    <div class="home-goods">
        <goods-item v-for="(item,index) in goodsImages" :goodsItemImage="item" :key="index" :iid="item.iid"></goods-item>
    </div>
</template>

<script>
    import GoodsItem from "components/context/goods/GoodsItem";
    export default {
        name: "Goods",
        components:{
            GoodsItem
        },
        props:{
            goodsImages:{
                type:Array
            }
        }
    }
</script>

<style scoped>
.home-goods{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
</style>