<template>
    <div class="tab-content">

            <div class="content-item" v-for="(item,index) in data" :key="index">
                <a :href="item.link">
                    <img :src="item.image" @load="loadImage">
                    <div>{{item.title}}</div>
                </a>
            </div>



    </div>
</template>

<script>

    export default {
        name: "TabContent",
        props:{
            data:Array
        },
        components:{

        },
        methods:{
            loadImage(){
                this.$bus.$emit('loadImage')
            }
        }

    }
</script>

<style scoped>
.tab-content{
text-align: center;

}

.content-item{
    padding: 16px 0px 8px 0px;
    margin: 0 20px 0 20px;
    border-bottom: solid 2px var(--color-tint);
}
    .content-item img{
        width: 60%;
    }
</style>