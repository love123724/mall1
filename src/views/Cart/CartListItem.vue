<template>
    <div class="cart-list-item">
        <check-button @click.native="btnClick" :is-active="product.check"></check-button>
            <div class="item-img">
                <img :src="product.image" alt="商品图片">
            </div>
            <div class="item-info">
                <div class="item-title">{{product.title}}</div>
                <div class="item-desc">{{product.desc}}</div>
                <div class="info-bottom">
                    <div class="item-price">{{product.price | showPrice}}</div>
                    <div class="item-count">{{product.count |showCount}}</div>
                </div>
            </div>
        </div>

</template>

<script>
    import CheckButton from "components/context/CheckButton/CheckButton";
    export default {
        name: "CartListItem",
        data(){
          return{
              isActive:true
          }
        },
        props:{
            product:Object
        },
        filters:{
            showPrice(value){
                return '¥'+value
            },
            showCount(value){
               return 'x'+value
            }
        },
        components:{
            CheckButton
        },
        methods:{
            btnClick(){
                 this.product.check=!this.product.check
            }
        },
    }
</script>

<style scoped>
    .cart-list-item{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        border-bottom: 1px solid lightgray;
        padding-bottom: 10px;
        margin: 15px 0;
    }
    .item-img{
        width: 20%;
    }
    .item-img img{
        width: 100%;
        border-radius: 10px;
    }
    .item-info{
        width: 50%;
        padding-left: 20px;
    }
    .item-title{
        font-weight: 700;
        font-size: 16px;
        color: black;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .item-desc{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 15px;

    }
    .info-bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

</style>