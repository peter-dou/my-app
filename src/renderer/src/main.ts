import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import axios from './core/axios';
import router from './router';
const app = createApp(App)
//全局引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
app.mount('#app')
app.config.globalProperties.$axios = axios;
