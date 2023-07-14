<script setup>
import nav2 from './nav2.vue';
import footerin from './footer.vue';
import '../assets/font/font.css'
import {ref , reactive} from 'vue'


const news = reactive([
    {
        date: '2023/07/14',
        degree : 'SS',  //tag标签
        title : '这是一个标题',
        message : '这是今日事项有字字字字字字字字字字字',

    },{
        date: '2023/07/13',
        degree : 'R',  
        title : '这是一个标题',
        message : '这是今日事项有字字字字字字字字这是今日事项有字字字字字字字字字这是今日事项有字字字字字字字字字这是今日事项有字字字字字字字字这是今日事项有字字字字字字字字这是今日事项有字字字字这是今日事项有字字这是今日事项有这是今日事项有这是今日事项有字字字字字字字字字这是今日事项有字字字字字字字字字这是今日事项有字字字字字字字字字字字字字字字字字字这是今日事项有字字字字字字字字字字字字字字字字字字这是今日事项有字字字字字字字字字字字字字字字字这是今日事项有字字字字字字字字字字字字字字这是今日事项有字字字字字字字字字字这是今日事项有字字字字字字字字字字这是今日事项有字字字字字字字字字字字字',
        img: [{
            src:"src/img/img_1.png"
        },{
            src:'src/img/img_2.png'
        }]
            
        

    },{
        date: '2023/07/12',
        degree : 'N',  //tag标签
        title : '这是一个标题',
        message : '这是今日事项有字字字字字字字字字字字',
        img: [{
            src:"src/img/img_3.png"
        },],
        url:'www.baidu.com',
    },{
        date: '2023/07/11',
        degree : 'S',  //tag标签
        title : '这是一个标题',
        message : '这是今日事项有字字字字字字字字字字字',
        img: [{
            src:"src/img/img_1.png"
        },{
            src:'src/img/img_2.png'
        },{
            src:"src/img/img_1.png"
        },{
            src:'src/img/img_2.png'
        },
          ]
    },
])


</script>
<template>
    <div>
            <!-- <nav2/> -->
            <div class="nav2" style="height: 80px;"/>
        <div class="a">
            <img class="titleimg" src="../img/Meeting.png" alt="">
            <div class="title">公司要闻</div>
        </div>
        <div class="b">
            <el-tabs tab-position="left" class="tabs">
                <el-tab-pane v-for="(i, index) in news" :label="i.date">
                    <div class="newtitle">
                        {{ i.title }}  - 
                        <el-tag class="mx-1" effect="dark"  size="large">{{i.degree}}</el-tag>
                    </div>
                    <div class="date">
                         {{ i.date }}
                    </div>
                    <div class="msg">
                         {{ i.message }}
                    </div>
                    <div :v-if="i.img" class="imgs">
                        <div v-for="newsimg in i.img">
                            <img  :src="newsimg.src" alt="" class="img">
                        </div>
                        
                    </div>
                    
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <footerin/>
</template>
<style scoped>
.a{
    width: 100%;
    height: 400px;
    background-image: url('../img/bj1.jpg'); 
    background-repeat:no-repeat;
    background-size:100%;  
    display: flex;
    .titleimg{
        width: 500px;
        height: 300px;
        margin: 60px 170px;
    }
    .title{
        font-size: 80px;
        
        font-family: PMZDBTT;
        margin-top: 140px;
    }
}
.b{
    width: 75%;
    height: 800px;
    display: flex;
    /* border: 2px blue solid; */
    margin: 30px 0px 0px 200px;

    .tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    }
    .tabs{
        width: 90%;
        height: 600px;

        .newtitle{
            font-size: 30px;
            font-weight: bold;
            font-family: "宋体", Arial, sans-serif;
            margin: 20px 0px 15px 90px;

            .mx-1{
                margin: -5px 0 0 0;
            }
        }
        .date{
            margin: 20px;
        }
        .msg{
            margin: 20px;
            max-height: 300px;
            overflow: auto;
        }
    }
}
.el-tabs--left .el-tabs__content {
  height: 100%;
}

.imgs{
    max-width: 95%;
    max-height: 300px;
    margin: 20px 40px;
    /* border: 2px blue solid; */
    display: flex;
    /* overflow-x: scroll; */
    white-space: wrap;
}

.img{
    width: 100px;
    height: 100px;
    transition: transform 0.5s;
    margin: 30px;
    
}

.img:hover{
    transform: scale(2);
}
</style>
