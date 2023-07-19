<template>
    <div class='xtx-carousel' @mouseenter="stop()" @mouseleave="start()">
      <ul class="carousel-body" ref="carousel">
        <!-- 重复部分-无限滚动必须 -->
        <li class="carousel-item" v-for="(item, i) in sliders" :key="i">
          <img :src="item" alt="">
        </li>
        <!-- 默认内容 -->
        <li class="carousel-item" v-for="(item, i) in sliders" :key="i">
          <img :src="item" alt="">
        </li>
        <!-- 重复部分-无限滚动必须 -->
        <li class="carousel-item" v-for="(item, i) in sliders" :key="i">
          <img :src="item" alt="">
        </li>
      </ul>
      <!-- 手动滚动-自行替换按钮 -->
      <a @click="scrollFun(-1)" href="javascript:;" class="carousel-btn prev"><el-icon>
          <ArrowLeft />
        </el-icon></a>
      <!-- 手动滚动-自行替换按钮 -->
      <a @click="scrollFun(1)" href="javascript:;" class="carousel-btn next"><el-icon>
          <ArrowRight />
        </el-icon></a>
      <!-- <div class="carousel-indicator">
        <span @click="index = i" v-for="(item, i) in sliders" :key="i" :class="{ active: index === i }"></span>
      </div> -->
    </div>
  </template>
  
  <script setup>

  /***********vue************ */
  import { ref, onMounted, onUnmounted } from 'vue'
  
  /***********常量************* */
  const props = defineProps({
    sliders: {
      type: Array,
      default: () => []
    },
    duration: {
      type: Number,
      default: 2
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  });
  const carousel = ref()
  //视口宽度
  var width = 0
  let timer = null;
  //单个图片宽度
  var itemWidth = 0;
  // 偏移量
  var left = 0;
  
  /***********方法************ */
  const autoplayFn = () => {
    clearInterval(timer)
    timer = setInterval(() => {
      scrollFun()
    }, props.duration * 1000)
  }
  /**
   * 
   * @param {*} step  step == -1 向右滚否则向左
   */
  const scrollFun = (step) => {
    if (!carousel.value) return
    if (step == -1) {
      left += itemWidth;
    } else {
      left -= itemWidth;
    }
    if (left <= -width * 2) {
  
      // 核心代码-消除滚动到第一张再向左滚动导致动画闪动问题
      // 思路先左滚动到第一张的前一张，关闭动画，无感滚动到最后一张，再次循环
      // 定时器时间==动画时间
      setTimeout(() => {
        left = -width
        carousel.value.style.transitionDuration = "0s"
        carousel.value.style.transform = `translateX(${left}px)`;
      }, 500)
  
    } else if (left >= -width) {
      setTimeout(() => {
        left = -width * 2
        carousel.value.style.transitionDuration = "0s"
        carousel.value.style.transform = `translateX(${left}px)`;
      }, 500)
    } else {
      carousel.value.style.transitionDuration = "0.5s"
    }
    carousel.value.style.transform = `translateX(${left}px)`;
  }
  
  onMounted(() => {
    //视口宽度
    width = carousel.value.getBoundingClientRect().width / 3;
    //滚动到中间
    left = -width;
    var item = getComputedStyle(document.querySelector(".carousel-item"))
    // 单个图片宽度
    itemWidth = parseFloat(item.width) + parseFloat(item.marginLeft) + parseFloat(item.marginRight);
  
    if (props.sliders.length > 1 && props.autoplay) {
      carousel.value.style.transform = `translateX(${left}px)`;
      //开始滚动
      autoplayFn()
    }
  })
  
  onUnmounted(() => {
    clearInterval(timer);
    timer = null;
  });
  
  // 鼠标进入轮播图区域轮播图停止轮播
  const stop = () => {
    if (timer) clearInterval(timer)
  }
  // 鼠标离开轮播图区域轮播图开始轮播
  const start = () => {
    autoplayFn()
  }
  
  </script>
  <style scoped>
.xtx-carousel {
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    align-self: flex-start;
    display: flex;
    position: relative;
}

.xtx-carousel:hover .carousel-btn {
    opacity: 1;
}

.xtx-carousel .carousel-body {
    white-space: nowrap;
    padding: 0;
    transition: all 0.5s;
}

.xtx-carousel .carousel-item {
    width: 388px;
    height: 280px;
    display: inline-block;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 12px;
}

.xtx-carousel .carousel-item img {
    width: 100%;
    height: 100%;
}

.xtx-carousel .carousel-indicator {
    position: absolute;
    left: 0;
    bottom: 20px;
    z-index: 2;
    width: 100%;
    text-align: center;
}

.xtx-carousel .carousel-indicator span {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    cursor: pointer;
}

.xtx-carousel .carousel-indicator span ~ span {
    margin-left: 12px;
}

.xtx-carousel .carousel-indicator span.active {
    background: #fff;
}

.xtx-carousel .carousel-btn {
    width: 44px;
    height: 44px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    text-align: center;
    line-height: 44px;
    opacity: 0;
    transition: all 0.5s;
}

.xtx-carousel .carousel-btn.prev {
    left: 20px;
}

.xtx-carousel .carousel-btn.next {
    right: 20px;
}
  </style>
  
  
  