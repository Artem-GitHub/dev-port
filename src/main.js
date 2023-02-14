import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import validationRules from './plugins/validationRules'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const createdApp = createApp(App)

createdApp.use(VueAxios, axios)
createdApp.use(store)
createdApp.use(router)
createdApp.use(validationRules)
createdApp.mount('#app')
