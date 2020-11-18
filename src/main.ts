import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installAntdUi from './plugins/antd-vue'
import './assets/css/normalize.css'
import './assets/css/antd-vue.css'

const app = createApp(App)
// 注册antd-vue组件
installAntdUi(app)
app.use(store).use(router).mount('#app')

export default app
