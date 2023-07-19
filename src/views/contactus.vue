<template>
    <div>
        <div class="nav2" style="height: 80px;" />
        <div class="a wow animate__fadeInUp">
            <img src="../img/diwei.png" alt="" class="img">
            <div class="title">联系我们</div>
        </div>
        <div class="b">
            <div class="ditu">
                <gaode class="gaode wow animate__zoomIn " data-wow-delay="0.5s" />
            </div>
            <div class="companyinfo">
                <div class="info">地址：</div>
                <div class="address">福州市闽侯县南屿镇后山村76号福建路政工贸工业园11号楼11层1108室</div>
                <div class="email">邮箱: haoyuekeji@youxiang.com</div>
                <div class="info">致电联系李先生</div>
                <div class="phone">(+86) 136******62</div>
                <div class="info">关注我们微信号了解更多详情</div>
                <div class="wx">
                    <img class="wximg" src="../img/weixin.png" alt="">
                    <img class="wximg" src="../img/weixin.png" alt="">
                </div>
            </div>  
        </div>
        <footerin/>
    </div>
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

.companyinfo{
    width: 70%;
    margin: 20px 250px;
    .info{
    font-size: 30px;
    margin: 10px;
    }

    .address{
        font-size: 25px;
        margin: 10px;
    }

    .email{
        font-size: 25px;
        margin: 10px;
    }
    .phone{
        font-size: 30px;
        font-family: DIGII;
        margin: 10px;
    }
    .wx{
        width: 300px;
        height: 150px;
        display: flex;
        text-align: center;
        margin: 10px;
        .wximg{
            width: 100px;
            height: 100px;
            margin: 20px;
        }
    }
}
.ditu {
    .gaode {
        width: 1060px;
        height: 600px;
        margin: 50px 250px;
        text-align: center;
    }
}
</style>
<script setup>

/***********样式********** */
import '../assets/font/font.css'

/************组件*********** */
import gaode from './gaode.vue'
import footerin from './footer.vue';
</script>