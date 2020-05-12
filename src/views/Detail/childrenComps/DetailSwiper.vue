<template>
        <swiper class="detail-swiper">
            <swiper-item v-for="(item66,index) in topImages" :key="index">
                <a :href="item66.link"> <img :src="item66"></a>
            </swiper-item>
        </swiper>

</template>

<script>
    import {Swiper,SwiperItem} from "components/common/swiper"
    export default {
        name: "DetailSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            topImages:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        mounted() {
            console.log(this.topImages)
        }
    }
</script>

<style scoped>
    .detail-swiper{
        height:300px;
        overflow: hidden;
    }
</style>