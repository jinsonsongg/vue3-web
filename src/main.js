import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import animated from "animate.css"
import 'wow.js/css/libs/animate.css'


const app = createApp(App)

// app.use(animated)  //有组件重复，不知道为什么
app.use(router)
app.use(ElementPlus)
app.mount('#app')