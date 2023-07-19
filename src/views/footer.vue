<template>
    <div class="footer">
        <div class="imghere">
          <img class="img" src="../img/haoyue_logo_2.png" alt="logo2" >
        </div>
        <div class="footer_text">
          <span class="span">© 2019-2023 昊钺科技. All rights reserved. </span>
          <span class="span"><a class="a" href="#">闽ICP备2022014754号</a></span>
        </div>
    </div>
</template>
<style scoped>
body{
  border: 0;
  padding: 0 !important;
  margin: 0;
}

.footer{
  bottom: 0px;
  text-align: center;
  width: 100%;
  height: 175px;
  background-color: rgb(31,35,41);
  .img{
    width: 200px;
  }
  .footer_text{
    color: #999999;
    .span{
      margin: 0 16px;
    }
    .a{
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
