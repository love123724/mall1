<template>
  <div class="check-btn" :class="{active:isActive}">
    <img src="~assets/img/cart/tick.svg" >
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isActive:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
  .check-btn{
    border-radius: 50%;
    margin-right: 5px;
    border: 2px solid #aaa;
  }
  .active{
    border-color: red;
    background-color: red;
  }
</style>
