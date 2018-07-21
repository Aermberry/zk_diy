import Vue from 'vue'
import App from './App'
import router from './router'
import local from '@/service/core/local'
import global from '@/service/core/global'
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui'
import '@/assets/styles/theme-src/index.scss'
import '@/assets/styles/index.scss'
import {
  api
} from '@/service/api'

import ZkAutoForm from '@/components/zk-auto-form'
import ZkFile from '@/components/zk-file'
import ZkFooter from '@/components/zk-footer'
import ZkGlobalSetting from '@/components/zk-global-setting'
import ZkSafeColor from '@/components/zk-safe-color'
import ZkTable from '@/components/zk-table'
import ZkWidgetData from '@/components/zk-widget-data'

import XIcon from '@/elements/x-icon'
import XScreenfull from '@/elements/x-screenfull'

Vue.component('zk-auto-form', ZkAutoForm)
Vue.component('zk-file', ZkFile)
Vue.component('zk-footer', ZkFooter)
Vue.component('zk-global-setting', ZkGlobalSetting)
Vue.component('zk-safe-color', ZkSafeColor)
Vue.component('zk-table', ZkTable)
Vue.component('zk-widget-data', ZkWidgetData)

Vue.component('x-icon', XIcon)
Vue.component('x-screenfull', XScreenfull)

Vue.use(global)
Vue.use(ElementUI, {
  locale
})

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$local = local
Vue.prototype.$toast = local
Vue.prototype.$message = local
Vue.prototype.$loading = true
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

