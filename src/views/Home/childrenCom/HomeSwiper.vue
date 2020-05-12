<template>
    <div class="home-swiper">
        <swiper>
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" @load="imgLoad">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import SwiperItem from "components/common/swiper/SwiperItem";
    import Swiper from "components/common/swiper/Swiper";
    export default {
        name: "HomeSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banners:Array
        },
        data(){
          return{
              isLoad:false
          }
        },
        methods:{
            imgLoad(){
                if(!this.isLoad){
                    this.$emit("imgLoad")
                    this.isLoad=true
                }

               // console.log('ddd')
            }
        }
    }
</script>

<style scoped>
.home-swiper{

}
</style>