<template>
	<el-dialog v-el-drag-dialog @dragDialog="handleDrag" title="文件管理" :visible.sync="dialogVisible" width="70%" class="zk-file">
		<div class="module-nav">
			<ul>
				<li @click="showContent=1" :class="{'active':showContent===1}" >
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
			</div>
			<div class="search-right">
				<el-input style='width:222px;' placeholder="搜索" prefix-icon="el-icon-search" v-model="moduleSearch"></el-input>
				<el-button style='' type="primary" icon="search"> 搜索</el-button>
			</div>
		</div>
    <!-- 图片管理 -->
		<div class="module-content" v-if="showContent===1">
			<div class="content-left">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item-group>
            <el-menu-item index="1-1">未分类</el-menu-item>
            </template>
            <el-menu-item index="1-1">未分类</el-menu-item>
            <el-menu-item index="1-2">网站广告图</el-menu-item>
            <el-menu-item index="1-3">799</el-menu-item>
            <el-menu-item index="1-4">网站装修</el-menu-item>
            <el-menu-item index="1-5" @click="addTab(editableTabsValue2)" class="btn_create"><i class="flaticon-add-circular-button"></i></el-menu-item>
          </el-menu-item-group>
      </el-menu>
			</div>
			<div class="content-right">
        <div class="images">
           <template v-for="(items,index) of images">
             <el-row :key="index">
         <!-- :style="{width:width+'px'}" -->
               <template v-for="(item,index) of items.urls ">
                <el-col :span="4" :key="index">
                <div class="grid-content bg-purple">
                 <span>
                 <img :src="{url:item.url}" alt="">
                 </span>
                 </div>
                 </el-col>
                </template>
             </el-row>
            </template>
<div class="zk-paginations">
  <zk-Pagination class="pagination"></zk-Pagination>
</div>
        </div>
         <div class="upload">
          <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <span class="el-upload__text">将文件拖到此处，或<em>点击上传</em></span>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
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
        <div class="zk-paginations">
  <zk-Pagination class="pagination"></zk-Pagination>
</div>
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
	</el-dialog>
</template>

<script>
import Pagination from '@/views/layout/widgets/Left/Pagination'
import elDragDialog from '@/directive/el-dragDialog'
import { WIDGET_GETLIST_GET, WIDGET_CLASS_GET } from '@/service/api/apiUrl'
export default {
  name: 'layout-left',
  directives: { elDragDialog },
  props: ['themePageInfo', 'dialogVisible'],
  components: {
    'zk-Pagination': Pagination
  },
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
      url: ''
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
    handleDrag () {
      this.$refs.select.blur()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/styles/mixin.scss";

.zk-file {
  padding: 0;
  .el-dialog__body {
    padding: 0px;
  }
  .module-title {
    height: 50px;
    line-height: 50px;
    color: #3899ed;
    padding-left: 20px;
    font-size: 18px;
  }
  .module-nav {
    height: 50px;
    border-top: 1px solid #d4ecfe;
    border-bottom: 1px solid #d4ecfe;
    background: #ebf7ff;
    ul {
      li {
        float: left;
        height: 50px;
        line-height: 50px;
        color: #0b5672;
        padding: 0 40px;
        border-right: 1px solid $--border-color-extra-light;
        cursor: pointer;
      }
      li.active {
        background: #fff;
      }
    }
  }
  .module-search {
    margin-top: 1px;
    height: 50px;
    display: flex;
    border-bottom: 1px solid $--border-color-extra-light;
    .search-left {
      height: 50px;
      flex: 1;
      line-height: 50px;
      color: #7d94a6;
      padding-left: 20px;
    }
    .search-right {
      height: 50px;
      display: flex;
      align-items: center;
      padding-right: 5px;
      position: relative;
      .el-button {
        margin-left: 10px;
      }

      .upload {
        position: absolute;
        top: 80px;
        right: 20px;
      }
    }
  }
  .module-content {
    height: 500px;
    display: flex;
    border-bottom: 1px solid $--border-color-extra-light;
    .content-left {
      width: 140px;
      height: 500px;
      border-right: 1px solid $--border-color-extra-light;
      .el-menu-item-group {
          .el-menu-item {
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-bottom: 1px solil black;
            &:first-child {
              margin-top: -14px;
            }
          }
      }
      .btn_create {
      }
    }
    .content-right {
      padding: 12px;
      height: 400px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .upload {
        padding-top: 10px;
        flex-grow: 2;
      }
      .el-row {
        // background-color: red;
        padding: 0 10px;
        width: 800px;
        .el-col {
          width: auto;
          .grid-content {
            padding: 0 10px;
            padding-top: 10px;
            width: auto;
            span {
              display: inline-block;
              border: 1px solid #cccccc;
              img {
                display: block;
                width: 105px;
                height: 105px;
              }
            }
          }
        }
      }

      .zk-paginations {
        position: relative;
        height: 50px;
        .pagination {
          position: absolute;
          top: 22px;
          left: 14%;
        }
      }
      .content-box {
        padding: 4px;
        height: 228px;
        overflow: hidden;
        .el-card__body {
          float: left;
          width: 260px;
          height: 200px;
          border-radius: 5px;
          border: 1px solid #f3f3f3;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 100%;
          height: 500px;
          overflow: auto;
        }
        img {
          width: 100%;
          height: 150px;
          border-bottom: 2px solid #f1f1f1;
        }
        .time {
          font-size: 13px;
          color: #999;
        }
        .bottom {
          margin-top: 13px;
          line-height: 12px;
          padding: 0;
          float: right;
        }
        .clearfix:before,
        .clearfix:after {
          display: table;
          content: "";
        }
        .clearfix:after {
          clear: both;
        }
      }
    }
  }
}
</style>
