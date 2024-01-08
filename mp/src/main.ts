import { createApp } from 'vue'
import '@/style/reset.scss'
import App from './App.vue'
// 引入全局组件 -- 顶部、底部都是全局组件
import HospitalTop from '@/components/hospital_top/index.vue'

// 创建应用实例
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.mount('#app')