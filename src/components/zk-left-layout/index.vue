<template>
  <x-popup title="布局" top="-172px">
    <div class="layout-box" slot="bodyContent">
      <el-row>
        <el-col :span="12" v-for="(item,index) in layoutModel" :key="index" :layout-id="item.id" :layout-path="item.path">
          <el-card :body-style="{ padding: '2px' }">
            <img src="https://diyadmin.5ug.com/fileCenter/layout/layout.jpg">
            <div style="padding: 2px;">
              <span>{{item.name}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <li class="m-menu__item " slot="reference">
      <a class="m-menu__link ">
        <span class="m-menu__item-here"></span>
        <i class="m-menu__link-icon flaticon-browser "></i>
        <span class="m-menu__link-text">
          布局
        </span>
      </a>
    </li>
  </x-popup>
</template>

<script>
  import { LAYOUT_GETLIST_GET } from '@/service/api/apiUrl'
  export default {
    name: 'zk-left-layout',
    props: {
      themePageInfo: {}
    },
    data () {
      return {
        layoutModel: '',
        asyncflag: false
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async  init () {
        // 布局
        const layoutPara = {
          clientType: this.themePageInfo.clientType
        }
        this.layoutModel = await this.$api.get(LAYOUT_GETLIST_GET, layoutPara, 'layout_list_' + this.themePageInfo.clientType)
        this.asyncflag = true
        console.info('布局数据', this.layoutModel)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>

