<template>
    <div>
        <div class="nav2" style="height: 80px;" />
        <div class="a">
            <img src="../img/problem.png" alt="" class="img">
            <div class="title">招聘信息</div>
        </div>
        <div class="b">
            <div>
                <h1 style="text-align: center; margin-top: 50px;" class="wow animate__bounceInUp">详细信息</h1>
                <div class="info">
                    <el-card class="box-card gzsj wow animate__lightSpeedInRight" data-wow-delay="0.5s">
                        <template #header>
                            <div class="card-header">
                                <h4 class="h4 ">工作时间:</h4>
                            </div>
                        </template>
                        <div>
                            上午09:00 - 下午06:00</div>
                        <br>
                        <div>双休、偶尔加班</div>
                    </el-card>
                    <el-card class="box-card treatment wow animate__zoomIn" data-wow-delay="0.5s">
                        <template #header>
                            <div class="card-header">
                                <h4 class="h4">待遇</h4>
                            </div>
                        </template>
                        <div class="tag-container">
                            <el-tag>住房补贴</el-tag>
                            <el-tag>宿舍有空调</el-tag>
                            <el-tag>团建聚餐</el-tag>
                            <el-tag>零食下午茶</el-tag>
                            <el-tag>带薪年假</el-tag>
                            <el-tag>法定节假日</el-tag>
                            <el-tag>节假日加班费</el-tag>
                            <el-tag>夜班补助</el-tag>
                            <el-tag>加班补助</el-tag>
                            <el-tag>绩效奖金</el-tag>
                            <el-tag>年终奖</el-tag>
                            <el-tag>定期体检</el-tag>
                            <el-tag>五险一金</el-tag>
                            <span>&nbsp;&nbsp;.&nbsp;.&nbsp;.</span>
                        </div>
                    </el-card>
                    <el-card class="img wow animate__lightSpeedInLeft" data-wow-delay="0.5s">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image" />
                    </el-card>
                </div>
                <div class="post">
                    <h1 style="text-align: center; margin: 50px;">招聘岗位</h1>
                    <div class="guanfengqin">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item name="1">
                                <template #title>
                                    <h2 class="h2">嵌入式开发工程师</h2>
                                    <div class="postinfo">
                                        <el-tag class="ml-2" type="info">经验不限</el-tag>
                                        <el-tag class="ml-2" type="info">本科 +</el-tag>
                                    </div>
                                </template>
                                <div class="requirements">
                                    <div class="jobrs1">
                                        <div class="jobtitle">薪资</div>
                                        <ul class="ul">6-9K·13薪</ul>
                                    </div>
                                    <div class="jobrs2">
                                        <div class="jobtitle">职位描述</div>
                                        <ul class="ul">
                                            <li class="li">C++</li>
                                            <li class="li">STM32开发</li>
                                            <li class="li">ARM开发</li>
                                            <li class="li">计算机相关专业</li>
                                            <li class="li">通信相关专业</li>
                                            <li class="li">嵌入式/单片机开发经验</li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="responsibility">
                                    <div class="jobtitle">职位职责</div>
                                    <ul>
                                        <li>1、根据项目需求提出可行性方案；</li>
                                        <li>2、负责单片机嵌入式代码的开发，根据业务流程设计总体软件设计框架，能根据框架应用代码实现；</li>
                                        <li>3、负责产品的元器件选型工作，产品原理图、PCB设计和修改；</li>
                                        <li>4、完成模块代码编写、测试、维护工作，输出相关技术文档。</li>
                                    </ul>
                                    <div class="jobtitle">职位要求</div>
                                    <ul>
                                        <li>1、通讯、电子、无线电、仪器仪表等相关专业，3年以上工作经验；</li>
                                        <li>2、熟悉嵌入式开发流程，精通C语言编程，熟悉常用的嵌入式开发工具和开发环境，例如Keil或IAR，能独立完成代码调测实现产品功能；</li>
                                        <li>3、至少熟悉两种微处理器平台的编码：如STM8，STM32，ATMage8，ATMage32，飞思卡尔，PIC等单片机中的两种，stm32优先；</li>
                                        <li>4、熟悉短距离通讯知识，如zigbee ，蓝牙，wifi等，了解相关通讯协议并实现设计需求；</li>
                                        <li>5、接触过微操作系统，能做常见微操作系统，文件系统，通讯协议的移植和开发：例如FREERTOS，FATFS，modulebus等；</li>
                                        <li>6、有一定英语阅读能力, 能够读懂芯片数据手册；</li>
                                        <li>7、熟悉使用PROTEL/AD等绘图软件，四层及以上电路板设计经验，熟悉基本的PCBA制作及工艺流程，有较强的分析及解决问题的能力</li>
                                    </ul>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item name="2">
                                <template #title>
                                    <h2 class="h2">总经理助理</h2>
                                    <div class="postinfo">
                                        <el-tag class="ml-2" type="info">经验不限</el-tag>
                                        <el-tag class="ml-2" type="info">大专</el-tag>
                                    </div>
                                </template>
                                <div class="requirements">
                                    <div class="jobrs1">
                                        <div class="jobtitle">薪资</div>
                                        <ul class="ul">6-9K·13薪</ul>
                                    </div>
                                    <div class="jobrs2">
                                        <div class="jobtitle">职位描述</div>
                                        <ul class="ul">
                                            <li class="li">C++</li>
                                            <li class="li">STM32开发</li>
                                            <li class="li">ARM开发</li>
                                            <li class="li">计算机相关专业</li>
                                            <li class="li">通信相关专业</li>
                                            <li class="li">嵌入式/单片机开发经验</li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="responsibility">
                                    <div class="jobtitle">职位职责</div>
                                    <ul>
                                        <li>1、根据项目需求提出可行性方案；</li>
                                        <li>2、负责单片机嵌入式代码的开发，根据业务流程设计总体软件设计框架，能根据框架应用代码实现；</li>
                                        <li>3、负责产品的元器件选型工作，产品原理图、PCB设计和修改；</li>
                                        <li>4、完成模块代码编写、测试、维护工作，输出相关技术文档。</li>
                                    </ul>
                                    <div class="jobtitle">职位要求</div>
                                    <ul>
                                        <li>1、通讯、电子、无线电、仪器仪表等相关专业，3年以上工作经验；</li>
                                        <li>2、熟悉嵌入式开发流程，精通C语言编程，熟悉常用的嵌入式开发工具和开发环境，例如Keil或IAR，能独立完成代码调测实现产品功能；</li>
                                        <li>3、至少熟悉两种微处理器平台的编码：如STM8，STM32，ATMage8，ATMage32，飞思卡尔，PIC等单片机中的两种，stm32优先；</li>
                                        <li>4、熟悉短距离通讯知识，如zigbee ，蓝牙，wifi等，了解相关通讯协议并实现设计需求；</li>
                                        <li>5、接触过微操作系统，能做常见微操作系统，文件系统，通讯协议的移植和开发：例如FREERTOS，FATFS，modulebus等；</li>
                                        <li>6、有一定英语阅读能力, 能够读懂芯片数据手册；</li>
                                        <li>7、熟悉使用PROTEL/AD等绘图软件，四层及以上电路板设计经验，熟悉基本的PCBA制作及工艺流程，有较强的分析及解决问题的能力</li>
                                    </ul>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item name="3">
                                <template #title>
                                    <h2 class="h2">测试工程师</h2>
                                    <div class="postinfo">
                                        <el-tag class="ml-2" type="info">一年以内</el-tag>
                                        <el-tag class="ml-2" type="info">本科</el-tag>
                                    </div>
                                </template>
                                <div class="requirements">
                                    <div class="jobrs1">
                                        <div class="jobtitle">薪资</div>
                                        <ul class="ul">6-9K·13薪</ul>
                                    </div>
                                    <div class="jobrs2">
                                        <div class="jobtitle">职位描述</div>
                                        <ul class="ul">
                                            <li class="li">C++</li>
                                            <li class="li">STM32开发</li>
                                            <li class="li">ARM开发</li>
                                            <li class="li">计算机相关专业</li>
                                            <li class="li">通信相关专业</li>
                                            <li class="li">嵌入式/单片机开发经验</li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="responsibility">
                                    <div class="jobtitle">职位职责</div>
                                    <ul>
                                        <li>1、根据项目需求提出可行性方案；</li>
                                        <li>2、负责单片机嵌入式代码的开发，根据业务流程设计总体软件设计框架，能根据框架应用代码实现；</li>
                                        <li>3、负责产品的元器件选型工作，产品原理图、PCB设计和修改；</li>
                                        <li>4、完成模块代码编写、测试、维护工作，输出相关技术文档。</li>
                                    </ul>
                                    <div class="jobtitle">职位要求</div>
                                    <ul>
                                        <li>1、通讯、电子、无线电、仪器仪表等相关专业，3年以上工作经验；</li>
                                        <li>2、熟悉嵌入式开发流程，精通C语言编程，熟悉常用的嵌入式开发工具和开发环境，例如Keil或IAR，能独立完成代码调测实现产品功能；</li>
                                        <li>3、至少熟悉两种微处理器平台的编码：如STM8，STM32，ATMage8，ATMage32，飞思卡尔，PIC等单片机中的两种，stm32优先；</li>
                                        <li>4、熟悉短距离通讯知识，如zigbee ，蓝牙，wifi等，了解相关通讯协议并实现设计需求；</li>
                                        <li>5、接触过微操作系统，能做常见微操作系统，文件系统，通讯协议的移植和开发：例如FREERTOS，FATFS，modulebus等；</li>
                                        <li>6、有一定英语阅读能力, 能够读懂芯片数据手册；</li>
                                        <li>7、熟悉使用PROTEL/AD等绘图软件，四层及以上电路板设计经验，熟悉基本的PCBA制作及工艺流程，有较强的分析及解决问题的能力</li>
                                    </ul>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item name="4">
                                <template #title>
                                    <h2 class="h2">测试工程师</h2>
                                    <div class="postinfo">
                                        <el-tag class="ml-2" type="info">经验不限</el-tag>
                                        <el-tag class="ml-2" type="info">大专</el-tag>
                                    </div>
                                </template>
                                <div class="requirements">
                                    <div class="jobrs1">
                                        <div class="jobtitle">薪资</div>
                                        <ul class="ul">6-9K·13薪</ul>
                                    </div>
                                    <div class="jobrs2">
                                        <div class="jobtitle">职位描述</div>
                                        <ul class="ul">
                                            <li class="li">C++</li>
                                            <li class="li">STM32开发</li>
                                            <li class="li">ARM开发</li>
                                            <li class="li">计算机相关专业</li>
                                            <li class="li">通信相关专业</li>
                                            <li class="li">嵌入式/单片机开发经验</li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="responsibility">
                                    <div class="jobtitle">职位职责</div>
                                    <ul>
                                        <li>1、根据项目需求提出可行性方案；</li>
                                        <li>2、负责单片机嵌入式代码的开发，根据业务流程设计总体软件设计框架，能根据框架应用代码实现；</li>
                                        <li>3、负责产品的元器件选型工作，产品原理图、PCB设计和修改；</li>
                                        <li>4、完成模块代码编写、测试、维护工作，输出相关技术文档。</li>
                                    </ul>
                                    <div class="jobtitle">职位要求</div>
                                    <ul>
                                        <li>1、通讯、电子、无线电、仪器仪表等相关专业，3年以上工作经验；</li>
                                        <li>2、熟悉嵌入式开发流程，精通C语言编程，熟悉常用的嵌入式开发工具和开发环境，例如Keil或IAR，能独立完成代码调测实现产品功能；</li>
                                        <li>3、至少熟悉两种微处理器平台的编码：如STM8，STM32，ATMage8，ATMage32，飞思卡尔，PIC等单片机中的两种，stm32优先；</li>
                                        <li>4、熟悉短距离通讯知识，如zigbee ，蓝牙，wifi等，了解相关通讯协议并实现设计需求；</li>
                                        <li>5、接触过微操作系统，能做常见微操作系统，文件系统，通讯协议的移植和开发：例如FREERTOS，FATFS，modulebus等；</li>
                                        <li>6、有一定英语阅读能力, 能够读懂芯片数据手册；</li>
                                        <li>7、熟悉使用PROTEL/AD等绘图软件，四层及以上电路板设计经验，熟悉基本的PCBA制作及工艺流程，有较强的分析及解决问题的能力</li>
                                    </ul>
                                </div>
                            </el-collapse-item>

                        </el-collapse>
                    </div>
                </div>
            </div>

        </div>
        <footerin />
    </div>
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

    .title {
        font-size: 80px;

        font-family: PMZDBTT;
        margin-top: 140px;
    }
}

