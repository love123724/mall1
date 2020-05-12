<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "TabBar",
    }
</script>

<style scoped>
.tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: whitesmoke;
    height: 49px;
    box-shadow: 1px 2px 2px rgba(0,0,0,.5);
    width: 100%;
}

</style>