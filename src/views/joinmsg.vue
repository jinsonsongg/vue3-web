<template>
    <div>
        <div class="nav2" style="height: 80px;" />
        <div class="a">
            <img src="../img/problem.png" alt="" class="img">
            <div class="title">招聘信息</div>
        </div>
        <div class="b">
            <div>
                <div class="guanfengqin">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="测试工程师" name="1">
                            <div>
                                根据软件设计需求制定测试计划，设计测试数据和测试用例
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="嵌入式开发工程师" name="2">
                            <div>
                                职位职责：
1、根据项目需求提出可行性方案；
3、负责产品的元器件选型工作，产品原理图、PCB设计和修改；
2、负责单片机嵌入式代码的开发，根据业务流程设计总体软件设计框架，能根据框架应用代码实现；
4、完成模块代码编写、测试、维护工作，输出相关技术文档。
职位要求：
1、通讯、电子、无线电、仪器仪表等相关专业，3年以上工作经验；
2、熟悉嵌入式开发流程，精通C语言编程，熟悉常用的嵌入式开发工具和开发环境，例如Keil或IAR，能独立完成代码调测实现产品功能；
3、至少熟悉两种微处理器平台的编码：如STM8，STM32，ATMage8，ATMage32，飞思卡尔，PIC等单片机中的两种，stm32优先；
4、熟悉短距离通讯知识，如zigbee ，蓝牙，wifi等，了解相关通讯协议并实现设计需求；
5、接触过微操作系统，能做常见微操作系统，文件系统，通讯协议的移植和开发：例如FREERTOS，FATFS，modulebus等；
6、有一定英语阅读能力, 能够读懂芯片数据手册；
7、熟悉使用PROTEL/AD等绘图软件，四层及以上电路板设计经验，熟悉基本的PCBA制作及工艺流程，有较强的分析及解决问题的能力

                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Efficiency" name="3">
                            <div>
                                岗位职责
1、根据业务需求，完成多平台（微信小程序、android、iOS、桌面浏览器）的前端产品设计并实施落地。 
2、全程参与公司核心互联网产品的需求讨论、分析、评估与开发工作。

任职要求
1、计算机相关专业，本科以上学历（学信网可查），5年以上Java 开发经验。
2、java基础知识扎实，熟悉集合、I/O、多线程、了解JVM工作原理，熟悉java领域常用框架的使用和原理；
3、熟练使用Mybatis、Spring、SpringMvc、SpringBoot、dubbo等开源框架；有分布式项目经验，了解SpringsCloud者优先；
4、熟练MySQL，对数据库有较强的设计能力，同时熟悉SQL优化。对分布式数据库、分布式事务有较深研究者优先；
5、熟悉Maven，GIT，熟悉Tomcat等应用服务器，熟悉高并发处下的性能优化；
6、熟悉网络编程，具有设计和开发对外API接口经验和能力；
7、具有良好的逻辑分析能力和业务分析能力.
8、具有较强的团队合作能力和责任心，能够主动高效的完成任务，能够承担压力，团队意识强，善于思考，能独立分析和解决问题。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Controllability" name="4">
                            <div>
                                4
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

        </div>
        <footerin/>
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
.guanfengqin{
    width: 70%;
    transform: translate(20%,0%);
    margin: 20px 0 0 0;
    
}
</style>
<script setup>
import '../assets/font/font.css'
import footerin from './footer.vue';
</script>