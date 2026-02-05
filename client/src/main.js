import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App) // สร้าง App
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate) // เรียกใช้ plugin เก็บ state ลง local storage

app.use(pinia)
app.use(router) // ใช้งาน Router
app.mount('#app') // แปะลงไปที่ id="app" ใน index.html
