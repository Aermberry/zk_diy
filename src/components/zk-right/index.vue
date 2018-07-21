<template>
  <div class="zk-right">
    <el-tabs v-model="tabModel" @tab-click="handleClick" class="is-always-shadow">
      <el-tab-pane name="property">
        <span slot="label">
          <i class="icon flaticon-interface-8"></i> 属性</span>
        用户管理</el-tab-pane>
      <el-tab-pane name="pageData">
        <span slot="label">
          <i class="icon flaticon-interface-8"></i> 云市场</span>
        页面云市场</el-tab-pane>
      <el-tab-pane label="角色管理" name="history">
        <span slot="label">
          <i class="icon flaticon-time-2"></i> 历史</span>
        <div class="tab-top-content-box">
          <el-alert title="点击查看历史版本，保存即可还原" type="success">
          </el-alert>
          <ul class="tab-top-content">
            <li v-for="(item,index) in pageHistory" :key="index">
              <a>{{item.clientUser.userName}}({{item.clientUser.name}})
                <span>{{item.createTime}}</span>
              </a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane name="tree">
        <span slot="label">
          <i class="icon flaticon-map"></i> 树图</span>
        <el-menu :default-openeds="['_0']">
          <el-submenu :index="'_'+index" v-for="(item ,index) in diyInfo.Layouts" :key="index" :layout-id="item.layoutId" :layout-path="item.path">
            <template slot="title">
              <i class="flaticon-browser"></i> {{item.name}}</template>
            <el-menu-item :index="'_'+index+'_'+widgetIndex" v-for="(widget ,widgetIndex) in item.widgets" :key="widgetIndex" :widget-id="widget.id" :component-path="widget.componentPath">
              <i class="flaticon-interface-7"></i> {{widget.name}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import { PAGEACTION_GETLIST_GET } from '@/service/api/apiUrl' // 引入Api接口常量
  export default {
    components: {
    },
    data () {
      return {
        tabModel: 'property',
        pageHistory: '' // 历史记录
      }
    },
    computed: {},
    props: ['themePageInfo', 'diyInfo'],
    methods: {
      async handleClick (tab) {
        //	console.log(tab)
        if (tab.name === 'history') {
          this.getPageHistory()
        }
      },
      // 页面历史记录
      async	getPageHistory () {
        console.info(this.diyInfo)
        const para = {
          themePageId: this.themePageInfo.themePageId
        }
        this.pageHistory = await this.$api.get(PAGEACTION_GETLIST_GET, para)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>

