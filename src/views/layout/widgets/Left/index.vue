<template>
  <div class="layout-left">
    <div class="layout-logo-box">
      <router-link to="" class="layout-logo">
        <img src="../../../../assets/img/logo.png" alt="">
      </router-link>
    </div>
    <div class="layout-left-nav">
      <ul class="layout-left-item-box">
        <li class="left-item">
          <div @click="pageBox()">
            <x-icon src='table.svg'></x-icon>
            <span class="left-item-text">
              页面
            </span>
          </div>
        </li>
        <li class="left-item">
          <div @click="dialogTableVisible = true,eject = false">
            <x-icon src='tree.svg'></x-icon>
            <span class="left-item-text">
              添加模块
            </span>
          </div>
        </li>
      </ul>
      <div>

      </div>
    </div>
    <div class="popup-page-box" :class="{'eject':eject}">
      <div class="page-top">
        <div class="page-top-left">
          页面设置
          <i class="page-box-close" @click="pageBox()">×</i>
        </div>
        <div class="page-top-right">
          <ul>
            <li class="top-right-item">
              <x-icon src='tree.svg'></x-icon>
            </li>
            <li class="top-right-item">
              <x-icon src='tree.svg'></x-icon>
            </li>
          </ul>
        </div>
      </div>
      <div class="page-center">
        <div class="page-center-title">
          <div class="title-left">
            首页
          </div>
          <div class="title-right">
            <div class="title-right-btn">
              使用
            </div>
            <x-icon src='tree.svg'></x-icon>
          </div>
        </div>
        <div class="page-show">
          添加新页面
        </div>
        <div class="page-hint">
          点击右上角的按钮,创建一个文件夹或页面。
        </div>
      </div>
    </div>
    <el-dialog v-el-drag-dialog @dragDialog="handleDrag" title="模块管理" :visible.sync="dialogTableVisible" class="popup-module">
      <div class="module-nav">
        <ul>
          <li class="active">
            我的模块
          </li>
          <li>
            模块市场
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
            <li class="active" v-for="(item, index) in widgetClass" :key="index">{{item.value}}</li>
          </ul>
        </div>
        <div class="content-right">
          <ul class="content-box">
            <li>
              <img src="" alt="">
              <div class="content-text">
                <p>基础</p>
                <span>1111111111111111</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="module-bottom">
        <div class="bottom-sumbit">
          <el-button style='' type="primary"> 提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import elDragDialog from '@/directive/el-dragDialog'
  import { DIY_GETLINK_GET, WIDGET_CLASS_GET } from '@/service/api/apiUrl' // 引入Api接口常量
  export default {
    name: 'layout-left',
    directives: { elDragDialog },
    data () {
      return {
        eject: false,
        dialogTableVisible: false,
        moduleSearch: '',
        viewModel: '',
        widgetClass: '',
        showContent: 1
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async pageBox () {
        this.eject = !this.eject
      },
      async init () {
        const para = {
          diyKey: 'grid_index'
        }
        this.viewModel = await this.$api.get(DIY_GETLINK_GET, para)
        // console.info('widet数据', this.viewModel)
        this.widgetClass = await this.$api.get(WIDGET_CLASS_GET, para)
      },
      handleClickOutside () {
        this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
      },
      handleDrag () {
        this.$refs.select.blur()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/assets/styles/mixin.scss';
  .layout-left {
    position: fixed;
    top: 0;
    left: 0;
    width: 69px;
    height: 100vh;
    display: flex;
    flex-flow: column;
    z-index: 9999;
    .layout-logo-box {
      width: 69px;
      height: 100px;
      background: #282a3c;
      position: relative;
      z-index: 9999;
      a.layout-logo {
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .layout-left-nav {
      width: 100%;
      flex: 1;
      padding: 0;
      position: relative;
      padding-top: 10px;
      ul.layout-left-item-box {
        width: 69px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #2c2e3d;
        z-index: 9999;
        li.left-item {
          width: 69px;
          height: 80px;
          a,
          div {
            position: relative;
            display: block;
            padding: 10px;
            width: 69px;
            height: 80px;
            cursor: pointer;
            i.left-item-icon {
              display: block;
              width: 30px;
              height: 30px;
              margin: 0 auto;
            }
            span.left-item-text {
              margin-top: 10px;
              font-size: 12px;
              font-weight: 1000;
              color: white;
              display: block;
              text-align: center;
            }

            .svg-icon {
              color: #fff;
              position: absolute;
              top: -2px;
              left: 26px;
            }
          }
        }
      }
    }
    .popup-page-box {
      position: absolute;
      top: 70px;
      left: -229px;
      width: 300px;
      height: 100vh;
      background: white;
      z-index: 9998;
      border: 1px solid #e5e5e5;
      transition: all 0.5s ease;
      .page-top {
        display: flex;
        height: 40px;
        padding: 0 5px;
        .page-top-left {
          font-size: 16px;
          color: #666c7a;
          height: 100%;
          line-height: 40px;
          font-weight: bold;
          .page-box-close {
            color: #9e9e9e;
            cursor: pointer;
          }
        }
        .page-top-right {
          flex: 1;
          height: 40px;
          padding: 5px 0;
          ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            li.top-right-item {
              width: 30px;
              height: 30px;
              border: 2px solid #e5e5e5;
              border-radius: 5px;
              margin-left: 5px;
              cursor: pointer;
              position: relative;
              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #484848;
              }
            }
          }
        }
      }
      .page-center {
        .page-center-title {
          width: 96%;
          height: 40px;
          margin-left: 2%;
          border-top: 2px solid #e5e5e5;
          border-bottom: 2px solid #e5e5e5;
          background: #eeeeee;
          display: flex;
          .title-left {
            height: 40px;
            line-height: 40px;
            color: #926754;
            padding-left: 30px;
          }
          .title-right {
            flex: 1;
            height: 40px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 10px;
            color: #555555;
            .title-right-btn {
              height: 20px;
              background: #74ca73;
              line-height: 20px;
              padding: 0 5px;
              color: white;
              font-size: 14px;
              margin-right: 10px;
            }
          }
        }
        .page-show {
          width: 100%;
          font-size: 15px;
          font-weight: bold;
          color: #848482;
          text-align: center;
          padding: 40px 0;
        }
        .page-hint {
          width: 90%;
          margin-left: 5%;
          border-radius: 5px;
          border: 2px solid #dcdcdc;
          padding: 30px;
          color: #929091;
          font-size: 15px;
        }
      }
    }
    .eject {
      left: 80px;
    }
  }

  .popup-module {
    padding: 0;
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
          border-right: 1px solid #dae1e8;
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
      border-bottom: 1px solid #dae1e8;
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
        padding-right: 50px;
        .el-button {
          margin-left: 10px;
        }
      }
    }
    .module-content {
      height: 500px;
      display: flex;
      .content-left {
        width: 140px;
        height: 500px;
        border-right: 1px solid #dae1e8;
        ul {
          height: 500px;
          overflow: auto;
          li {
            height: 40px;
            line-height: 40px;
            padding-left: 30px;
            color: #29292a;
          }
          li.active {
            background: #3899ed;
            color: #fff;
          }
        }
      }
      .content-right {
        padding: 12px;
        height: 500px;
        flex: 1;
        ul.content-box {
          width: 100%;
          height: 500px;
          overflow: auto;
          li {
            float: left;
            width: 260px;
            height: 200px;
            border-radius: 5px;
            border: 1px solid #f3f3f3;
            margin-right: 10px;
            margin-bottom: 10px;
            img {
              width: 100%;
              height: 150px;
              border-bottom: 2px solid #f1f1f1;
            }
            .content-text {
              padding: 5px 10px;
              p {
                color: #808581;
                font-size: 16px;
              }
              span {
                margin-top: 5px;
                color: #808581;
                font-size: 15px;
              }
            }
          }
        }
        ul:after {
          content: '';
          display: block;
          clear: both;
        }
      }
    }
    .module-bottom {
      height: 50px;
      border-top: 1px solid #d7d7d7;
      position: relative;
      .bottom-sumbit {
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
      }
    }
  }
  .popup-module /deep/ .el-dialog {
    width: 1600px;
    z-index: 9999;
  }
  .popup-module /deep/ .el-dialog__header {
    // padding:0;
  }
  .popup-module /deep/ .el-dialog__body {
    padding: 0;
    width: 1600px;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
</style>
