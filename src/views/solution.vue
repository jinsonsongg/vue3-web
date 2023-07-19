<template>
  <div>
    <div class="nav2" style="height: 80px;" />
    <div class="a wow animate__jello">
      <img src="../img/fix.png" alt="" class="img">
      <div class="title1">解决方案</div>
    </div>
    <div class="b">
      <div class="tu">
        <img src="../img/nobug.png" alt="" class="img wow animate__rollIn">
      </div>
      <div style="margin: -40px 0 0 0;">
        <div>
          <h3>制作的程序</h3>
          <div class="num">{{ num.a }}</div>
        </div>
        <div>
          <h3>编写的代码</h3>
          <div class="num">{{ num.b }}</div>
        </div>
        <div>
          <h3>解决的报错</h3>
          <div class="num">{{ num.c }}</div>
        </div>
      </div>
    </div>
    <div class="C">
      <div class="item card1  wow flipInY" data-wow-delay="0.5s" data-wow-offset="10">
        <p class="title">IT运维管理</p>
        <div class="Shielding">
          <div class="p">IT运维管理是企业对IT基础设施进行维护和管理的过程。
            通过故障排除、设备监控、资源管理等功能，确保系统的稳定性和安全性。
            有效的IT运维管理可以降低系统故障和停机时间，提高效率和客户满意度。</div>
        </div>
      </div>
      <div class="item  card2  wow flipInY" data-wow-delay="0.6s" data-wow-offset="10">
        <p class="title">物联网</p>
        <div class="Shielding">
          <p>物联网是通过互联网将智能设备和物理对象连接起来的系统。
            应用广泛，如智能家居、智慧城市、智慧农业等。
            通过物联网，可以远程控制设备、监测环境数据等。
            依赖于传感器、通信技术、云计算和大数据分析等。</p>
        </div>
      </div>
      <div class="item  card3  wow flipInY" data-wow-delay="0.4s" data-wow-offset="10">
        <p class="title">云计算</p>
        <div class="Shielding">
          <p>云计算是一种基于互联网的计算模式，通过远程的服务器和网络资源提供计算能力、存储空间和应用服务。
            用户可以通过互联网按需使用这些资源，无需购买和管理实体硬件。
            云计算提供了高效、灵活和可扩展的计算方式，可以快速响应业务需求。</p>
        </div>
      </div>
      <div class=" item   card4  wow flipInY" data-wow-delay="0.9s" data-wow-offset="10">
        <p class="title">软件服务</p>
        <div class="Shielding">
          <p>软件服务是指通过互联网或网络连接提供的基于软件的应用和解决方案。
            通过软件服务，用户可以在云端或远程服务器上使用各种软件功能和服务，以满足他们的需求。
            软件服务的优势在于灵活性和可扩展性，可以根据需要随时获取所需的软件功能。</p>
        </div>
      </div>
      <div class=" item   card5  wow flipInY" data-wow-delay="0.8s" data-wow-offset="10">
        <p class="title">服务器存储</p>
        <div class="Shielding">
          <p>服务器存储是指服务器用于存储数据和文件的容量和能力，可通过网络访问和管理。
            通过服务器存储，用户可以中央集中管理和共享数据，提供可靠的数据存储解决方案。
          </p>
        </div>
      </div>
    </div>
    <div class="b">
      <div>
        <h1>有bug？</h1>
        <div class="m20">欢迎反馈:</div>
        <div class="m20"><el-input v-model="textarea" :rows="5" type="textarea" resize='none' placeholder="请输入你遇到的问题"
            class="input" />
          <br>
          <el-button class="m20" @click="up"> 提交</el-button>
        </div>
      </div>
    </div>
    <div class="bofankuan">
      播放框
    </div>
  </div>
  <footerin />
</template>
<style scoped>
.a {
  width: 100%;
  height: 400px;
  background-image: url('../img/bj1.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;

  .img {
    width: 500px;
    height: 300px;
    margin: 60px 170px;
  }

  .title1 {
    font-size: 80px;

    font-family: PMZDBTT;
    margin-top: 140px;
  }
}

.b {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 5px 0 50px 0;

  .num {
    font-size: 35px;
    font-family: DIGII;
    margin: -5px;
  }

  .tu {
    margin: 50px;

    .img {
      width: 250px;
      height: 250px;
      margin: 20px 25px 20px -150px;
    }
  }

  .input {
    width: 600px;
  }

  .m20 {
    margin: 20px;
  }
}

.C {
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 400px;
  margin-left: 20%;
}

.C .item {
  margin: 10px;
  /* padding: 20px; */
  flex: 1;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.card1 {
  background-image: url(../img/81174939.jpg);
}

.card2 {
  background-image: url(../img/82175114.jpg);
}

.card3 {
  background-image: url(../img/83175149.jpg);
}

.card4 {
  background-image: url(../img/84175208.jpg);
}

.card5 {
  background-image: url(../img/85175230.jpg);
}

.C .item:hover .Shielding {
  transform: translateY(-100%);
  opacity: 1;
}

.title {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: rgb(255, 255, 255);
  font-weight: bolder;
}

.Shielding {
  position: absolute;
  top: calc(100% + 10px);
  /* margin: 10px; */
  left: 0;
  width: 80%;
  height: 280px;
  transform: translateY(-100%);
  padding: 20px;
  background-color: rgba(82, 82, 216, 0.75);
  color: rgb(255, 255, 255);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  .p {
    padding: 5px;
    width: 100%;
    overflow-wrap: break-word;
  }
}

.Shielding p {
  margin: 0;
}
</style>
<script setup>
/**********组件*********** */
import footerin from './footer.vue'
/*******样式******** */
import '../assets/font/font.css'
/********vue********* */
import { ref, onMounted, watch } from 'vue';

/*********变量***** */

const textarea = ref('')

const list = ref({
  a: 9,
  b: 5556415321511535,
  c: 98
})

const num = ref({
  a: 0,
  b: 0,
  c: 0,
})
/**********方法********* */

const updateNum = () => {
  const keys = Object.keys(num.value);
  const totalDuration = 3000;

  keys.forEach((key) => {
    const difference = list.value[key] - num.value[key];
    const targetValue = list.value[key];
    const timeInterval = difference < 60 ? totalDuration / difference : 50; // 每次增加的时间间隔

    const steps = Math.floor(totalDuration / timeInterval); // 根据时间间隔计算总步数
    const stepValue = Math.floor(difference / steps); // 计算每步增加的值
    const fluctuations = new Array(steps).fill().map(() => Math.floor(Math.random() * (stepValue + 1)));
    // 生成与总步数相等的随机浮动值数组

    let currentStep = 0;

    const increaseNumValue = () => {
      currentStep++;

      if (currentStep <= steps && num.value[key] < targetValue) { // 当 num.value[key] 小于 targetValue 时才进行增加
        // 根据步数计算当前增加的值并加上浮动值
        num.value[key] += stepValue + fluctuations[currentStep - 1];

        setTimeout(increaseNumValue, timeInterval);
      } else {
        num.value[key] = Math.min(num.value[key], targetValue); // 如果 num.value[key] 大于等于 targetValue，则取二者的最小值
      }
    };
    increaseNumValue();
  });
  setTimeout(() => {
    num.value = list.value
  }, 3010);
};
function up() {

  if(textarea.value){
    alert(textarea.value);
  }
  textarea.value = null;
}
onMounted(() => {
  updateNum();
});

watch([list, num], () => {
  updateNum();
});
</script>tou