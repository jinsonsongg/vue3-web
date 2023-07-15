<template>
  <div class="carousel">
    <el-carousel class="carousel_size" :interval="0">
      <el-carousel-item class="bigrb">
        <div class="rb rb1">
          <img class="img" src="../img/Engineering_team.svg" alt="">
          <div class="title">智慧物业管理系统
            <div class="title_info">
              用数字化技术为物业收费</div>
            <div class="title_info">
              房屋租赁、园区招商、物业客户服务等管理赋能</div>
          </div>
        </div>
        <a href="" class="a"><span>点击预览</span></a>
      </el-carousel-item>
      <el-carousel-item>
        <div class="rb rb2">
          <img class="img" src="../img/undraw_world_re_768g.svg" alt="">
          <div class="title">智能物联
            <div class="title_info">软硬件一体化解决方案，提升社区安全和用户体验</div>
            <div class="title_info">信息化系统与硬件无缝对接，开启智慧管理模式</div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="rb rb3">
          <span>hi~ hi~ </span>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="rb rb4">
          <span>hi~ hi~ </span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
  
<style scoped>
.bigrb {
  height: 400px;
}

.rb {
  color: rgb(19, 20, 20);
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: rgba(255, 255, 255, 0.75);
    font-size: 50px;
    margin: 30px 50px;

    .title_info {
      font-size: 25px;
      margin: 10px 20px;
    }
  }

  .img {
    height: 250px;
    margin: 50px;
  }
}

.a {
  text-decoration: none;
  position: absolute;
  left: 67%;
  top: 80%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  width: 250px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  border-radius: 25px;
  z-index: 2;
}

a::before {
  content: '';
  position: absolute;
  left: -3px;
  right: -3px;
  top: -3px;
  bottom: -3px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 25px;
  filter: blur(20px);
  z-index: -1;
}

.a:hover {
  animation: buttonlight 8s infinite;
}

.a:hover::before {
  animation: buttonlight 8s infinite;
}

@keyframes buttonlight {
  100% {
    background-position: -300% 0;
  }
}



.carousel {
  background-image: url('../img/bj2.jpg');
  background-size: cover;
  height: 420px;

  .carousel_size {
    height: 400px;
  }
}



.el-carousel__item h3 {
  color: #ffffff00;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
  height: 100%;
}
</style>
  