<template>
    <div class="boby">
        <div>
            <img src="../img/lou.jpg" alt="" class="img wow animate__backInLeft">
        </div>
        <div class="title">
            <h1 class="h1 wow animate__zoomInDown "   data-wow-delay="1s"  >Fujian Haoyue Technology Co., Ltd</h1>

            <div class="msg wow animate__bounceInRight">
                <h3 class="h3">Company Profile:</h3>

                <h5 class="h5">Fujian Haoyue Technology was established in 2019 and is located in Fuzhou National High tech Zone. <br>
                    It is committed to the development of IoT products. Currently, <br>
                    the mainstream business is intelligent medical management systems, <br>
                    ERP management systems, smart parks and other IoT application products.</h5>
                    <br>
                    <el-button class="button" ><router-link to="/overview">Learn more</router-link></el-button>
            </div>
            
        </div>
    </div>
</template>
<style scoped>
.boby {
    margin: 20px;
    display: flex;
    justify-content: center; /* 在主轴上居中对齐 */
  align-items: center; /* 在交叉轴上居中对齐 */
    .h1{
        margin: 50px;
        font-size: 40px;
        letter-spacing: 5px;
    }

    .msg{
        margin: 50px;
        .h3 {
        color: #4b2121;
        letter-spacing: 5px;
    }
        .h5{
            color: #7d3838;
            letter-spacing: 2px;
            margin: 20px;
        }
        .button{
            margin-left: 80%;
        }
    }
    
}

.img {
    width: 500px;
}
</style>
<script setup>
import {ref , onMounted} from 'vue'


import WOW from "wow.js";
 
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