import Vue from 'vue'

import ElementUI from 'element-ui'
import '@/assets/styles/theme-src/index.scss' // 引入element-ui，尽可能不去修改
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/assets/styles/index.scss' // global css

import global from '@/service/core/global' // 公共函数,全局函数
import App from './App'
import router from './router'
import XIcon from '@/elements/x-icon'
import XScreenfull from '@/elements/x-screenfull'
import ZkFile from '@/components/zk-file'
import ZkTable from '@/components/zk-table'
import ZkWidgetData from '@/components/zk-widget-data'

Vue.use(global)

Vue.use(ElementUI, {
  locale
})
Vue.component('x-icon', XIcon)
Vue.component('x-screenfull', XScreenfull)
Vue.component('zk-table', ZkTable)
Vue.component('zk-file', ZkFile)
Vue.component('zk-widget-data', ZkWidgetData)
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
