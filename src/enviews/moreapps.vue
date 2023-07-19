<template>
    <div style="height: 800px;">
        <div class="titlediv  wow animate__jackInTheBox" data-wow-delay="0.5s">
            <div class="title ">Rich mobile application apps</div>
            <hr class="hr">
            <div class="tilieinfo">Start a new experience of mobile office</div>
        </div>
        <div class="appsdiv shell">
            <div class="app box card wow animate__bounceInUp"  data-wow-delay="0.1s">
                <div class="content" style="background: linear-gradient(135deg, #2BC0E4, #EAECC6);">
                    <img class="appimg" src="../img/Solid_Brands_Wechat.png" alt="">
                    <h2><br><br><br><br>WeChat mini program</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 75px;">Through the WeChat mini program, users can receive various assistance in their daily lives.</span>
                </div>
            </div>
            <div class="app box  card wow animate__bounceInUp"  data-wow-delay="0.2s">

                <div class="content" style="background: linear-gradient(135deg, #FFAA00, #FF5E3A);">
                    <img class="appimg" src="../img/Solid_Brands_Android.png" alt="">
                    
                    <h2><br><br><br><br>Android</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">Set various prompts through Android phones</span>
                </div>
            </div>
            <div class="app box  card wow animate__bounceInUp"  data-wow-delay="0.3s">

                <div class="content" style="background: linear-gradient(135deg, #F6CEEC, #D939CD);">
                    <img class="appimg" src="../img/Solid_Brands_Apple.png" alt="">
                    
                    <h2><br><br><br><br>IOS</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">Not yet developed</span>
                </div>
            </div>
            <div class="app box  card wow animate__bounceInUp"  data-wow-delay="0.4s">

                <div class="content" style="background: linear-gradient(135deg, #6A11CB, #2575FC);">
                    <img class="appimg" src="../img/Solid_Devices_Watch.png" alt="">
                    
                    <h2><br><br><br><br>SmartWatch</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">Real time access to call information through a smartwatch.</span>
                </div>
            </div>
            <div class="app box  card wow  wow animate__bounceInUp"  data-wow-delay="0.5s">

                <div class="content" style="background: linear-gradient(135deg, #67B26F, #4CA2CD);">
                    <img class="appimg" src="../img/Solid_Devices_Server.png" alt="">
                    
                    <h2><br><br><br><br>server</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">The server stores all information.</span>
                </div>
            </div>
        </div>


    </div>
</template>
<style scoped>
.titlediv {
    text-align: center;
    margin: 10px;

    /* height: 800px; */
    .title {
        font-size: 50px;
        margin: 50px 0 20px 0;
    }

    .hr {
        width: 350px;
    }

    .tilieinfo {
        font-size: large;
    }
}

.appsdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    .app {
        width: 200px;
        height: 350px;
        margin-right: 10px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 50px;
    }

    .appimg {
        width: 24px;
        height: 24px;
    }
}

.card::before {
    content: "";
    width: 100%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 0 0;
    /* 过渡效果: css属性名 时长 贝塞尔曲线 */
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.card::after {
    content: "";
    display: block;
    width: 100%;
    height: 200%;
    /* background: linear-gradient(to bottom,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.25) 55%,
    rgba(0,0,0,0.8) 100%); */
    /* 绝对定位 */
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(0);
    /* 过渡效果 */
    transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.card .content {
    width: 150px;
    height: 300px;
    /* border: 1px #000 solid; */
    margin: 0;
    
}

.card .content *:not(h2) {
    /* .content下，除了h2，其他元素隐藏并下移20px */
    opacity: 0;
    transform: translateY(20px);
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.7s cubic-bezier(0.19, 1, 0.22, 1);
}

.card:hover {
    align-items: center;
}

.card:hover::before {
    transform: translateY(-5%);
}

.card:hover::after {
    transform: translateY(-50%);
}

.card:hover .content {
    transform: translateY(0);
}

.card:hover .content *:not(h2) {
    opacity: 1;
    transform: translateY(0);
    /* 过渡效果延迟 */
    transition-delay: 0.1s;
}



.shell {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* 设置3d变化 */
    transform-style: preserve-3d;
    /* 添加透视效果 */
    perspective: 900px;
}

.shell .box {
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    margin: 30px;
    transform: rotateY(0deg);
    transition-delay: .1s;
    border-radius: 5px;
    border: #fff 5px solid;
}

/* 当鼠标所有卡片的父元素点shell上时，
        所有卡片像Y轴翻转20度 */
.shell:hover .box {
    transform: rotateY(20deg);
}

/* 当鼠标悬浮在当前卡片上时，当前卡片的翻转角度为0，
        并放大一点二五倍，加个阴影 */
.shell .box:hover {
    transform: rotateY(0deg) scale(1.25);
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.7);
    z-index: 1;
}

/* 当鼠标悬浮在卡片上时，
        当前卡片后面的所有卡片全部都反向翻转负20度 */
.shell .box:hover~.box {
    transform: rotateY(-20deg);
}

.shell .box .images img {
    width: 100%;
}

.shell .box .content {
    position: absolute;
    top: 0;
    width: 90%;
    height: 100%;
    z-index: 999;
    padding: 15px;
}

.shell .box .content h2 {
    /* color: rgb(210, 140, 140); */
    transition: 0.3s;
    font-size: 20px;
    transform: translateY(-100px);
}
/* 
.shell .box:hover .content h2 {
     transform: translateY(-15px); 
} */

.shell .box .content p {
    color: rgb(0, 0, 0);
    transition: 0.3s;
    font-size: 14px;
    transform: translateY(600px);
    background-color: rgba(255, 255, 255, 0.7);
}

.shell .box:hover .content p {
    transform: translateY(220px);
}
</style>
<script setup>
</script>