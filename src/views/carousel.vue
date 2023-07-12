<template>
  <div class="carousel">
    <el-carousel class="carousel_size" :interval="5000">
      <el-carousel-item >
        <div class="rb rb1">
            <img class="img" src="../img/Engineering_team.svg" alt="">
            <div class="title">智慧物业管理系统
                <div class="title_info">
                    用数字化技术为物业收费</div>
                <div class="title_info">
                    房屋租赁、园区招商、物业客户服务等管理赋能</div>
            </div>
            <el-button>点击使用</el-button>
        </div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="rb rb2">
            <img class="img" src="../img/undraw_world_re_768g.svg" alt="">
            <div class="title">智能物联
                <div class="title_info">软硬件一体化解决方案，提升社区安全和用户体验</div>
                <div class="title_info">信息化系统与硬件无缝对接，开启智慧管理模式</div>
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="rb rb3">
            <span>hi~ hi~ </span>
        </div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="rb rb4">
            <span>hi~ hi~ </span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
  
  <style scoped>


    .rb{
        color: rgb(19, 20, 20);
        display: flex;
        align-items: center; 
        justify-content: center;
        .title{
            color: rgba(255, 255, 255, 0.75);
            font-size: 50px;
            margin: 50px;
            .title_info{
                font-size: 25px;
                margin: 20px;
            }
        }
        .img{
            height: 250px;
            margin: 50px;
        }
    }



    .carousel{
        background-image: url('../img/bj2.jpg');
        background-size: cover;
        height: 420px;
        .carousel_size{
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
  