<template>
    <div style="height: 800px;">
        <div class="titlediv  wow animate__jackInTheBox"  data-wow-delay="1s">
            <div class="title ">丰富的移动应用app</div>
            <hr class="hr">
            <div class="tilieinfo">开启移动办公新体验</div>
        </div>
        <div class="appsdiv">
            <div class="app">
                <div><img class="appimg" src="1" alt=""></div>
                小程序
            </div>
            <div class="app">
                <div><img class="appimg" src="1" alt=""></div>
                安卓
            </div>
            <div class="app">
                <div><img class="appimg" src="1" alt=""></div>
                苹果
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

.appsdiv{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    .app{
        width: 100px;
        height: 100px;
        margin-right: 20px;
        margin-left: 20px;
    }
    .appimg{
        width: 50px;
        height: 50px;
    }
}
</style>
<script setup>
</script>