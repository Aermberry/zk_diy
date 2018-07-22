<template>
  <zk-dialog ref="ref_zk_dialog" title="文件管理" width="60%">
    <div slot="body" class="zk-file">
      <div class="module-nav">
        <ul>
          <li @click="showContent=1" :class="{'active':showContent===1}">
            图片管理
          </li>
          <li @click="showContent=2" :class="{'active':showContent===2}">
            图标管理
          </li>
          <li @click="showContent=3" :class="{'active':showContent===3}">
            视频管理
          </li>
          <li @click="showContent=4" :class="{'active':showContent===4}">
            音频管理
          </li>
          <li @click="showContent=5" :class="{'active':showContent===5}">
            云空间
          </li>
        </ul>
      </div>
      <div class="module-search">
        <div class="search-left">
          <!-- 上传区 -->
          <div class="upload">
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
              <i class="el-icon-upload"></i>
              <span class="el-upload__text">将文件拖到此处，或
                <em>点击上传</em>
              </span>
              <span class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</span>
            </el-upload>
          </div>
        </div>
        <div class="search-right">
          <el-input style='width:222px;' placeholder="搜索" prefix-icon="el-icon-search" v-model="moduleSearch"></el-input>
          <el-button style='' type="primary" icon="search"> 搜索</el-button>
        </div>
      </div>
      <!-- 图片管理 -->
      <div class="module-content" v-if="showContent===1">
        <div class="content-left">
          <!-- 侧栏 -->
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item-group closable @tab-remove="removeTab">
              <template v-for="item in editableTabs">
                <el-menu-item :index="item.index" v-text="item.content" :key="item.index">
                </el-menu-item>
              </template>
              <el-menu-item @click="addTab(editableTabsValue2)" class="btn_create">
                <i class="flaticon-add-circular-button"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </div>
        <div class="content-right">
          <!-- 图片渲染 -->
          <div class="images">
            <template v-for="(items,index) of images">
              <el-row :key="index">
                <!-- :style="{width:width+'px'}" -->
                <template v-for="(item,index) of items.urls ">
                  <el-col :span="4" :key="index">
                    <div class="grid-content bg-purple">
                      <span>
                        <img :src="{url:item.url}" alt="">
                        <div class="card-management">
                          <div class="card-mask">
                            <a>编辑</a>
                            <a>分类</a>
                            <a>删除</a>
                          </div>
                        </div>
                      </span>
                    </div>
                  </el-col>
                </template>
              </el-row>
            </template>
          </div>
        </div>
      </div>
      <!-- 图标管理 -->
      <div class="module-content" v-if="showContent===2">
        <div class="content-left">
          <ul>
            <li v-for="(item, index) in fileClass" :key="index">{{item.value}}</li>
            <li>
              <x-icon src="example" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="eye" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="form" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="modules" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="new" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="pages" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="password" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="phone" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="table" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="tree" size="100"></x-icon>
            </li>
            <li>
              <x-icon src="user" size="100"></x-icon>
            </li>
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
                    <el-button type="text" class="button">添加</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 视频管理 -->
      <div class="module-content" v-if="showContent===3">
        <div class="content-left">
          <ul>
            <li v-for="(item, index) in fileClass" :key="index">{{item.value}}</li>
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
                    <el-button type="text" class="button">添加</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 音频管理 -->
      <div class="module-content" v-if="showContent===4">
        <div class="content-left">
          <ul>
            <li v-for="(item, index) in fileClass" :key="index">{{item.value}}</li>
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
                    <el-button type="text" class="button">添加</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 云空间 -->
      <div class="module-content" v-if="showContent===5">
        <div class="content-left">
          <ul>
            <li v-for="(item, index) in fileClass" :key="index">{{item.value}}</li>
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
                    <el-button type="text" class="button">添加</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </div>
  </zk-dialog>

</template>

<script>
import elDragDialog from '@/directive/el-dragDialog'
import { WIDGET_GETLIST_GET, WIDGET_CLASS_GET } from '@/service/api/apiUrl'
export default {
  name: 'layout-left',
  directives: { elDragDialog },
  props: ['themePageInfo', 'dialogVisible'],
  data () {
    return {
      moduleSearch: '',
      viewModel: null,
      fileClass: '',
      themePageModel: null, // 站点URL
      fileClassId: 0, // 文件分类Id
      showContent: 1,
      images: [
        {
          urls: [
            { url: require('../../../static/img/iphone8.png') },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          urls: [
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' }
          ]
        },
        {
          urls: [
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' }
          ]
        },
        {
          urls: [
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' },
            { url: 'javascript:void(0)' }
          ]
        }
      ],
      width: 0,
      url: '',
      editableTabs: [
        {
          index: '1-1',
          content: '未分类'
        },
        {
          index: '1-2',
          content: '网站广告图'
        },
        {
          index: '1-3',
          content: '799'
        },
        {
          index: '1-4',
          content: '网站装修'
        }
      ]

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      // 文件、文件分类导入
      const para = {
        relationId: this.fileClassId // 根据参数获取列表
      }
      this.fileClass = await this.$api.get(WIDGET_CLASS_GET, '', 'widget_class')
      this.viewModel = await this.$api.get(WIDGET_GETLIST_GET, para, 'widget_list')
    },
    mounted () {
      this.init()
      this.$nextTick(function () {
        this.$on('child', function (dialogCloseVisible) {
          // console.info('zk-test父组件点击')
          this.$refs.ref_zk_dialog.$emit('child', this.dialogCloseVisible)
        })
      })
    },
    addTab (editableTabsValue2) {

    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>
