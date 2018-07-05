import {
  api
} from '@/service/api'

export default function (Vue, options) {
  Vue.prototype.$api = api
}
