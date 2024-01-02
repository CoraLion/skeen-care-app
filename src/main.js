import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reusedCode from "@/mixins/reusedCode";

createApp(App).use(store).use(router).mixin(reusedCode).mount('#app')
