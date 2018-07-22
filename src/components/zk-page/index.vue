<template>
  <x-popup title="页面管理">
    <a @click="newpages()" slot="rightMenu">
      <i class="el-icon-plus"></i>新增页面</a>
    <el-menu :default-openeds="['_0']" slot="bodyContent">
      <el-submenu :index="'_'+index" v-for="(item ,index) in themePageModel" :key="index">
        <template slot="title">
          <i class="el-icon-menu"></i>{{item.title}}</template>
        <el-menu-item :index="'_'+index+'_'+pageIndex" v-for="(page ,pageIndex) in item.pages" :key="pageIndex" :page-id="page.id" :page-url="page.url">
          <i class="flaticon-more-v4"></i>{{page.title}}
          <i class="flaticon-settings-1 icon-right" :title="item.url"></i>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <li class="m-menu__item  m-menu__item--active" slot="reference">
      <a class="m-menu__link ">
        <span class="m-menu__item-here"></span>
        <i class="m-menu__link-icon flaticon-web "></i>
        <span class="m-menu__link-text">
          页面
        </span>
      </a>
    </li>
  </x-popup>
</template>

<script>
  import { THEMEPAGE_GETTHEMEPAGELIST_GET } from '@/service/api/apiUrl'
  export default {
    name: 'zk-page',
    props: {
      themePageInfo: {}
    },
    data () {
      return {
        themePageModel: null, // 站点URL
        asyncflag: false
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async  init () {
        // 页面初始化
        const themeInput = {
          themeId: this.themePageInfo.themeId,
          clientType: this.themePageInfo.clientType
        }
        this.themePageModel = await this.$api.get(THEMEPAGE_GETTHEMEPAGELIST_GET, themeInput, 'themePage_' + themeInput.themeId + '_' + themeInput.clientType)
        // console.info('页面数据', this.themePageModel)
        this.asyncflag = true
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
  .popup-newpage {
  	position: absolute;
  	top: 56px;
  	left: -150%;
  	z-index: 50;
  }

  .page-newpage-visible {
  	left: 355px;
  }
</style>

