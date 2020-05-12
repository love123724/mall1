<template>
    <div class="home">
      <nav-bar class="home-nav-bar">
          <div slot="center">
              购物车
          </div>
      </nav-bar>
        <tab-control @itemClick="itemClick" ref="tabControl" :title="['流行','新款','精选']" class="tab-control2" v-show="isTabFixed"/>
        <scroll class="content" ref="scroll" @pull="loadMore" :pull-up-load="true" @scroll2="scrolls" :probe-type="3" >
            <home-swiper :banners="banners" @imgLoad="SwiperimgLoad"/>
            <home-recommend :recommend="recommend"/>
            <home-feature/>
            <tab-control @itemClick="itemClick" ref="tabControl2" :title="['流行','新款','精选']"/>
            <goods :goodsImages="goods[currentType].list"/>
        </scroll>
       <back-top @click.native="back"  v-show="positionY"/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childrenCom/HomeSwiper";
    import HomeRecommend from "views/Home/childrenCom/HomeRecommend";
    import HomeFeature from "views/Home/childrenCom/HomeFeature";
    import Goods from "components/context/goods/Goods";
    import BackTop from "components/common/backTop/BackTop";


    import TabControl from "components/context/tabControl/TabControl";

    import {getSwiperImages, getGoodsList} from "../../network/home";
    import {itemListenerMixin} from "../../common/mixins";
    import Scroll from 'components/common/bscroll/Scroll'
    import {debounce} from "../../common/untils";

    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            HomeRecommend,
            HomeFeature,
            TabControl,
            Goods,
            Scroll,
            BackTop
        },
        data(){
          return{
             banners:[],
              recommend:[],
             goods:{
                 'pop':{page:0,list:[]},
                 'new':{page:0,list:[]},
                 'sell':{page:0,list:[]}
             },
              currentType:'pop',
              positionY:false,
              tabOffsetTop:0,
              isTabFixed:false,
          }
        },
        created() {
            getSwiperImages().then(res=>{
                console.log(res.data.data)
                this.banners=res.data.data.banner.list;
                this.recommend=res.data.data.recommend.list
            })
            this.getGoods('pop')
            this.getGoods('new')
            this.getGoods('sell')


           },

        mounted() {
                         const  refresh=debounce( this.$refs.scroll.refresh,30)
                this.itemImageListener=()=>{
                    refresh()

            }
            this.$bus.$on("imageLoad",this.itemImageListener)
        },
        deactivated() {
            this.$bus.$off("imageLoad",this.itemListener)
        },
        methods:{
                getGoods(type){
                    const page=this.goods[type].page+1
                    getGoodsList(type,page).then(res=>{
                        //console.log(res.data.data.list)
                        this.goods[type].list.push(...res.data.data.list)
                        this.goods[type].page+=1
                        this.$refs.scroll.scroll.finishPullUp()

                    })
           },
                itemClick(index){
                    switch (index) {
                        case 0:
                            this.currentType='pop';
                            break;
                        case 1:
                            this.currentType='new';
                            break;
                        case 2:
                            this.currentType='sell'

                    }
                    this.$refs.tabControl2.currentType=index;
                    this.$refs.tabControl.currentType=index;
                },
                loadMore(){
                   this.getGoods(this.currentType)

                },
                back(){
                    this.$refs.scroll.scrollTop(0,0,300)
                },
                scrolls(position){
                    //console.log(position)
                    this.positionY=-(position.y)>1000
                    this.isTabFixed=-(position.y)>=this.tabOffsetTop

                },
            debounce(func,delay){
                let timer=null

                return function(...args){
                    if(timer) clearTimeout(timer)
                    timer = setTimeout(()=>{
                        func.apply(this,args)
                    },delay)

                }
            },
            SwiperimgLoad(){
                this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
                //console.log(this.tabOffsetTop)
                //console.log("sdfsfdsd")

            }
        }
    }
</script>

<style scoped>
    .home{
        height: 100vh;

    }
.content{
    height: calc(100% - 44px - 49px);
}
.home-nav-bar{
    background-color: #ff8198;
    color: white;
}
.tab-control2{
    position: relative;
    z-index: 999;
}
</style>