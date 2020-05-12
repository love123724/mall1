<template>
    <div v-if="Object.keys(goodsInfo).length!==0" class="goodsInfo">
        <div class="info-desc">
            <div class="desc">{{goodsInfo.desc}}</div>
        </div>
        <div class="info-key">
            {{goodsInfo.detailImage[0].key}}
        </div>
        <div class="info-list">
            <img v-for="(item,index) in goodsInfo.detailImage[0].list" :key="index" :src="item" @load="loadmore">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeatilGoodsInfo",
        props:{
            goodsInfo:{
                type:Object,
                default(){
                    return{}
                }
            }

        },
        methods:{
         loadmore(){
             this.$emit('loadmore')
             //console.log('loadmore')
         }
        }
    }
</script>

<style scoped>
    .goodsInfo{
        padding-top: 15px;
        border-top: 2px solid gainsboro;
        font-size: 12px;
    }
    .desc{
        margin-bottom: 15px;
        padding: 0 8px;
        font-size: 15px;
    }
    .info-key{
        font-weight: 700;
        color: black;
        padding: 0 8px;
        font-size: 16px;
        margin-bottom: 10px;
    }
    img{
        width: 100%;
    }
</style>