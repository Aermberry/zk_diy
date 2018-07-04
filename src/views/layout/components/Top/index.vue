<template>
  <section>
    <div class="layout-center">
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
    </div>
  </section>
</template>

<script>
  import Screenfull from '@/components/Screenfull'
  export default {
    components: {
      Screenfull
    },
    data () {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/mixin.scss';

  section {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
  }

  .layout-center {
    flex: 1;
    background: url(./../../../../assets/img/iphonex.png) no-repeat fixed center;
    background-size: 380px;
    position: relative;
    .layout-center-navbar {
      z-index: 99;
      height: 70px;
      width: 1033px;
      display: flex;
      position: absolute;
      top: 0;
      left: -12px;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      // box-shadow: 0 0 10px 10px #e5e5e5;
      background: white;
      .center-navbar-left {
        width: 200px;
        height: 100%;
        padding-left: 20px;
        display: flex;
        align-items: center;
        svg {
          color: #716aca;
        }
        span {
          margin-left: 5px;
          font-size: 16px;
          color: #716aca;
        }
      }
      .center-navbar-right {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 10px;
      }
    }
  }
</style>
