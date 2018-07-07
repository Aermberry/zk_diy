import request from './request'
import local from '../core/local.js'
export default {

  //  Get方法：查
  // islocal==true时，先请求本地sqlite数据，如果内容存在，延时30s(页面完全打开后)，请求远程数据，同时把最新的数据保存到sqlite中
  async get (apiUrl, data, cacheKey) {
    // 从缓存中读取
    if (cacheKey !== undefined) {
      var cataValue = window.localStorage.getItem(cacheKey)
      if (cataValue) {
        var cacheData = JSON.parse(cataValue)
        var reSet = ((new Date().getTime() - cacheData.time) / 1000) > 3600 // 一个小时重新请求一次
        if (reSet) {
          // 数据超过1小时,重新读取
          return this.requestGetAndSet(apiUrl, data, cacheKey)
        } else {
          return cacheData.data
        }
      } else {
        return this.requestGetAndSet(apiUrl, data, cacheKey)
      }
    } else {
      // 没有cacheKey时，直接请求
      return this.requestGet(apiUrl, data)
    }
  },

  // 请求get数据
  async requestGet (apiUrl, data) {
    var response = await request.get(apiUrl, data)
    // console.info('数据来源', response)
    if (response.status === 1) {
      return response.result
    } else {
      this.toast(response.result.message)
    }
  },

  // 设置缓存数据
  async requestGetAndSet (apiUrl, data, cacheKey) {
    var serviceData = await this.requestGet(apiUrl, data)
    local.setStoreByTime(cacheKey, serviceData)
    return serviceData
  },
  //  Post方法 :增
  async post (apiUrl, data) {
    var response = await request.post(apiUrl, data)
    if (response.data.status === 1) {
      return response
    } else {
      this.toast(response.data.message)
    }
  },
  //  Put方法：改
  async put (apiUrl, data) {
    var response = await request.put(apiUrl, data)
    if (response.data.status === 1) {
      return response
    } else {
      this.toast(response.data.message)
    }
  },
  //  delete方法：删
  async delete (data) {
    var response = await request.put('pay/pay', data)
    if (response.data.status === 1) {
      return response
    } else {
      this.toast(response.data.message)
    }
  }
}
