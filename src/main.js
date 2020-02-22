import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import vue-bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import font-awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

// save font-awesome components
Vue.component('font-awesome-icon', FontAwesomeIcon)

console.log(`posts`);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
