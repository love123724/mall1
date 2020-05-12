<template>
    <div class="detail-bottom-bar">
        <div class="bottom-left">
            <div class="kefu">
                <div class="kefu-img"></div>
                <div class="kefu-text">客服</div>
            </div>
            <div class="shop">
                <div class="shop-img"></div>
                <div class="shop-text">店铺</div>
            </div>
            <div class="star">
                <div class="star-img"></div>
                <div class="star-text">收藏</div>
            </div>
        </div>
        <div class="bottom-right">
            <div class="addCart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
        methods:{
            addCart(){
                this.$emit("addCart")
            }
        }
    }
</script>

<style scoped>
.detail-bottom-bar{
    width: 100%;
    height:49px;
    background-color: #ff5777;
    position: relative;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
}
.detail-bottom-bar>div{
    flex: 1;
}
    .bottom-left{
        display: flex;

    }
    .kefu-img{
        width: 24px;
        height: 24px;
        background: url("~assets/img/detail/detail_bottom.png") no-repeat 1px -58px;
        background-size: cover;
        margin-left: 15px;
        margin-top: 5px;
    }
.shop-img{
    width: 24px;
    height: 24px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 1px -106px;
    background-size: cover;
    margin-left: 15px;
    margin-top: 5px;
}
.star-img{
    width: 24px;
    height: 24px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 1px 2px;
    background-size: cover;
    margin-left: 15px;
    margin-top: 5px;
}
.bottom-left>div{
    flex: 1;
    height: 49px;
    text-align: center;

}
    .bottom-right{
        display: flex;
    }
.bottom-right>div{
    flex: 1;
    height: 49px;
    text-align: center;
    line-height: 49px;
    color: white;
}
    .buy{
        background-color: red;

    }
    .addCart{
        background-color: yellow;
    }
</style>