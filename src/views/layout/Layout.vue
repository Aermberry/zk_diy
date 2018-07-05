<template>

  <el-container class="app-wrapper">
    <layout-left></layout-left>
    <el-container>
      <el-header class="app-header">
        <el-row>
          <el-col :span="20"></el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="diyUrl" class="iphone-x show-iframe"></iframe>
      </el-main>
      <layout-footer></layout-footer>
    </el-container>
  </el-container>
  <!-- <el-container style="height: 500px; border: 1px solid #eee">
    <header class="el-header" style="height: 60px;">Header</header>
    <div class="app-wrapper">
      <layout-right></layout-right>
      <layout-footer></layout-footer>
    </div>
  </el-container> -->

</template>
<script>
  import { AppMain } from './widgets'
  import Footer from './widgets/Footer'
  import Left from './widgets/Left'
  import Right from './widgets/Right'
  import Top from './widgets/Top'
  export default {
    name: 'layout',
    components: {
      'layout-footer': Footer,
      'layout-left': Left,
      'layout-top': Top,
      'layout-right': Right,
      AppMain
    },
    data () {
      return {
        diyUrl: ''
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async init () {
        this.diyUrl = 'http://www.yiqipingou.com/'
        // this.diyUrl = 'http://localhost:2000/pages/index'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './Layout.scss'; // 便于调试，css写到layout.css中
</style>
