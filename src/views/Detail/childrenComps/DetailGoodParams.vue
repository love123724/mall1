<template>
    <div class="param-info" v-if="Object.keys(goodParams).length!==0">
        <table v-for="(table,index) in goodParams.sizes">
            <tr v-for="(tr,indey) in table">
                <td v-for="(td,indez) in tr">
                    {{td}}
                </td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info,index) in goodParams.infos">
                <td class="info-param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="goodParams.image.length !== 0">
            <img :src="goodParams.image">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodParams",
        props:{
            goodParams:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .param-info{
        padding: 0 8px;
        position: relative;
    }
    table,td{
        border-bottom:1px solid #f6f6f6;
        border-collapse: collapse;
    }
    table{
        width: 100%;
        margin: 10px 0 5px;
        height: 300px;
        font-size: 14px;
    }
    .info-param{
        height: 550px;
        border-top: 2px solid gainsboro;
    }
    .info-param tr:nth-child(0) td{
        padding-top:10px
    }
    .info-param td:nth-child(2n){
        width: 80%;
        color: #ff5777;
    }
</style>