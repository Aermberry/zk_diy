import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/assets/styles/index.scss' // global css

import global from '@/service/core/global' // 公共函数,全局函数
import App from './App'
import router from './router'
import XIcon from '@/elements/x-icon'
import XScreenfull from '@/elements/x-screenfull'

Vue.use(global)

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
  render: h => h(App)
})

// new Vue({
//   router,
//   components: {
//     App
//   },
//   template: '<App/>'
// }).$mount('#zkcloud')
