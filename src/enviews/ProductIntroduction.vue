<template>
  <div>
    <div class="titlediv wow animate__jackInTheBox">
      <div class="title">Mature product system</div>
      <hr class="hr">
      <div class="tilieinfo">Focusing on industry hotspots and solving smart management challenges</div>
    </div>
    <div class="product">
      <div class="carddiv">
        <el-card class="card wow animate__flipInY"  data-wow-delay="0.5s" >
          <img src="../img/img_1.png"
            class="image" />
          <div >
            <span class="cardtitle">Property Management System</span>
            <div class="cardbottom">
              <span class="cardsay">Comprehensive digital intelligent management of property management</span>
              <br>
              <span class="cardsay">Help enterprises minimize costs and increase efficiency to the greatest extent possible</span>
              <br>
              <el-button class="cardbutton">Jump Details</el-button>

            </div>
          </div>
        </el-card>


        <el-card class="card wow animate__flipInY"  data-wow-delay="0.7s"  >
          <img src="../img/img_2.png"
            class="image" />
            <div >
            <span class="cardtitle">Property Management System</span>
            <div class="cardbottom">
              <span class="cardsay">Comprehensive digital intelligent management of property management</span>
              <br>
              <span class="cardsay">Help enterprises minimize costs and increase efficiency to the greatest extent possible</span>
              <br>
              <el-button class="cardbutton">Jump Details</el-button>

            </div>
          </div>
        </el-card>
        <el-card class="card wow animate__flipInY"  data-wow-delay="0.9s"  >
          <img src="../img/img_3.png"
            class="image" />
            <div >
            <span class="cardtitle">Property Management System</span>
            <div class="cardbottom">
              <span class="cardsay">Comprehensive digital intelligent management of property management</span>
              <br>
              <span class="cardsay">Help enterprises minimize costs and increase efficiency to the greatest extent possible</span>
              <br>
              <el-button class="cardbutton">Jump Details</el-button>

            </div>
          </div>
        </el-card>
      </div>
        <div class="carddiv">

        <el-card class="card wow animate__flipInY"  data-wow-delay="0.6s">
          <img src="../img/img_4.png"
            class="image" />
            <div >
            <span class="cardtitle">Property Management System</span>
            <div class="cardbottom">
              <span class="cardsay">Comprehensive digital intelligent management of property management</span>
              <br>
              <span class="cardsay">Help enterprises minimize costs and increase efficiency to the greatest extent possible</span>
              <br>
              <el-button class="cardbutton">Jump Details</el-button>

            </div>
          </div>
        </el-card>
        <el-card class="card wow animate__flipInY"  data-wow-delay="0.8s"  >
          <img src="../img/img_5.png"
            class="image" />
            <div >
            <span class="cardtitle">Property Management System</span>
            <div class="cardbottom">
              <span class="cardsay">Comprehensive digital intelligent management of property management</span>
              <br>
              <span class="cardsay">Help enterprises minimize costs and increase efficiency to the greatest extent possible</span>
              <br>
              <el-button class="cardbutton">Jump Details</el-button>

            </div>
          </div>
        </el-card>
        <el-card class="card wow animate__flipInY"  data-wow-delay="1s"  >
          <img src="../img/img_6.png"
            class="image" />
            <div >
            <span class="cardtitle">Property Management System</span>
            <div class="cardbottom">
              <span class="cardsay">Comprehensive digital intelligent management of property management</span>
              <br>
              <span class="cardsay">Help enterprises minimize costs and increase efficiency to the greatest extent possible</span>
              <br>
              <el-button class="cardbutton">Jump Details</el-button>

            </div>
          </div>
        </el-card>
      </div>


      <!-- 一行三列
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
                
            </el-row> -->
    </div>




  </div>
</template>
<style>
.titlediv {
  text-align: center;
  margin: 10px;
  
  /* height: 800px; */
  .title{
    font-size: 50px;
    margin: 50px 0 20px 0;
  }
  .hr{
    width: 350px;
  }
  .tilieinfo{
    font-size: large;
  }
}

.el-row {
  margin-bottom: 20px;
  border: 1px solid black;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  border: 1px solid black;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.carddiv {
  display: flex;
  margin: 10px 115px;
  text-align: center;
}

.card {
  width: 400px;
  margin: 10px 30px;
  text-align: center;
  padding: 0;
  transition: transform 0.5s, filter 0.5s;
  
  .image{
    /* min-height: 300px;
    min-width: 300px;
    max-width: 330px;
    max-width: 330px; */
    width: 330px;
    height: 330px;
    /* margin: 10px; */
  }

  .cardtitle{
    font-size: 20px;
    font-weight: bold;
    margin: 12px;
  }
  .cardbottom {
    margin: 2px;
    display: block;
    .cardsay {
      font-size: 14px;
      color: rgba(0, 0, 0);
      margin: 2px;
    }

    .cardbutton {
      color: #000;
      margin: 5px;
      
    }
  }
}

.card{
  filter: none;
}

.card:hover{
  filter: blur(5px);
}
.card:hover {
  transform: scale(1.2);
  filter: none;
}
</style>
<script setup>

import { ref } from 'vue';

const cardfilter = ref([]);

</script>