<template>
    <div class="tab-menu">
        <scroll class="content">
            <ul>
                <li v-for="(item,index) in title" :key="index" @click="liClick(index)"
                    :style="index===currentIndex?{color:active}:{}" :class="{active:index===currentIndex}">{{item.title}}</li>
            </ul>
        </scroll>
    </div>
</template>

<script>
    import Scroll from "components/common/bscroll/Scroll";
    export default {
        name: "TabMenu",
        props:{
            title:Array,
            active:String
        },
        data(){
            return{
                currentIndex:0,
            }
        },
        methods:{
            liClick(index){
               this.currentIndex=index
               // console.log(this.title[index].maitKey)
                this.$emit('li-click',index)
            }
        },
        components:{
            Scroll
        }
    }
</script>

<style scoped>
 .tab-menu{
     width: 30%;
     background-color: #f6f6f6;
 }
 .tab-menu{
     height: 100vh;
     overflow: hidden;
 }
 .content{
     height:calc(100% - 44px - 49px)

 }
 ul{
     text-align: center;
 }
    li{
        width: 100px;
        height:45px ;
        line-height: 45px;
    }

.active{
    color: #ff5777;
    border-left: 3px solid var(--color-high-text);
    background-color: white;
}
</style>