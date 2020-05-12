<template>
    <div class="nav-bar">
       <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

    </div>
</template>

<script>
    export default {
        name: "NavBar",
        methods:{

        }
    }
</script>

<style scoped>
.nav-bar{
    height: 44px;
    width: 100%;
    position: relative;
    z-index: 999;
    font-size: 15px;
    line-height: 44px;
    text-align: center;
    display: flex;
    color: #666;
}
    .left{
       width: 60px;
    }
    .center{
        flex: 1;

        font-weight: 700;
    }
    .right{
        width: 60px;
    }
</style>