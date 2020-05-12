<template>
    <div class="show-info">
        <div class="shop-info-logo">
            <a :href="shopInfo.shopUrl">  <img :src="shopInfo.shopLogo"></a>
            <span class="title">{{shopInfo.name}}</span>
        </div>
        <div class="shop-info-middle clearfix">
            <div class="shop-info-middle-left">
                <div class="sells-info">
                    <div class="sells-count">{{shopInfo.cSells|numbers}}</div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="goods-info">
                    <div class="goods-count">{{shopInfo.cGoods}}</div>
                    <div class="goods-count-text">全部宝贝</div>

                </div>
            </div>
            <div class="shop-info-middle-right">
                <table>
                    <tr v-for="(item,index) in shopInfo.score" :key="index">
                        <td>{{item.name}}</td>
                        <td :style="item.isBetter?{color:'red'}:{color:'green'}" class="sco">{{item.score}}</td>
                        <td :style="item.isBetter?{backgroundColor:'red'}:{backgroundColor:'green'}" class="td">{{item.isBetter? '高':'低'}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
            <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShop",
        props:{
            shopInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            numbers(value){
                return value>10000? (value/10000).toFixed(2)+"万":value
            }
        }
    }
</script>

<style scoped>
    .show-info{
        padding-top: 15px;
        border-top: 2px solid gainsboro;
        margin-bottom: 20px;
    }

    .shop-info-logo img{
        margin-left: 8px;
        width: 60px;
        border-radius: 50%;
        border: 2px solid lightgray;

    }
    .shop-info-logo .title{
        vertical-align:20px;
        margin-left: 8px;
    }
    .shop-info-middle{
        margin-left: 8px;
        width: 100%;
        margin-top: 10px;

        padding: 0 20px;
        font-size: 12px;
        position: relative;
    }
    .clearfix::after{
        content: "";
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
    }
    .clearfix{
        zoom:1
    }
    .shop-info-middle-left{
        padding-top: 12px;
        float: left;
        width: 42%;
    }
    .sells-info{
        float: left;
        font-size: 14px;
    }
    .sells-text{
        margin-top: 5px;
    }
    .goods-info{
        float: right;
        font-size: 14px;
    }
    .goods-count{
        margin-left: 14px;
    }
    .goods-count-text{
        margin-top: 5px;
    }

    .shop-info-middle-right::before{
        content: " ";
        display: block;
        height: 35px;
        width: 1px;
        background-color: darkgray;
        float: left;
        margin-right: 3vh;
        margin-top: 23px;
    }
    .shop-info-middle-right{
        float: right;
        font-size: 15px;
        margin-top: -10px;
    }
    table{
        height:80px;
        text-align: center;

    }
    table .td{
        color: white;
        width: 40px;
    }
    .shop-bottom{
        text-align: center;
        width: 180px;
        height: 40px;
        background-color: rgba(0,0,0,.2);
        margin:auto;
        line-height: 40px;
        margin-top: 15px;
        border-radius: 20px;
    }
</style>