<script setup>
/*********组件********** */
import footerin from './footer.vue';
/**********样式*********** */
import '../assets/font/font.css'

/************vue************ */
import { ref, reactive } from 'vue'

/***********参数*********** */
const newsto = reactive([
    {
        title: "网络技术最新资讯",
        attribute: "最新资讯", type: "NN",//最新资讯：NN  重点宣传：FN  产品新闻：PU
        time: "2023-07-17",
        content: "了解网络技术领域的最新进展，这些进展正在改变我们的连接方式。从高速5G网络到尖端的物联网解决方案，网络的未来已经来临。通过我们全面的报道保持信息不落后。",
        url: "https://www.baidu.com"
    },
    {
        title: "网络技术重点宣传",
        attribute: "重点宣传", type: "FN",
        time: "2023-06-23",
        content: "探索正在改变网络基础设施并推动数字化转型的关键创新。了解软件定义网络（SDN）、网络功能虚拟化（NFV）和云原生技术等方面的进展，这些技术提高了网络的灵活性、可扩展性和安全性。这是一个不容错过的机会。",
        url: "https://www.baidu.com"
    },
    {
        title: "网络技术产品新闻",
        attribute: "产品新闻", type: "PU",
        time: "2023-05-12",
        content: "网络技术正不断演进，为我们带来更强大的产品。通过优化，我们推出了新一代网络产品，提供更快的速度、更强的安全性和更好的用户体验。了解如何将这些创新产品应用于您的业务。",
        url: "https://www.baidu.com"
    },
    {
        title: "网络技术行业巨头发布最新产品",
        attribute: "最新资讯", type: "NN",
        time: "2023-07-17",
        content: "重要网络技术公司宣布发布了最新一代产品，引领着网络技术的发展潮流。新产品涵盖了网络安全、云计算、人工智能等领域，为用户带来更安全、高效、智能的网络体验。",
        url: "https://www.baidu.com"
    },
    {
        title: "网络技术创新成果获得国际奖项",
        attribute: "重点宣传", type: "FN",
        time: "2023-06-23",
        content: "网络技术研究团队在国际技术大会上喜获重要奖项，表彰其在网络领域的创新突破与贡献。其研究成果涵盖了网络性能优化、数据安全保护、网络架构设计等方面，为全球网络技术发展做出了重要贡献。",
        url: "https://www.baidu.com"
    },
    {
        title: "网络技术应用案例分享会成功举办",
        attribute: "产品新闻", type: "PU",
        time: "2023-05-12",
        content: "网络技术应用案例分享会在近日成功举办，吸引了众多行业专家和业界从业者参与。现场分享了来自不同行业领域的网络技术应用实例，包括智能物流、智慧城市、工业互联网等，展示了网络技术的潜力与未来发展方向。",
        url: "https://www.baidu.com"
    },
    {
        title: "区块链技术与网络技术的融合探索",
        attribute: "最新资讯", type: "NN",
        time: "2023-04-18",
        content: "区块链技术与网络技术的融合成为当前热点话题，引发了广泛关注。专家们对于如何将区块链技术与网络技术相结合，探索出了一系列新的应用场景，涉及到去中心化网络、数字身份验证、智能合约等领域。",
        url: "https://www.baidu.com"
    }
]);

var newsshow = ref('all')

/***********方法********** */
function choosenews(newtpye) {
    newsshow.value = newtpye;
}
</script>
<template>
    <div>
        <div class="nav2" style="height: 80px;" />
        <div class="a wow animate__fadeInDown">
            <img class="titleimg" src="../img/Meeting.png" alt="">
            <div class="title">公司要闻</div>
        </div>
        <div class="c "> 
            <div class="wl">
                <el-affix target=".c" :offset="80">
                    <div class="wltype" :style="{'background-color': newsshow === 'all' ? 'aquamarine' : null}" @click="choosenews('all')">全部新闻 </div>
                    <div class="wltype" :style="{'background-color': newsshow === 'NN' ? 'aquamarine' : null}" @click="choosenews('NN')">最新资讯</div>
                    <div class="wltype" :style="{'background-color': newsshow === 'FN' ? 'aquamarine' : null}" @click="choosenews('FN')">重点宣传</div>
                    <div class="wltype" :style="{'background-color': newsshow === 'PU' ? 'aquamarine' : null}" @click="choosenews('PU')">产品新闻</div>
                </el-affix>
            </div>
            <div class="air" />
            <div class="wr">
                <div class="news" v-for="i in newsto">
                    <div v-if="newsshow == 'all' ? true : (i.type == newsshow ? true : false)">
                        <div class="newtitle">{{ i.title }}</div>
                        <div class="newtime">{{ i.time }}</div>
                        <div class="new">{{ i.content }}</div>
                        <div class="morenews"><a href={{i.url}}>更多详情..</a></div>
                        <hr>
                    </div>
                </div>
            </div>
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

    .titleimg {
        width: 500px;
        height: 300px;
        margin: 60px 170px;
    }
    .title {
        font-size: 80px;
        font-family: PMZDBTT;
        margin-top: 140px;
    }
}

.c {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    height: auto;
    margin: 50px;
    .air {
        width: 100px;
    }

    .wl {
        width: 300px;
        height: 200px;
        /* border: #6b778c 1px solid; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

        .wltype {
            width: 300px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            /* padding: 5px; */
        }
        .wltype:hover{
            background-color: aquamarine;
        }
    }

    .wr {
        width: 600px;
        height: auto;
        /* border: #6b778c 1px solid; */

        .news {
            padding: 10px 10px 10px 20px;
            /* bordser: #6b778c 1px solid; */

        }

        .newtitle {
            font-size: 20px;
            font-weight: bolder;
            padding: 5px;
        }

        

        .newtime {
            text-align: right;
            padding: 1px 25px;
        }

        .new {
            text-indent: 2em;
            /* border: 10px solid; */
            max-width: 600px;
            padding: 10px;
            word-wrap: break-word;
        }

        .morenews {
            margin: 1px 30px;
            text-align: right;
        }
    }
}
</style>
