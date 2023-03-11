import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import '@arco-design/web-vue/es/message/style/css.js'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
