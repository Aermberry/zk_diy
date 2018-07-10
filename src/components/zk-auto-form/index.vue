<template>
  <div class="zk-auto-form">
  </div>
</template>

<script>
  import { DIY_GETLINK_GET } from '@/service/api/apiUrl' // 引入Api接口常量
  export default {
    name: 'zk-auto-form',
    data () {
      return {
        viewModel: '', // 数据模型
        styles: {} // 可视化编辑样式
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async  init () {
        const para = {
          diyKey: 'grid_index'
        }
        this.viewModel = await this.$api.get(DIY_GETLINK_GET, para)
      }
    }
  }
</script>

<style scoped >
</style>

