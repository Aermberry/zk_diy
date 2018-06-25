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
            <router-link to="">
              <i class="left-item-icon">

              </i>
              <span class="left-item-text">
                  首页
              </span>
            </router-link>
          </li>
          <li class="left-item">

          </li>
        </ul>
        <div>

        </div>
      </div>
    </div>
    <div class="layout-center">
      <!-- <navbar></navbar> -->
      <div class="layout-center-navbar">
        <div class="center-navbar-left">
          <i class="center-navbar-left-icon"></i>
          <span>模块中心</span>
        </div>
        <div class="center-navbar-right">
        </div>
      </div>
      <app-main></app-main>
    </div>
    <div class="layout-right">
        <div class="layout-right-navbar">
          <ul class="right-item-box">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
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
          li.left-item{
            width:80px;
            height:80px;
            a{
              display: block;
              padding:10px;
                          width:80px;
            height:80px;
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
          i.center-navbar-left-icon{
            display: block;
            width:30px;
            height:30px;
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
      border:1px solid #e5e5e5;
      .right-item-box{
        height:80px;
        display: flex;
        width:100%;
        li{
          flex:1;
        }
      }
    }
  }
</style>
