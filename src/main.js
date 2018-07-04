import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import {
  api
} from '@/service/api'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import XIcon from '@/elements/x-icon'
import XScreenfull from '@/elements/x-screenfull'

import '@/permission' // permission control

Vue.prototype.$api = api
Vue.use(ElementUI, {
  locale
})
Vue.use('x-icon', XIcon)
Vue.use('x-screenfull', XScreenfull)
Vue.config.productionTip = false
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
