<template>
    <div>
        <div class="nav2" style="height: 80px;" />
        <div class="a">
            <img src="../img/fix.png" alt="" class="img">
            <div class="title">解决方案</div>
        </div>
        <div class="b">
            <div >
                <h1>我们解决的问题</h1>
                <div class="num">a  {{ num.a }}</div>
                <div class="num">b  {{ num.b }}</div>
                <div class="num">c  {{ num.c }}</div>
            </div>
        </div>
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

.b{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    .num{
        font-size: 35px;
        font-family: DIGII;
    }
}
</style>
<script setup>
/*******样式******** */
import '../assets/font/font.css'
/********vue********* */
import { ref, onMounted, watch } from 'vue';

/*********变量***** */
const list = ref({
    a:3,
    b:596858455,
    c:98134
})

const num = ref({
    a:0,
    b:0,
    c:0,
})
/**********方法********* */

const updateNum = () => {
  const keys = Object.keys(num.value);
  const totalDuration = 3000;

  keys.forEach((key) => {
    const difference = list.value[key] - num.value[key];
    const targetValue = list.value[key];
    const timeInterval = difference < 60 ? totalDuration / difference : 50; // 每次增加的时间间隔

    const steps = Math.floor(totalDuration / timeInterval); // 根据时间间隔计算总步数
    const stepValue = Math.floor(difference / steps); // 计算每步增加的值
    const fluctuations = new Array(steps).fill().map(() => Math.floor(Math.random() * (stepValue + 1)));
    // 生成与总步数相等的随机浮动值数组

    let currentStep = 0;

    const increaseNumValue = () => {
      currentStep++;

      if (currentStep <= steps && num.value[key] < targetValue) { // 当 num.value[key] 小于 targetValue 时才进行增加
        // 根据步数计算当前增加的值并加上浮动值
        num.value[key] += stepValue + fluctuations[currentStep - 1];

        setTimeout(increaseNumValue, timeInterval);
      } else {
        num.value[key] = Math.min(num.value[key], targetValue); // 如果 num.value[key] 大于等于 targetValue，则取二者的最小值
      }
    };

    increaseNumValue();
  });
  setTimeout(() => {
    num.value=list.value
  }, 3010);
};


onMounted(() => {
  updateNum();
});

watch([list, num], () => {
  updateNum();
});
</script>