import globals from './globals'
import Vue from 'vue';
import App from './App.vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import VModal from 'vue-js-modal'
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Vuex from 'vuex'
import * as bulmaToast from 'bulma-toast'
import VueLoading from 'vuejs-loading-plugin'
import bFormSlider from 'vue-bootstrap-slider';
import Vue2Filters from 'vue2-filters'


Vue.config.productionTip = false

bulmaToast.setDefaults({
  duration: 100,
  position: 'bottom-right',
  closeOnClick: false,
})

// Global RTL flag
Vue.mixin({
  data: globals
})

// router setup
import router from './router';
// plugin setup

axios.defaults.baseURL = 'http://172.93.231.240/api/v1/'




Vue.use(BootstrapVue)
Vue.use(Vue2Filters)
Vue.use(Vuex)

Vue.use(bFormSlider)
Vue.use(DashboardPlugin);

const store = new Vuex.Store({
  state: {
    brands: [''],
    amount: [0],
    dark: false
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
      if (localStorage.getItem('admin')) {
        state.Admin = localStorage.getItem('admin')
        state.isAdmin = true
      } else {
        state.Admin = ''
        state.isAdmin = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    clearbrands(state) {
      state.brands = []
      state.amount = []
    },
    appendbrands(state, brand) {
      state.brands.push(brand)
    },
    appendamount(state, amount) {
      state.amount.push(amount)
    },
    setAdmin(state, admin) {
      state.Admin = admin
      state.isAdmin = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    removeAdmin(state) {
      state.Admin = ''
      state.isAdmin = false
    }
  },
})
new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
});
Vue.use(store)
Vue.use(VueSweetalert2);
Vue.use(VModal)
Vue.use(VueLoading, {
  text: 'لطفا کمی صبر کنید',
  background: 'rgba(0,0,0,0.5)',
})