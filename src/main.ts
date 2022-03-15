import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import { createPinia } from 'pinia'
import { registerStore } from './store'

const app = createApp(App)
// debugger
app.use(createPinia())
registerStore()

app.use(router).mount('#app')
