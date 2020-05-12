<template>
    <div class="goods-item" @click="itemClick">
            <img :src="showImage" @load="imgLoad">
           <div class="goods-item-content">
               <p class="content-title">{{goodsItemImage.title}}</p>
               <span class="content-price">{{goodsItemImage.price}}</span>
               <span class="content-star">{{goodsItemImage.cfav}}</span>
           </div>


    </div>
</template>

<script>

    export default {
        name: "GoodsItem",
        props:{
            goodsItemImage:Object,
            iid:String
        },
        methods:{
            imgLoad(){
                //console.log("----")
                this.$bus.$emit("imageLoad")
            },
            itemClick(){
                console.log(this.iid)
                this.$router.push("/detail/"+this.iid)
            }
        },
        computed:{
            showImage(){
                return this.goodsItemImage.image||this.goodsItemImage.show.img
            }
        }

    }
</script>

<style scoped>
    .goods-item{
        width:46%;

    }
    .goods-item img{
        width: 100%;
        border-radius:5px;
    }
    .goods-item-content{
        text-align: center;
    }
    .content-title{
        font-size: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .content-price{
       color: #ff5777;

    }
    .content-price::after{
        display: inline-block;
        content: '';
        height: 20px;
        width: 20px;
        background: url("~assets/img/home/detail_bottom.png") no-repeat 0 0;
        background-size: cover;
        vertical-align:-5px;
        margin:0 1.5px 0 4px;
    }
    .content-star{

    }
</style>