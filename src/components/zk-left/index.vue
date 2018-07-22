<template>
  <div>
    <el-aside width="55px" class="app-left m-aside-menu">
      <div class="nav-logo">
        <img src="../../assets/img/logo.png" alt="匠芯云DIY平台" class="logo-icon">
        <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
          <zk-page :themePageInfo="themePageInfo"></zk-page>
          <li class="m-menu__item">
            <a @click="widgetClick()" class="m-menu__link " title="添加模块">
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
          <zk-left-layout :themePageInfo="themePageInfo"></zk-left-layout>
          <li class="m-menu__item">
            <a class="m-menu__link " title="Api接口">
              <i class="m-menu__link-icon flaticon-multimedia-1  "></i>
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
            <a @click="$refs.ref_zkfiles.$emit('child')" class="m-menu__link" ref="ref_files" title="文件管理">
              <i class="m-menu__link-icon flaticon-coins  "></i>
              <span class="m-menu__link-title">
                <span class="m-menu__link-wrap">
                  <span class="m-menu__link-text" title="文件管理">
                    文件
                  </span>
                </span>
              </span>
            </a>
          </li>
          <li class="m-menu__item">
            <a @click="openDataDialog()" class="m-menu__link " title="帮助">
              <i class="m-menu__link-icon flaticon-info "></i>
              <span class="m-menu__link-title">
                <span class="m-menu__link-wrap">
                  <span class="m-menu__link-text" title="帮助">
                    帮助
                  </span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </el-aside>
    <el-dialog v-el-drag-dialog @dragDialog="handleDrag" title="模块管理" :visible.sync="dialogWidgetVisible" width="80%" class="widget__dialog">
      <div class="module-nav">
        <ul>
          <li class="active">
            我的模块
          </li>
          <li>
            <el-tooltip class="item" effect="dark" content="即将开通，敬请期待..." placement="bottom">
              <span>模块市场</span>
            </el-tooltip>
          </li>
        </ul>
      </div>
      <div class="module-search">
        <div class="search-left">
          双击模块，拖动到可视化区域
        </div>
        <div class="search-right">
          <el-input style='width:222px;' placeholder="搜索" prefix-icon="el-icon-search" v-model="moduleSearch"></el-input>
          <el-button style='' type="primary" icon="search"> 搜索</el-button>
        </div>
      </div>
      <div class="module-content">
        <div class="content-left">
          <ul>
            <li v-for="(item, index) in widgetClass" :key="index">{{item.value}}</li>
          </ul>
        </div>
        <div class="content-right">
          <el-row>
            <el-col :span="4" v-for="(item ,index) in viewModel" :key="index" class="content-box" :widget-id="item.id" :widget-componentPath="item.componentPath">
              <el-card :body-style="{ padding: '2px' }">
                <img src="https://img.alicdn.com/tfs/TB1oT8pAuOSBuNjy0FdXXbDnVXa-730-350.png">
                <div style="padding: 5px;">
                  <span>{{item.name}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.intro }}</time>
                    <!-- <el-button type="text" class="button" :click="addComponent(item)">添加</el-button> -->
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogWidgetVisible = false">关 闭</el-button>
        <el-button type="primary" @click="dialogWidgetVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <zk-file ref="ref_zkfiles"></zk-file>
    <zk-widget-data :dialogVisible="dialogDataVisible" :themePageInfo="themePageInfo" :widgetId="widgetId"></zk-widget-data>
    <zk-page-setting ref="zk_newpage" class="popup-newpage" :class="{'page-newpage-visible':newpageVisible}"></zk-page-setting>
  </div>
</template>

<script>
  import elDragDialog from '@/directive/el-dragDialog'
  import { WIDGET_GETLIST_GET, WIDGET_CLASS_GET } from '@/service/api/apiUrl'
  export default {
    name: 'layout-left',
    directives: { elDragDialog },
    props: ['themePageInfo'],
    data () {
      return {
        dialogDataVisible: false, // 首次添加模块、双击模块、编辑模块时弹出的窗口
        dialogWidgetVisible: false, // 模块弹出窗口
        widgetId: 'e6718a33f45ded4d37f58bec',
        newpageVisible: false, // 新建模块
        moduleSearch: '',
        viewModel: null,
        widgetClass: '',
        widgetClassId: 0, // 模块分类Id
        showContent: 1
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async newpages () {
        this.newpageVisible = !this.newpageVisible
        console.log('newpageVisible', this.newpageVisible)
        this.$refs.zk_newpage.$emit('child', this.newpageVisible) // 监听销售属性事件
      },
      async widgetClick () {
        this.dialogWidgetVisible = true
      },
      async init () {
        // 模块、模块分类导入
        const para = {
          relationId: this.widgetClassId // 根据参数获取列表
        }
        this.widgetClass = await this.$api.get(WIDGET_CLASS_GET, '', 'widget_class')
        this.viewModel = await this.$api.get(WIDGET_GETLIST_GET, para, 'widget_list')
      },
      // addComponent (item) {
      //   var win = document.querySelector('#show-iframe').contentWindow
      //   var newComponent = {
      //     name: item.name,
      //     key: item.componentPath
      //   }
      //   var text = win.localStorage.tempComponent
      //   console.log('====' + text)
      //   if (text === undefined) {
      //     text = '[]'
      //   }
      //   var items = JSON.parse(text)
      //   if (items === null) {
      //     items = []
      //   }
      //   items.push(newComponent)
      //   win.localStorage.setItem('tempComponent', JSON.stringify(items))
      //   win.refresh()
      //   //	this.dialogWidgetVisible = !this.dialogWidgetVisible // 关闭模块管理
      // },
      // 打开模块数据管理窗口,双击模块、拖进模块后操作
      openDataDialog () {
        this.dialogDataVisible = true // 弹出模块添加窗口
        this.dialogVisible = false
      }
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>

