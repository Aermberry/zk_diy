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
import ZkDialog from '@/components/zk-dialog'
import ZkFile from '@/components/zk-file'
import ZkFileAudio from '@/components/zk-file-audio'
import ZkFileCloud from '@/components/zk-file-cloud'
import ZkFileIcon from '@/components/zk-file-icon'
import ZkFileImage from '@/components/zk-file-image'
import ZkFileVideo from '@/components/zk-file-video'
import ZkFooter from '@/components/zk-footer'
import ZkGlobalSetting from '@/components/zk-global-setting'
import ZkLeft from '@/components/zk-left'
import ZkPage from '@/components/zk-page'
import ZkPageSetting from '@/components/zk-page-setting'
import ZkPopupLayout from '@/components/zk-popup-layout'
import ZkRight from '@/components/zk-right'
import ZkRightProperty from '@/components/zk-right-property'
import ZkSafeColor from '@/components/zk-safe-color'
import ZkTable from '@/components/zk-table'
import ZkTest from '@/components/zk-test'
import ZkWidgetData from '@/components/zk-widget-data'

import XIcon from '@/elements/x-icon'
import XScreenfull from '@/elements/x-screenfull'

Vue.component('zk-auto-form', ZkAutoForm)
Vue.component('zk-dialog', ZkDialog)
Vue.component('zk-file', ZkFile)
Vue.component('zk-file-audio', ZkFileAudio)
Vue.component('zk-file-cloud', ZkFileCloud)
Vue.component('zk-file-icon', ZkFileIcon)
Vue.component('zk-file-image', ZkFileImage)
Vue.component('zk-file-video', ZkFileVideo)
Vue.component('zk-footer', ZkFooter)
Vue.component('zk-global-setting', ZkGlobalSetting)
Vue.component('zk-left', ZkLeft)
Vue.component('zk-page', ZkPage)
Vue.component('zk-page-setting', ZkPageSetting)
Vue.component('zk-popup-layout', ZkPopupLayout)
Vue.component('zk-right', ZkRight)
Vue.component('zk-right-property', ZkRightProperty)
Vue.component('zk-safe-color', ZkSafeColor)
Vue.component('zk-table', ZkTable)
Vue.component('zk-test', ZkTest)
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
Vue.prototype.$loading = true
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

