<template>
  <div class="app-wrapper" :class="classObj">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar> -->
    <div class="layout-left">
      <div class="layout-logo-box">
        <router-link to="" class="layout-logo">
          <img src="" alt="">
        </router-link>
      </div>
      <div class="layout-left-nav">
        <ul class="layout-left-item-box">
          <li class="left-item">
            <div to="" @click="ceshi()">
              <i class="left-item-icon">

              </i>
              <span class="left-item-text"  >
                  首页
              </span>
            </div>
          </li>
          <li class="left-item">

          </li>
        </ul>
        <div>

        </div>
      </div>
      <div class="popup-page-box" :class="{'eject':eject}">
        <div class="page-top">
          <div class="page-top-left">
            页面设置 <i class="page-box-close" @click="ceshi()">×</i>
          </div>
          <div class="page-top-right">
           <ul>
             <li class="top-right-item">
              <svg-icon icon-class="table" />
             </li>
             <li class="top-right-item">
              <svg-icon icon-class="table" />
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
                <svg-icon icon-class="table" />
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
    </div>
    <div class="layout-center">
      <!-- <navbar></navbar> -->
      <div class="layout-center-navbar">
        <div class="center-navbar-left">
          <svg-icon icon-class="component" />
          <span>模块中心</span>
        </div>
        <div class="center-navbar-right">
           <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>
        </div>
      </div>
      <!-- <app-main></app-main> -->
    </div>
    <div class="layout-right">
        <div class="layout-right-navbar">
          <ul class="right-item-box">
            <li class="right-item">
              <svg-icon icon-class="example" />
              <span>手机</span>
            </li>
            <li class="right-item">
              <span>保存</span>
            </li>
            <li class="right-item">
              <span>预览</span>
            </li>
            <li class="right-item">
              <div class="item-sumbit">
                  发布
              </div>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import Screenfull from '@/components/Screenfull'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Screenfull
  },
  data() {
    return {
      eject:false
    }
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    ceshi(){
      this.eject=!this.eject
      console.log('this.eject',this.eject)
    },
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  body, h1, h2, h3, h4, h5, h6, ul, li, dl, dt, dd, form, img, ol, p, div, dl, dd, dt, hr, label, em, i, textarea {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    font-style: normal;
    word-break: break-all;
}
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    padding-left:80px;
    display: flex;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .layout-left{
    position: fixed;
    top:0;
    left:0;
    width:80px;
    height:100vh;
    display: flex;
    flex-flow: column;
    .layout-logo-box{
      width:80px;
      height:80px;
      background: #282a3c;
      position: relative;
      a.layout-logo{
        display: block;
        width:30px;
        height:30px;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        img{
          display: block;
          width:100%;
          height:100%;
        }
      }
    }
    .layout-left-nav{
        width:100%;
        flex:1;
        padding:0;
        position: relative;
        padding-top:10px;
        ul.layout-left-item-box{
          width:80px;
          height:100%;
          position: absolute;
          top:0;
          left:0;
          background: #2c2e3d;
          z-index: 9999;
          li.left-item{
            width:80px;
            height:80px;
            a,div{
              display: block;
              padding:10px;
              width:80px;
              height:80px;
            cursor: pointer;
            i.left-item-icon{
              display: block;
              width:30px;
              height:30px;
              margin:0 auto;
            }
            span.left-item-text{
              margin-top:10px;
              font-size:14px;
              color:white;
              display: block;
              text-align: center;
            }
            }
           }
        }

    }
    .popup-page-box{
      position: absolute;
      top:80px;
      left:-220px;
      width:300px;
      height:100vh;
      background: #f5f5f5;
      z-index:9998;
      border:1px solid #e5e5e5;
      transition: all .5s ease;
      .page-top{
        display: flex;
        height:40px;
        padding:0 5px;
        .page-top-left{
          font-size:16px;
          color:black;
          height:100%;
          line-height: 40px;
          font-weight: bold;
          .page-box-close{
            color:#9e9e9e;
            cursor:pointer;
          }
        }
        .page-top-right{
          flex:1;
          height:40px;
          padding:5px 0 ;
          ul{
            width:100%;
            height:100%;
            display: flex;
            justify-content:flex-end;
            li.top-right-item{
              width:30px;
              height:30px;
              border:2px solid #e5e5e5;
              border-radius: 5px;
              margin-left:5px;
              cursor:pointer;
              position: relative;
              svg{
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                color:#484848;
              }
            }
          }
        }
      }
      .page-center{
        .page-center-title{
          width:96%;
          height:40px;
          margin-left:2%;
          border-top:2px solid #e5e5e5;
          border-bottom:2px solid #e5e5e5;
          background: #eeeeee;
          display: flex;
          .title-left{
            height:40px;
            line-height: 40px;
            color:#926754;
            padding-left:30px;
          }
          .title-right{
            flex:1;
            height:40px;
            display: flex;
            justify-content: flex-end ;
            align-items: center ;
            padding-right:10px;
            color:#555555;
            .title-right-btn{
              height:20px;
              background: #74ca73;
              line-height: 20px;
              padding: 0 5px;
              color:white;
              font-size:14px;
              margin-right:10px;
            }
          }
        }
        .page-show{
          width:100%;
          font-size:15px;
          font-weight: bold;
          color:#848482;
          text-align: center;
          padding:40px 0;
        }
        .page-hint{
            width:90%;
            margin-left:5%;
            border-radius: 5px;
            border:2px solid #dcdcdc;
            padding:30px;
            color:#929091;
            font-size:15px;
        }
      }
    }
    .eject {
      left:80px;
    }
  }
  .layout-center{
    flex:1;
    .layout-center-navbar{
      height:80px;
      display: flex;
      align-items:center;
      border-bottom:1px solid #e5e5e5;
      .center-navbar-left{
          width:200px;
          height:100%;
          padding-left:20px;
          display: flex;
          align-items:center;
          svg{
            color:#716aca;
          }
          span{
            margin-left:5px;
            font-size:16px;
            color:#716aca;
          }
      }
      .center-navbar-right{
        flex:1;
        height:100%;
        display: flex;
        justify-content:flex-end;
        align-items:center;
        padding:0 10px;
      }
    }
  }
  .layout-right{
    width:400px;
    .layout-right-navbar{
      height:80px;
      display: flex;
      .right-item-box{
        height:80px;
        display: flex;
        width:100%;
        border-top:1px solid #e5e5e5;
        border-bottom:1px solid #e5e5e5;
        li.right-item{
        display: flex;
        flex:1;
        align-items:center;
        justify-content:center;
        height:80px;
        border-left:2px solid #f0f9ff;
        cursor:pointer;
        span{
          margin-left:5px;
        }
        .item-sumbit{
          width:100%;
          height:100%;
          background: #3898ec;
          color:white;
          text-align: center;
          line-height: 80px;
        }
        }
      }
    }
  }
</style>
