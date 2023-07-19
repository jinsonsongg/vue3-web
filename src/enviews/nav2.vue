<template>
  <div class="nav" :class="navShow ? 'navOn' : 'navOff'">
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false" @select="handleSelect"
      router>
      <img src="../img/haoyue_logo_2.png" class="logo" />
      <div class="space" />
      <el-menu-item index="6-2" :route="{ path: 'enapp' }">Home</el-menu-item>
      <el-sub-menu index="1">
        <template #title>Business</template>
        <el-menu-item index="1-1" :route="{ path: 'business1' }">Nursing system</el-menu-item>
        <el-menu-item index="1-2" :route="{ path: 'business2' }">Business2(not produced)</el-menu-item>
        <el-menu-item index="1-3" :route="{ path: 'business3' }">Business3(not produced)</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2" :route="{ path: 'ennews' }">News</el-menu-item>
      <el-menu-item index="3" :route="{ path: 'ennews' }">Solution</el-menu-item>
      <el-sub-menu index="4">
        <template #title>About us</template>
        <el-menu-item index="4-1" :route="{ path: 'enoverview' }">Company Overview</el-menu-item>
        <el-menu-item index="4-2" :route="{ path: 'enoverview' }">Corporate Culture</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>Join us</template>
        <el-menu-item index="5-1" :route="{ path: 'joinmsg' }">job Message</el-menu-item>
        <el-menu-item index="5-2" :route="{ path: 'contactus' }">Contact Us</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>Language</template>
        <el-menu-item index="/">简体中文</el-menu-item>
        <el-menu-item index="6-2" :route="{ path: 'enapp' }">English</el-menu-item>
        <el-menu-item @click="crazy()">More</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
  
<script setup>
/************vue********* */
import { ref, onMounted, watch } from "vue";
import { ElMessage } from 'element-plus'

/*********常量********* */
const top = ref(null);
const navShow = ref(true);
const activeIndex = ref('0');

/***********方法********* */
onMounted(() => {
  window.addEventListener("scroll", () => {
    top.value =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.scrollY;
  });
});

watch(top, (newValue, oldValue) => {
  if (newValue > 50) {
    if (newValue > oldValue) {
      navShow.value = false;
    } else {
      navShow.value = true;
    }
  }
});

function handleSelect(i, j, k) {
  console.log(i);
}

function crazy() {
  ElMessage('We need more languages')
}

</script>
  
<style lang="less" scoped>
.space {
  margin: 0 50px;
}

.el-menu {
  align-items: center;
  width: 60%;
  justify-content: space-between;
  -webkit-box-align: center;
  margin-bottom: 0;
  background: none;
  --el-menu-border-color: none;
}

.logo {
  max-height: 80px;
}

.nav {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  align-content: center;
  justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%);

  // backdrop-filter: saturate(50%) blur(8px);
  background: none;
}

.el-menu--horizontal>.el-menu-item {
  font-size: 18px;
  font-weight: 500;
  // border: 1px solid red;
}

.el-menu-item {
  justify-content: center;
  --el-menu-hover-bg-color: none;
}

.el-menu-item:hover {
  color: #1781fb !important;
  transition: 0.2s all linear;
  transition-delay: 0.1s;
}

.navOn {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out 0.3s;
  transform: translateZ(0);
  background: none;
  z-index: 1000;
  align-content: center;
  justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%);
  background: white;
}

.navOff {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out 0.3s;
  transform: translate3d(0, -100%, 0);
}
</style>
<style lang="less">
.el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger {
  font-size: 18px;
  font-weight: 500;
}
</style>