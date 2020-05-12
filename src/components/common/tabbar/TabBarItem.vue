<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"> <slot name="item-image1"></slot></div>
        <div v-else><slot name="item-image2"></slot></div>
        <div :style="isActive?{color:this.activeColor}:{}">
            <slot name="item-text" ></slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: "TabBarItem",
        props:{
          path:String,
            activeColor:{
              type:String,
                default:"pink"
            }
        },
        methods:{
            itemClick(){
                //this.isActive=!this.isActive
                this.$router.push(this.path)
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        margin: auto;
        margin-top: 3px;
        text-align: center;
    }
    img{
        height: 24px;
        width: 24px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>