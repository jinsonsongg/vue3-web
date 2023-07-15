<template>
    <div class="boby">
        <div>
            <img src="../img/lou.jpg" alt="" class="img">
        </div>
        <div class="title">
            <h1 class="h1">福建昊钺科技有限公司</h1>

            <div class="msg">
                <h3 class="h3">公司简介:</h3>

                <h5 class="h5">福建昊钺科技成立于2019年，公司位于福州国家高新区，
                    致力于物联网产品的开发，
                    <br><br>
                    目前主流业务是智能医护管理系统，
                    ERP管理系统，智慧园区等物联网应用产品。</h5>
                    <br>
                    <el-button class="button" ><router-link to="/overview">了解更多</router-link></el-button>
            </div>
            
        </div>
    </div>
</template>
<style scoped>
.boby {
    margin: 20px;
    display: flex;
    justify-content: center; /* 在主轴上居中对齐 */
  align-items: center; /* 在交叉轴上居中对齐 */
    .h1{
        margin: 50px;
        font-size: 60px;
        letter-spacing: 5px;
    }

    .msg{
        margin: 50px;
        .h3 {
        color: #4b2121;
        letter-spacing: 5px;
    }
        .h5{
            color: #7d3838;
            letter-spacing: 2px;
            margin: 20px;
        }
        .button{
            margin-left: 80%;
        }
    }
    
}

.img {
    width: 500px;
}
</style>
<script setup>
</script>