<template>
    <div style="height: 800px;">
        <div class="titlediv  wow animate__jackInTheBox" data-wow-delay="0.5s">
            <div class="title ">丰富的移动应用app</div>
            <hr class="hr">
            <div class="tilieinfo">开启移动办公新体验</div>
        </div>
        <div class="appsdiv shell">
            <div class="app box card wow animate__bounceInUp"  data-wow-delay="0.1s">
                <div class="content" style="background: linear-gradient(135deg, #2BC0E4, #EAECC6);">
                    <img class="appimg" src="../img/Solid_Brands_Wechat.png" alt="">
                    <h2><br><br><br><br>微信小程序</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">通过微信小程序了解，用户可以得到各种生活方面的帮助。</span>
                </div>
            </div>
            <div class="app box card wow animate__bounceInUp"  data-wow-delay="0.2s">
                <div class="content" style="background: linear-gradient(135deg, #FFAA00, #FF5E3A);">
                    <img class="appimg" src="../img/Solid_Brands_Android.png" alt="">
                    <h2><br><br><br><br>安卓</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">通过安卓手机设置各种提示</span>
                </div>
            </div>
            <div class="app box  card wow animate__bounceInUp"  data-wow-delay="0.3s">
                <div class="content" style="background: linear-gradient(135deg, #F6CEEC, #D939CD);">
                    <img class="appimg" src="../img/Solid_Brands_Apple.png" alt="">
                    <h2><br><br><br><br>苹果</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">尚未开发</span>
                </div>
            </div>
            <div class="app box  card wow animate__bounceInUp"  data-wow-delay="0.4s">

                <div class="content" style="background: linear-gradient(135deg, #6A11CB, #2575FC);">
                    <img class="appimg" src="../img/Solid_Devices_Watch.png" alt="">
                    <h2><br><br><br><br>手表</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">通过手表实时了解呼叫信息。</span>
                </div>
            </div>
            <div class="app box  card wow  wow animate__bounceInUp"  data-wow-delay="0.5s">
                <div class="content" style="background: linear-gradient(135deg, #67B26F, #4CA2CD);">
                    <img class="appimg" src="../img/Solid_Devices_Server.png" alt="">
                    <h2><br><br><br><br>服务器</h2>
                    <img src="1" alt="">
                    <span class="" style="margin-top: 50px;">服务器储存所有信息。</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.titlediv {
    text-align: center;
    margin: 10px;

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
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.card::after {
    content: "";
    display: block;
    width: 100%;
    height: 200%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(0);
    transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.card .content {
    width: 150px;
    height: 300px;
    margin: 0;
    
}

.card .content *:not(h2) {
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
    transition-delay: 0.1s;
}



.shell {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
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

.shell:hover .box {
    transform: rotateY(20deg);
}

.shell .box:hover {
    transform: rotateY(0deg) scale(1.25);
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.7);
    z-index: 1;
}

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
    transition: 0.3s;
    font-size: 20px;
    transform: translateY(-100px);
}


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
