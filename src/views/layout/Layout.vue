<template>
  <el-container class="app-wrapper">
    <layout-left :themePageInfo="themePageInfo" v-if="asyncFlag" :diyInfo="diyInfo"></layout-left>
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
                <el-menu-item index="10-2">web安全色</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="8">
            <div class="top-button">
              <el-button-group>
                <el-button> 预览
                  <i class="el-icon-view el-icon--right"></i>
                </el-button>
                <el-button style='' type="success" :loading="isSave" @click="save"> 保存
                  <i class="el-icon-check el-icon--right" v-if="!isSave"></i>
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
          <div class="content-left" :style="'width:'+(screenWidth-273-55)+'px; padding-left:'+((screenWidth-273-55-427)/2)+'px'">
            <div class="content-phone">
              <div class="innerbox-phone">
                <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="themePageInfo.diyHost+'/'+themePageInfo.pageUrl" class=" show-iframe"></iframe>
                <!-- <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto src="/webs" class=" show-iframe"></iframe> -->
              </div>
            </div>
          </div>
          <div class="content-right" style="width:273px">
            <layout-right class="right-box" :themePageInfo="themePageInfo" v-if="asyncFlag" :diyInfo="diyInfo"></layout-right>
          </div>
        </div>
      </el-main>
      <layout-footer></layout-footer>
    </el-container>

  </el-container>
</template>
<script>
  import { THEMEPAGE_SAVE_POST } from '@/service/api/apiUrl'
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
        screenWidth: '1100', // 屏幕宽度,
        themePageInfo: '', // 站点信息
        diyInfo: '', // diy信息,用户编辑时候，随时记录diy信息
        asyncFlag: false,
        isSave: false // 保存状态
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async init () {
        this.themePageInfo = {
          siteId: '5b4029cd3cb0ee4fdc47cfa5',
          themeId: '5b4167bfef73100fdc36cf68',
          themePageId: '5b421fd69015771b50cbf88d',
          clientType: '2',
          diyHost: 'http://www.yiqipingou.com', // http://localhost:2000/pages/index
          pageUrl: 'index',
          user: {
            id: 1,
            userName: 'admin',
            name: '管理员',
            mobile: '13597894545',
            email: 'admin@5ug.com'
          }
        }
        this.getSaveInfo()
        this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        this.asyncFlag = true
      },
      // 保存Diy设置
      async save () {
        this.isSave = true

        await this.$api.post(THEMEPAGE_SAVE_POST, this.diyInfo, 'Diy保存')
        this.isSave = false
      },
      async getSaveInfo () {
        this.diyInfo = {
          siteId: this.themePageInfo.siteId,
          themeId: this.themePageInfo.themeId,
          diyHost: this.themePageInfo.diyHost,
          pageUrl: this.themePageInfo.pageUrl,
          themePageId: this.themePageInfo.themePageId,
          clientType: this.themePageInfo.clientType,
          User: this.themePageInfo.user,
          Layouts: [
            {
              layoutId: '5b404486e638563c3c3732f7',
              path: '/h5/layout-col',
              name: '列布局',
              sortOrder: 1,
              widgets: [
                {
                  widgetId: '5b4034415fe6615188fe17f8',
                  name: '图片',
                  componentPath: '/common/zk-image',
                  sortOrder: 1
                },
                {
                  widgetId: '5b4034415fe6615188fe17f8',
                  name: '图片',
                  componentPath: '/common/zk-image',
                  sortOrder: 2
                },
                {
                  widgetId: '5b4034415fe6615188fe17f9',
                  componentPath: '/core/zk-swiper',
                  name: '轮播',
                  sortOrder: 3
                }
              ]
            },
            {
              LayoutId: '5b404486e638563c3c3732f8',
              path: '/h5/layout-default',
              name: '默认',
              sortOrder: 2,
              Widgets: [
                {
                  widgetId: '5b4034415fe6615188fe17f8',
                  name: '图片',
                  componentPath: '/common/zk-image',
                  sortOrder: 1
                },
                {
                  widgetId: '5b4034415fe6615188fe17f9',
                  componentPath: '/core/zk-swiper',
                  name: '轮播',
                  sortOrder: 2
                },
                {
                  widgetId: '5b4034415fe6615188fe17f8',
                  name: '图片',
                  componentPath: '/common/zk-image',
                  sortOrder: 3
                },
                {
                  widgetId: '5b4034415fe6615188fe17fb',
                  name: 'cell导航',
                  componentPath: '/core/zk-cell',
                  sortOrder: 3
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './Layout.scss'; // 便于调试，css写到layout.css中
</style>
