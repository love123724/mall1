<template>
    <div class="tab-control" >
        <div v-for="(item,index) in title" @click="itemClick(index)" :class="{active:index===currentIndex}" class="tab-control-item">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
            return{
                currentIndex:0,
            }
        },
         props:{
            title:Array
         },
        methods:{
            itemClick(index){
                this.currentIndex=index
                this.$emit("itemClick",index)

            }
        },
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        background-color: white;
    }
    .tab-control .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;

    }
    .active span{
        border-bottom:3px solid  #ff8198 ;
        padding: 6px;
    }
    .active{
        color: #ff8198;
    }

</style>