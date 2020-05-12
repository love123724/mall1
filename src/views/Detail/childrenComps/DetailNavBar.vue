<template>
    <div class="detail-nav-bar">
        <nav-bar class="nav-bar">
            <div slot="left" class="left" @click="back">
                <img src="~assets/img/backtop/back.svg">
            </div>
            <div slot="center" class="center titles">
               <div class="titles-item" v-for="(item,index) in titles"
                    :class="{active:index===currentIndex}"
                      @click="itemClick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                titles:['商品','参数','评论','推荐'],
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex=index
                this.$emit("header-click",index)
            },
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .detail-nav-bar{
        display: flex;

    }
.left{
    margin-top: 6px;
    width: 60px;
}
    .center{
        flex: 1;
        display: flex;
    }
    .center>div{
        flex: 1;
    }
   .active{
       color: deeppink;
   }
    .nav-bar{
        background-color: white;
        font-weight: normal;
    }
</style>