.info {
    text-align: center;
    /* width: 80%; */
    display: flex;
    justify-content: center;
    /* 在主轴上居中对齐 */
    align-items: center;
    /* background-color: aqua; */
    margin: 20px;

    .card-header {
        height: 10px;
        margin-top: -30px;
    }

    /* .h4 {
        padding: 10px;
    } */

    .gzsj {
        /* border: 2px solid black; */
        margin: 20px;
        height: 150px;
    }

    .treatment {
        width: 600px;
        margin: 20px;
        height: 150px;

        .tag-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
    }

    .img {
        height: 150px;

        .image {
            height: 120px;
        }
    }
}

/* tag的动画 */
.el-tag {
    transition: transform 0.3s;
}

.el-tag:hover {
    transform: scale(0.3);
    animation: shake 0.8s infinite;
}

@keyframes shake {
    0% {
        transform: translateX(-3px);
    }

    50% {
        transform: translateX(3px);
    }

    100% {
        transform: translateX(-3px);
    }
}

.post {
    /* height: 500px; */
    margin: 50px;

    .el-collapse {
        --el-collapse-header-height: 72px;
    }

    .h2 {
        font-size: 30px;
        margin: 20px;
    }

    .postinfo {
        margin: 0 80px;

        .el-tag {
            margin: 0 10px;
        }
    }

    .jobtitle {
        font-weight: bold;
        font-size: 20px;
    }

    .requirements {
        margin: 20px;
        display: flex;
        align-items: center;
        gap: 10px;



        .jobrs1 {
            font-size: 15px;
            flex: 0.5;
            width: 30%;
        }

        .jobrs2 {
            flex: 2;

        }

        .ul {
            display: flex;
            padding: 10px;

            .li {
                margin-right: 10px;
                background-color: rgba(105, 104, 104, 0.531);
                border-radius: 5px;
                padding: 0 8px;
            }
        }
    }
}

.guanfengqin {
    width: 70%;
    transform: translate(20%, 0%);
    margin: 20px 0 0 0;

}

li,
ol,
ul {
    list-style: none;
}
</style>
<script setup>
import '../assets/font/font.css'
import footerin from './footer.vue';
</script>