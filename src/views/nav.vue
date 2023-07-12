<template>
    <nav class="navbar">
      <div >
        <img class="logo" src="../img/haoyue_logo_2.png" alt="">
      </div>
      <!-- <ul class="nav-links">

        <li><router-link to="/">首页</router-link></li>
        <li @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false">
          公司业务
          <ul v-show="showSubMenu" class="submenu">
            <li><router-link to="/">关于我们</router-link></li>
            <li><router-link to="/">关于我们</router-link></li>
            <li><router-link to="/">关于我们</router-link></li>
          </ul>
        </li>
        <li><router-link to="/">关于我们</router-link></li>
      </ul> -->
      
      <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>公司业务</template>
      <el-menu-item index="2-1">业务1</el-menu-item>
      <el-menu-item index="2-2">业务2</el-menu-item>
      <el-menu-item index="2-3">业务3</el-menu-item>
      <el-menu-item index="2-4">业务4</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">新闻动态</el-menu-item>
    <el-menu-item index="4">解决方案</el-menu-item>
    <el-sub-menu index="5">
        <template #title>关于我们</template>
        <el-menu-item index="5-1">公司概况</el-menu-item>
        <el-menu-item index="5-2">企业文化</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
        <template #title>加入我们</template>
        <el-menu-item index="6-1">招聘信息</el-menu-item>
        <el-menu-item index="6-2">联系我们</el-menu-item>
    </el-sub-menu>

  </el-menu>

    </nav>
  </template>
  
  <script setup>
import {ref} from 'vue'


const activeIndex = ref()

function handleSelect(){
    console.log(activeIndex);
}
  </script>
  
  <style>
  .navbar {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* padding: 0 30px; */
    margin: 0 30px;
    width: 90%;
    text-align: center;
  }
  
  .logo {
    width: 120px;
    height: 75px;
    margin: 0 175px;
  }

  .el-menu{
    
    width: 90%;
    margin: 0 5px;
    font-size: 16px;
    font-weight: bold;
    font-size: 20px;
    
  }
  </style>