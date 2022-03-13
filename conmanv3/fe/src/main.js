import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import Axios from 'axios'
import 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import axios from 'axios'



// Create root app
const app = createApp(App)
app.use(Router)
//app.prototype.$http = axios
//app.use(require('./dist/vue-resource.min.js'));
// Make BootstrapVue available throughout your project

//app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//app.use(IconsPlugin)

app.mount('#app')