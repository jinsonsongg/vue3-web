<script setup>
import { RouterLink, RouterView } from 'vue-router';
import navbar from './nav2.vue';
import footerin from './footer.vue';
import carousel from './carousel.vue';
import product from './ProductIntroduction.vue';
import moreapps from './moreapps.vue';
import aboutus from './aboutus.vue';

</script>

<template>
  <!-- <RouterView> -->
  <div class="common-layout">
    <el-container>
      <header class="header">
        <navbar/>
      </header>
      <main class="main">
        <carousel/>
        <aboutus/>
        <product/>
        <moreapps/>
        </main>
      <el-footer>
        <footerin />
      </el-footer>
    </el-container>
  </div>
  
<!-- </RouterView> -->
</template>

<style scoped>
body{
  margin:0;
  padding:0;
  border: 0;
}

@media (hover: hover) {
    a:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
    }
}

.el-footer{
  --el-footer-padding: 0 0px !important;
  padding: 0;
}

.header{
  width: 100%;
  height: 80px;
  text-align: center;
}

.main{
  width: 100%;
  /* height: 600px; */
  /* background-image: url("src/img/bj1.jpg"); */
}

</style>
