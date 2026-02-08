import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import BackHeader from './components/Header.vue'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App) // สร้าง App
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router) // ใช้งาน Router

app.component('back-header', BackHeader) // ลงทะเบียนคอมโพเนนต์แบบทั่วแอป
app.mount('#app') // แปะลงไปที่ id="app" ใน index.html