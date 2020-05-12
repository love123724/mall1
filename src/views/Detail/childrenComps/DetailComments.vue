<template>
    <div v-if="Object.keys(comment).length!==0" class="comments-info">
        <div class="info-header">
            <div class="info-title">更多评价</div>
            <div class="info-more">更多</div>
        </div>
        <div class="info-user">
            <img :src="comment[0].user.avatar">
            <span>{{comment[0].user.uname}}</span>
        </div>
        <div class="info-detail">
            <p>{{comment[0].content}}</p>
            <div class="info-other">
                <span class="date">{{comment[0].created|showDate}}</span>
                <span>{{comment[0].style}}</span>
            </div>
            <div class="info-image">
                <img :src="item" v-for="(item,index) in comment[0].images" :key="index">
            </div>
        </div>
    </div>
</template>

<script>
    import {formatDate} from "common/untils";

    export default {
        name: "DetailComments",
        props:{
            comment:{
                type:Array
            }

        },
        filters:{
            showDate(value){
                const date=new Date(value*1000)
                return formatDate(date,'yyyy-MM-dd hh:mm:ss')
            }
        }
    }
</script>

<style scoped>
    .comments-info{
        padding: 5px 12px;
        color: #333;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-header{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(0,0,0,.1);

    }
    .info-title{
        float: left;
    }
    .info-more{
        float: right;

    }
    .info-user{
        margin-top: 10px;
        color:black;
    }
    .info-user img{
        width: 15%;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 5px;
    }
    .info-detail{
        color: #666666;
        font-size: 14px;
        margin-top: 8px;

    }
    .info-other{
        margin: 8px 0;

    }
    .info-image img{
        width: 30%;
        margin-right: 2px;
    }
    .date{
        margin-right: 5px;
    }
</style>