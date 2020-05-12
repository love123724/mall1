<template>
    <div class="detail">
         <detail-nav-bar @nav-click="itemClick" ref="nav"></detail-nav-bar>
        <scroll class="content" ref="scroll" @scroll2="scroll2" :probe-type="3" >
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :baseInfo="goodsBase"></detail-base-info>
            <detail-shop :shop-info="shopInfo"></detail-shop>
            <deatil-goods-info :goods-info="goodsInfo" @loadmore="loadmore"/>
            <detail-good-params :good-params="goodParams" ref="params"></detail-good-params>
            <detail-comments :comment="comment" ref="comments"></detail-comments>
            <goods :goodsImages="recommend" ref="recommend"></goods>
        </scroll>
         <detail-bottom-bar @addCart="addCart"/>
        <back-top  @click.native="back" v-show="positionY"></back-top>
    </div>
</template>

<script>

    import DetailNavBar from "views/Detail/childrenComps/DetailNavBar";
    import DetailSwiper from "views/Detail/childrenComps/DetailSwiper";
    import DetailBaseInfo from "views/Detail/childrenComps/DetailBaseInfo";
    import DetailShop from "views/Detail/childrenComps/DetailShop";
    import DeatilGoodsInfo from "views/Detail/childrenComps/DeatilGoodsInfo";
    import DetailGoodParams from "views/Detail/childrenComps/DetailGoodParams";
    import DetailComments from "views/Detail/childrenComps/DetailComments";
    import Goods from "components/context/goods/Goods";
    import Scroll from 'components/common/bscroll/Scroll'
    import DetailBottomBar from "views/Detail/childrenComps/DetailBottomBar";
    import BackTop from "components/common/backTop/BackTop";
    import {getDetail,getRecommend} from "network/detail";
    import {GoodBase,GoodParams} from "network/detail";
   import {mapActions} from 'vuex'
    import {itemListenerMixin,backTopMixins} from '../../common/mixins'


    export default {
        name: "Detail",
        components:{
            DetailComments,
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShop,
            DeatilGoodsInfo,
            DetailGoodParams,
            DetailComments,
            Goods,
            Scroll,
            DetailBottomBar,
            BackTop
        },
        data(){
            return {
                iid:null,
                topImages:[],
                goodsBase:{},
                shopInfo:{},
                goodsInfo:{},
                goodParams:{},
                comment:[],
                recommend:[],
                currentIndex:0,
            }
        },
        created() {
            this.iid=this.$route.params.iid;
            getDetail(this.iid).then(res=>{
                console.log(res.data.result)
                const data=res.data.result;
                this.topImages=res.data.result.itemInfo.topImages
                //this.topImages.push(...data.itemInfo.topImages)
               this.goodsBase= new GoodBase(data.itemInfo,data.columns,data.shopInfo.services)
                this.shopInfo=data.shopInfo
                this.goodsInfo=data.detailInfo
                this.goodParams=new GoodParams(data.itemParams.info,data.itemParams.rule)
                if(data.rate.cRate!==0){
                    this.comment=data.rate.list
                }

                //console.log(this.comment)

            })
            getRecommend().then(res=>{
                 this.recommend=res.data.data.list
               // console.log(res.data.data.list)
            })

        },
       mixins:[itemListenerMixin,backTopMixins],
        mounted() {
          //console.log('mounted')

        },
        destroyed(){
            //console.log("des")
            this.$bus.$off("imageLoad",this.itemImageListener)
        },
        methods:{

            addCart(){
                const product= {};
                product.image=this. topImages[0];
                product.title=this.goodsBase.title;
                product.desc=this.goodsBase.desc;
                product.price=this.goodsBase.realPrice;
                product.iid=this.iid;

                this.$store.dispatch('addCart',product).then(res=>{
                    console.log(res)
                    this.$toast.show(res,2000)
                })
            },
            debounce(func,delay){
                let timer=null;
                return function(...args){
                    if(timer) clearTimeout(timer)
                    timer=setTimeout(()=>{
                        func.apply(this,args)
                    },delay)
               }
            },
            itemClick(index){
               // this.$refs.scroll.scroll.scrollTo(0,this.themeYs[index],200)
                //console.log(index)
                //console.log(typeof index)
                this.$refs.scroll.scrollTop(0,-this.themeTopYs[index],200)
            },
            scroll2(postion){
                const positionY2=-postion.y;
                this.positionY=positionY2>1000
                const length=this.themeTopYs.length;
                for(var i=0;i<length;i++){
                    if(this.currentIndex!==i&&(i===length-1&&positionY2>=this.themeTopYs[i])||this.currentIndex!==i&&(i<length-1&&positionY2>=this.themeTopYs[i]&&positionY2<this.themeTopYs[i+1])){
                        this.currentIndex=i;
                        this.$refs.nav.currentIndex=this.currentIndex
                       console.log(this.currentIndex)
                    }
                }
            },
            loadmore(){
                //console.log("lllll")
                  this.refresh();

                    this.themeTopYs=[];
                    this.themeTopYs.push(0);
                    this.themeTopYs.push(this.$refs.params.$el.offsetTop-60);
                    this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
                    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-50);
                    //console.log(this.themeTopYs)

            }

        },


    }
</script>

<style scoped>
    .detail{
        height: 100vh;
        overflow: hidden;
    }
.content{
    height:calc(100% - 44px - 49px)
}
</style>