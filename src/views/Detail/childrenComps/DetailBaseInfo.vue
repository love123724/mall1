<template>
    <div v-if="Object.keys(baseInfo).length!==0" >
        <div class="info-title">{{baseInfo.title}}</div>
        <div class="info-price">
            <span class="n-price">{{baseInfo.newPrice}}</span>
            <span class="o-price">{{baseInfo.oldPrice}}</span>
            <span v-if="baseInfo.discount" class="discount">{{baseInfo.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{baseInfo.columns[0]}}</span>
            <span>{{baseInfo.columns[1]}}</span>
            <span class="col">{{baseInfo.columns[2]}}</span>
        </div>
        <div class="info-service">
    <span class="info-service-item" v-for="index in baseInfo.services.length">
      <img :src="baseInfo.services[index-1].icon">
      <span>{{baseInfo.services[index-1].name}}</span>
    </span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DetailGoodBase",
        props:{
            baseInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .info-title{
        font-size: 15px;
        color: black;
        font-weight: bold;
        margin: 8px 8px 12px;
        text-align: justify;
    }
    .info-price{

    }
    .n-price{
        color: deeppink;
        font-size: 20px;
        margin-left: 8px;
    }
    .o-price{
        font-size: 14px;
        margin: 8px;
        text-decoration: line-through;
    }
    .discount{
        width: 30px;
        height: 20px;
        font-size: 12px;
        background-color: deeppink;
        color: white;
        display: inline-block;
        line-height: 20px;
        border-radius: 10px;
        vertical-align: 6px;
        text-align: center;
    }
    .info-other{

        margin: 20px 8px 0;
        padding-bottom: 8px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid darkgray;

    }
    .info-service{
        margin: 15px 8px 20px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }

    .info-service-item img{
        width: 12px;
        vertical-align:-1px;
    }
</style>