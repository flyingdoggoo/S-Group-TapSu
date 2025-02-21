import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { ref } from 'vue'
createApp(App).mount('#app')

const count = ref(0)
function inc()
{
    count.value++
}