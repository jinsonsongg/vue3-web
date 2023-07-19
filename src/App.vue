<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import navbar from './views/nav2.vue';
// import footerin from './views/footer.vue';
// import carousel from './views/carousel.vue';
// import product from './views/ProductIntroduction.vue'
// import moreapps from './views/moreapps.vue';

</script>

<template>
  <navbar/>
  <router-view />
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
}

</style>
