<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './views/nav.vue';
import footerin from './views/footer.vue';
import carousel from './views/carousel.vue';
import product from './views/ProductIntroduction.vue'

</script>

<template>
  
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <navbar/>
      </el-header>
      <el-main class="main">
        <carousel/>
        <product/>
        </el-main>
      <el-footer>
        <footerin />
      </el-footer>
    </el-container>
  </div>
  <el-backtop :bottom="100">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>
  </el-backtop>
</template>

<style scoped>
.header{
  width: 100%;
  height: 100px;
  text-align: center;
}

.main{
  width: 100%;
  height: 600px;
  /* background-image: url("src/img/bj1.jpg"); */
}

</style>
