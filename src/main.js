import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import vuetify from '@/plugins/vuetify' 
import App from './App.vue'
import store from "@/store/index"

Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
