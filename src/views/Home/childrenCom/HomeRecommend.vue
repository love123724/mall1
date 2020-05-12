<template>
    <div class="home-recommend">
        <div v-for="item in recommend">
           <a :href="item.link"> <img :src="item.image"></a>
            <div class="recommend-text">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.home-recommend{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}
    .home-recommend>div{
        flex: 1;
        text-align: center;
        margin-top: 15px;
    }
    img{
        width: 55px;
    }
    .recommend-text{
        margin-top: 3px;
    }
</style>