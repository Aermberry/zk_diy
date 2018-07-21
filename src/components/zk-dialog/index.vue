<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" :width="width" v-el-drag-dialog @dragDialog="handleDrag" :before-close="handleClose" class="zk-dialog">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import elDragDialog from '@/directive/el-dragDialog'
  export default {
    directives: { elDragDialog },
    name: 'zk-dialog',
    props: {
      dialogModel: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '60%'
      }
    },
    data () {
      return {
        viewModel: '',
        dialogVisible: false
      }
    },
    mounted () {
      this.init()
      this.$nextTick(function () {
        this.$on('child', function (dialogCloseVisible) {
          console.info('父组件点击')
          this.dialogVisible = true
        })
      })
    },
    methods: {
      async  init () {
        this.dialogVisible = this.dialogModel
      },
      handleDrag () {
        this.$refs.select.blur()
      },
      handleClose () {
        this.dialogVisible = false
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>

