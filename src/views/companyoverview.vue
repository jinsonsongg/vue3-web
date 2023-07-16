<template>
    <div>
        <div class="nav2" style="height: 80px;" />
        <div class="a">
            <img src="../img/win.png" alt="" class="img">
            <div class="title">公司概况</div>
        </div>
        <div class="b">
            <div>
                <div class="content">
                    <h3 class="h3 wow animate__bounceInDown" >福建昊钺科技有限公司</h3>
                    <p class="p wow animate__bounceInLeft">————致力于物联网产品的开发</p>
                </div>
                <div class="parallax p1"></div>
                <div class="content">
                    <h3 class="h3  wow animate__bounceInDown">良好的工作环境</h3>
                    <p class="p  wow animate__bounceInLeft">————自强不息</p>
                </div>
                <div class="parallax p2"></div>
                <div class="content">
                    <h3 class="h3  wow animate__bounceInDown">热烈的工作氛围</h3>
                    <p class="p wow animate__bounceInLeft">————齐心协力</p>
                </div>
                <div class="parallax p3"></div>
                <div class="content">
                    <h3 class="h3  wow animate__bounceInDown">没文案了</h3>
                    <p class="p  wow animate__bounceInLeft">————还有一些</p>
                </div>
                <div class="parallax p4"></div>
                <!-- <div class="content"></div> -->
            </div>
        </div>
    </div>
    <footerin/>
</template>
<style scoped>
.a {
    width: 100%;
    height: 400px;
    background-image: url('../img/bj1.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;

    .img {
        width: 500px;
        height: 300px;
        margin: 60px 170px;
    }

    .title {
        font-size: 80px;

        font-family: PMZDBTT;
        margin-top: 140px;
    }
}

.b{

    .parallax{
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        background-attachment: fixed;
    }

    .p1{background-image: url('../img/gstu1.jpg');}
    .p2{background-image: url('../img/gstu2.jpg');}
    .p3{background-image: url('../img/gstu3.jpg');}
    .p4{background-image: url('../img/gstu4.jpg');}

    .content{
        width: 960px;
        height: 40vh;
        margin: 0 auto;
        text-align: justify;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* background-color: #38564b; */
    }
    .h3{
        font-size: 45px;
        letter-spacing: 10px;
        text-align: center;
        color: rgb(0, 0, 0);
        font-weight: 400;
    }
    .p{
        color: #000000;
        font-size: 16px;
        line-height: 28px;
    }
    /* .h4{
        font-size: 45px;
        letter-spacing: 10px;
        text-align: center;
        color: rgb(170, 130, 251);
        font-weight: 400;
        top: 500px;
    } */
}
</style>
<script setup>
import '../assets/font/font.css'
import footerin from './footer.vue';
</script>