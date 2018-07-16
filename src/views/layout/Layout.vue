<template>
  <el-container class="app-wrapper">
    <layout-left :themePageInfo="themePageInfo" v-if="asyncFlag" :diyInfo="diyInfo"></layout-left>
    <el-container>
      <el-header class="app-header" height="55">
        <el-row class="app-nav">
          <el-col :span="16">
            <el-menu class="el-menu-demo" mode="horizontal">
              <el-menu-item index="1">
                <a href="javascript:">
                  <i class="flaticon-open-box "></i>全局设置
                </a>
              </el-menu-item>
              <el-menu-item index="3">
                <a href="javascript:">
                  <i class="flaticon-open-box "></i>模板中心</a>
              </el-menu-item>
              <el-submenu index="6">
                <template slot="title">
                  <a href="javascript:">
                    <i class="flaticon-line-graph"></i>终端</a>
                </template>
                <el-menu-item index="6-1">
                  <i class="flaticon-line-graph"></i>PC</el-menu-item>
                <el-menu-item index="6-2">手机(H5)</el-menu-item>
                <el-menu-item index="6-3">小程序</el-menu-item>
                <el-menu-item index="6-3">苹果、安卓App</el-menu-item>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <a href="javascript:">
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

            <div class="top-right">
              <el-button-group>
                <el-button @click="previewClick" v-html="previewText">
                </el-button>
                <el-button style='' type="success" :loading="isSave" @click="save"> 保存
                  <i class="el-icon-check el-icon--right" v-if="!isSave"></i>
                </el-button>
                <el-button type="primary">发布
                  <i class="el-icon-upload el-icon--right"></i>
                </el-button>
              </el-button-group>
            </div>
            <div class="top-button">
              <el-button style='' @click="showEntireSet=!showEntireSet">
                <i class="flaticon-open-box "></i>
                全局设置
              </el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="zk-main">
        <div class="main-content">
          <div class="content-left">
            <div class="content-phone">
              <div class="innerbox-phone">
                <!--<iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="themePageInfo.diyHost+'/'+themePageInfo.pageUrl" class=" show-iframe"></iframe>-->
                <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto src="/pages/index" class=" show-iframe"></iframe>
              </div>
            </div>
          </div>
          <div class="content-right" style="width:272px">
            <layout-right class="right-box" :themePageInfo="themePageInfo" v-if="asyncFlag" :diyInfo="diyInfo" :style="{showed:isshow}"></layout-right>
          </div>
        </div>
      </el-main>
      <layout-footer></layout-footer>
    </el-container>
    <!-- <zk-widget-data :dialogVisible="dialogWidgetDataVisible" :themePageInfo="themePageInfo" v-if="asyncFlag" :widgetId="widgetId"></zk-widget-data> -->
    <zk-widget-data :dialogVisible="dialogWidgetDataVisible" :themePageInfo="themePageInfo" v-if="false" :widgetId="widgetId"></zk-widget-data>
    <global-setting></global-setting>
    <div class="entire-set" v-if="showEntireSet">
      <div class="page_setting">
        <div class="entire-set-box">
          <div class="main-item">
            <div class="main-item_title">
              主色
            </div>
            <div class="main-item_content">
              <el-color-picker v-model="color.main"></el-color-picker>
            </div>
          </div>
          <div class="minor-item">
            <div class="minor-item_title">
              辅助色
            </div>
            <div class="minor-item_content-box">
              <ul>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    brand
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.brand"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    metal
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.metal"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    light
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.light"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    accent
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.accent"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    focus
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.focus"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    primary
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.primary"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    success
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.success"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    info
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.info"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    warning
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.warning"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    danger
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.danger"></el-color-picker>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="minor-item">
            <div class="minor-item_title">
              中性色
            </div>
            <div class="minor-item_content-box">
              <ul>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    主要文字
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.main"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    常规文字
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.common"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    次要文字
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.minor"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    占位字体
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.placeholder"></el-color-picker>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="minor-item">
            <div class="minor-item_title">
              边框颜色
            </div>
            <div class="minor-item_content-box">
              <ul>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    一级边框
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="borderColor.one"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    二级边框
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="borderColor.two"></el-color-picker>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="minor-btn">
            <el-button style='' type="primary">
              <i class="flaticon-open-box "></i>
              保存
            </el-button>
          </div>
        </div>
        <div class="past-records">
          <div class="past-records_title">
            历史记录
          </div>
          <div class="past-records_content">
            <ul>
              <li class="content-item">
                历史纪录1
              </li>
              <li class="content-item">
                历史记录2
                <x-icon src="src/assets/svg/eye.svg"></x-icon>
                <x-icon src="eye"></x-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
  import { THEMEPAGE_SAVE_POST } from '@/service/api/apiUrl'
  import { AppMain } from './widgets'
  import Footer from './widgets/Footer'
  import Left from './widgets/Left'
  import globalsetting from './widgets/top/global-setting'
  import websafecolor from './widgets/top/Web-safe-colors'
  import Right from './widgets/Right'
  export default {
    name: 'layout',
    components: {
      'layout-footer': Footer,
      'layout-left': Left,
      'layout-right': Right,
      'global-setting': globalsetting,
      'web-safe-colors': websafecolor,
      AppMain
    },
    data () {
      return {
        screenWidth: '1100', // 屏幕宽度,
        dialogWidgetDataVisible: true, // 首次添加模块、双击模块、编辑模块时弹出的窗口
        themePageInfo: '', // 站点信息
        widgetId: '5b4c9e0c9f7de61d7c4a4ea6',
        diyInfo: '', // diy信息,用户编辑时候，随时记录diy信息
        asyncFlag: false,
        isSave: false, // 保存状态
        previewText: "预览<i class='el-icon-view el-icon--right'>",
        isshow: false,
        showEntireSet: false,
        color: {
          main: '#409EFF',
          brand: '#409EFF',
          metal: '#575962',
          light: '#ffffff',
          accent: '#00c5dc',
          focus: '#9816f4',
          primary: '#5867dd',
          success: '#34bfa3',
          info: '#36a3f7',
          warning: '#ffb822',
          danger: '#f4516c'
        },
        fontColeor: {
          main: '#303133',
          common: '#606266',
          minor: '#909399',
          placeholder: '#dcdfe6'
        },
        borderColor: {
          one: '#dcdfe6',
          two: '#f2f6fc'
        }
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
      },
      previewClick () {
        this.previewText = this.previewText === '预览<i class=\'el-icon-view el-icon--right\'>' ? '编辑<i class=\'el-icon-edit el-icon--right\'>' : '预览<i class=\'el-icon-view el-icon--right\'>'
        this.isshow = !this.isshow
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './Layout.scss'; // 便于调试，css写到layout.css中
</style>
