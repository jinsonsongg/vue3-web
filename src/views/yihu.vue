<template>
    <div>
        <div class="nav2" style="height: 80px;" />
        <div class="a wow animate__jello">
            <img src="../img/yihu.png" alt="" class="img">
            <div class="title">护工服务系统</div>
        </div>
        <div class="b">

            <div>
                <h1>一款针对医院的护理关照系统</h1>

                <div>产品介绍</div>
                <div>您好，感谢您对我们的关怀系统感兴趣。我们为医院量身打造了一款先进的护理关怀系统，
                    <br>
                    旨在提供全面的护理服务，提升患者体验和医院效率。
                </div>
            </div>
            <div>
                我们的护理关怀系统可以提供实时监测和追踪患者的健康状况。
                <br>
                通过智能传感器和监测设备，医护人员可以随时获得患者的生命体征、病情变化等关键信息，实现对患者的全程监护。
                <br>
                这不仅可以提高医护人员的工作效率，还可以及时发现并处理患者的突发情况，提高医疗质量和患者安全性。
            </div>
            <img class="img wow slideInLeft" src="../img/shoubiao.JPG" alt="">
            <div class="img-box">
                <carouselPlay :sliders="imgs" :autoplay='true' :duration="3"></carouselPlay>

            </div>
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <div style="height: 500px;"></div>

        </div>
        <footerin />
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

.b {
    .img {
        width: 300px;
    }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script setup>
/*********组件*********** */
import footerin from './footer.vue';
import carouselPlay from './carouselPlay.vue';

/*********vue****** */
import { ref, onMounted } from 'vue'

/**********插件********** */
import WOW from "wow.js";

/*********常量********** */

const imgs = ref([
    '/src/img/bigScreen2.png',
    '/src/img/bigScreen3.png',
    '/src/img/bigScreen4.png',
    '/src/img/bigScreen3.png',
]);




/**********方法******* */

onMounted(async () => {
    let wow = new WOW({
        boxClass: 'wow',    //需要执行动画元素的Class
        animateClass: 'animated',    //animation.css动画的Class
        offset: 0,    //距离可视区域多少开始执行动画
        mobile: true,    //是否在移动设备执行动画
        live: true    //异步加载的内容是否有效
    });
    wow.init();
});
</script>