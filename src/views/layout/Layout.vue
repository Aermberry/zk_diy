<template>
  <el-container class="app-wrapper">
    <layout-left></layout-left>
    <el-container>
      <el-header class="app-header" height="55">
        <el-row class="app-nav">
          <el-col :span="16">
            <el-menu class="el-menu-demo" mode="horizontal">
              <el-menu-item index="1">
                <a href="/">
                  <i class="flaticon-open-box "></i>模板中心</a>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <a href="/">
                    <i class="flaticon-line-graph"></i>终端</a>
                </template>
                <el-menu-item index="2-1">
                  <i class="flaticon-line-graph"></i>PC</el-menu-item>
                <el-menu-item index="2-2">手机(H5)</el-menu-item>
                <el-menu-item index="2-3">小程序</el-menu-item>
                <el-menu-item index="2-3">苹果、安卓App</el-menu-item>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <a href="/">
                    <i class="flaticon-cogwheel"></i>工具</a>
                </template>
                <el-menu-item index="10-1">
                  <x-screenfull></x-screenfull>
                </el-menu-item>
              </el-submenu>

            </el-menu>
          </el-col>
          <el-col :span="8">
            <div class="top-button">
              <el-button-group>
                <el-button> 预览
                  <i class="el-icon-view el-icon--right"></i>
                </el-button>
                <el-button style='' type="success"> 保存
                  <i class="el-icon-check el-icon--right"></i>
                </el-button>
                <el-button type="primary">发布
                  <i class="el-icon-upload el-icon--right"></i>
                </el-button>
              </el-button-group>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="zk-main">
        <div class="main-content">
          <div class="content-left">
            <div class="content-phone">
              <div class="innerbox-phone">
                <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=no :src="diyUrl" class=" show-iframe"></iframe>
              </div>
            </div>
          </div>
          <div class="content-right">
            <layout-right  class="right-box"></layout-right>
          </div>
        </div>
      </el-main>
      <layout-footer></layout-footer>
    </el-container>
  </el-container>
</template>
<script>
  import { AppMain } from './widgets'
  import Footer from './widgets/Footer'
  import Left from './widgets/Left'
  import Right from './widgets/Right'
  export default {
    name: 'layout',
    components: {
      'layout-footer': Footer,
      'layout-left': Left,
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
