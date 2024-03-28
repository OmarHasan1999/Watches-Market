import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/Home.css'
import './css/Header.css'
import './css/About.css'
import './css/Contact.css'
import './css/Details.css'
import './css/subscribe.css'
import './css/Services.css'








const app = createApp(App)

app.use(router)

app.mount('#app')
