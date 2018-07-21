<template>
  <zk-dialog ref="ref_zk_dialog" title="文件管理">
    <span slot="body">内容</span>
    <el-button type="primary" slot="footer" @click="click">保存</el-button>
  </zk-dialog>
</template>

<script>
  // import { THEME_GETVALUE_GET } from '@/service/api/apiUrl'
  export default {
    name: 'zk-test',
    props: {
      dialogModel: {}
    },
    data () {
      return {
      }
    },
    mounted () {
      this.init()
      this.$nextTick(function () {
        this.$on('child', function (dialogCloseVisible) {
          // console.info('zk-test父组件点击')
          this.$refs.ref_zk_dialog.$emit('child', this.dialogCloseVisible)
        })
      })
    },
    methods: {
      async  init () {
      },
      click () {
        console.info('点击事件')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>

