<template>

  <el-container class="app-wrapper">
    <el-aside width="60px" class="app-left m-aside-menu">
      <div class="nav-logo">
        <img src="../../assets/img/logo.png" alt="匠芯云DIY平台" class="logo-icon">
        <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
          <li class="m-menu__item  m-menu__item--active">
            <a href="/" class="m-menu__link ">
              <i class="m-menu__link-icon flaticon-line-graph"></i>
              <span class="m-menu__link-text">
                页面
              </span>
            </a>
          </li>
          <li class="m-menu__item">
            <a href="/" class="m-menu__link " title="添加模块">
              <i class="m-menu__link-icon flaticon-app "></i>
              <span class="m-menu__link-title">
                <span class="m-menu__link-wrap">
                  <span class="m-menu__link-text" title="添加模块">
                    添加
                  </span>
                </span>
              </span>
            </a>
          </li>
          <li class="m-menu__item">
            <a href="/" class="m-menu__link " title="Api接口">
              <i class="m-menu__link-icon flaticon-more-v2  "></i>
              <span class="m-menu__link-title">
                <span class="m-menu__link-wrap">
                  <span class="m-menu__link-text" title="添加模块">
                    Api
                  </span>
                </span>
              </span>
            </a>
          </li>
          <li class="m-menu__item">
            <a href="/" class="m-menu__link " title="添加模块">
              <i class="m-menu__link-icon flaticon-file-1  "></i>
              <span class="m-menu__link-title">
                <span class="m-menu__link-wrap">
                  <span class="m-menu__link-text" title="添加模块">
                    文件
                  </span>
                </span>
              </span>
            </a>
          </li>
          <li class="m-menu__item">
            <a href="/" class="m-menu__link " title="添加模块">
              <i class="m-menu__link-icon flaticon-info "></i>
              <span class="m-menu__link-title">
                <span class="m-menu__link-wrap">
                  <span class="m-menu__link-text" title="添加模块">
                    帮助
                  </span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </el-aside>
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
      <el-footer>Pie de página</el-footer>
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
