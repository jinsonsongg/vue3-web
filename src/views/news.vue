<script setup>
import nav2 from './nav2.vue';
import '../assets/font/font.css'
</script>
<template>
    <div>
            <!-- <nav2/> -->
            <div class="nav2" style="height: 80px;"/>
        <div class="a">
            <img class="img" src="../img/Meeting.png" alt="">
            <div class="title">公司要闻</div>
        </div>
        <div class="b">
            <div>今日热点</div>
            <div>天气热</div>
        </div>
    </div>
</template>
<style scoped>
.a{
    width: 100%;
    height: 400px;
    background-image: url('../img/bj1.jpg'); 
    background-repeat:no-repeat;
    background-size:100%;  
    display: flex;
    .img{
        width: 500px;
        height: 300px;
        margin: 60px 170px;
    }
    .title{
        font-size: 80px;
        
        font-family: PMZDBTT;
        margin-top: 140px;
    }
}


</style>
