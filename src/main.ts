import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// // ui组件处理
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/index.css'
// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
createApp(App).use(router).use(store).mount('#app')
