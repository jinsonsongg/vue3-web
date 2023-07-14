<template>
    <div class="nav" :class="navShow ? 'navOn' : 'navOff'">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        router
      >
        <img src="../img/haoyue_logo_2.png" class="logo" />
        <div class="space"/>
            <el-menu-item index="/">首页</el-menu-item>
            <el-sub-menu index="1">
                <template #title>公司业务</template>
                    <el-menu-item index="1-1" :route="{ path: 'business1' }">业务1</el-menu-item>
                    <el-menu-item index="1-2" :route="{ path: 'business2' }">业务2</el-menu-item>
                    <el-menu-item index="1-3" :route="{ path: 'business3' }">业务3</el-menu-item>
            </el-sub-menu>
                <el-menu-item index="2" :route="{ path: 'news' }">新闻动态</el-menu-item>
                <el-menu-item index="3" :route="{ path: 'solution' }">解决方案</el-menu-item>
            <el-sub-menu index="4">
                <template #title>关于我们</template>
                    <el-menu-item index="4-1" :route="{ path: 'overview' }">公司概况</el-menu-item>
                    <el-menu-item index="4-2" :route="{ path: 'culture' }">企业文化</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
                <template #title>加入我们</template>
                    <el-menu-item index="5-1" :route="{ path: 'joinmsg' }">招聘信息</el-menu-item>
                    <el-menu-item index="5-2" :route="{ path: 'contactus' }">联系我们</el-menu-item>
            </el-sub-menu>
        
      </el-menu>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from "vue";
  
    
      const top = ref(null);
      const navShow = ref(true);
      const activeIndex = ref(0);
  
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

      function handleSelect(i,j,k){
        console.log(i);
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
  
  .el-menu--horizontal > .el-menu-item {
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