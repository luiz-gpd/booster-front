import { createApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import AxiosPlugin from '../src/plugins/axios.plugin';
import variables from '@/variables';

const routes = [
    { path: "/", component: LoginPage },
    { path: "/home", component: HomePage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes,
})

createApp(App)
.use(AxiosPlugin, variables)
.use(router)
.use(BootstrapVue3)
.mount('#app')