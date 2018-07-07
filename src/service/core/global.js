import {
  api
} from '@/service/api'
import local from './local'

export default function (Vue, options) {
  Vue.prototype.$api = api
  Vue.prototype.$local = local
}
