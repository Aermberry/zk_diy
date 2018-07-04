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
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";

section {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
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
.layout-left {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  display: flex;
  flex-flow: column;
  z-index: 9999;
  .layout-logo-box {
    width: 80px;
    height: 70px;
    background: #282a3c;
    position: relative;
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
      width: 80px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #2c2e3d;
      z-index: 9999;
      li.left-item {
        width: 80px;
        height: 80px;
        a,
        div {
          display: block;
          padding: 10px;
          width: 80px;
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
            font-size: 14px;
            color: white;
            display: block;
            text-align: center;
          }
        }
      }
    }
  }
  .popup-page-box {
    position: absolute;
    top: 70px;
    left: -220px;
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
.layout-center {
  flex: 1;
  background: #f3f4f9;
  .layout-center-navbar {
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
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
.layout-right {
  width: 300px;
  display: flex;
  flex-flow: column;
  .layout-right-navbar {
    height: 70px;
    display: flex;
    .right-item-box {
      height: 70px;
      display: flex;
      width: 100%;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      li.right-item {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        height: 70px;
        border-left: 2px solid #f0f9ff;
        cursor: pointer;
        span {
          margin-left: 5px;
        }
        .item-sumbit {
          width: 100%;
          height: 100%;
          background: #3898ec;
          color: white;
          text-align: center;
          line-height: 80px;
        }
      }
    }
  }
  .layout-right-tab-box {
    padding-left: 10px;
    height: 100vh;
    padding-bottom: 45px;
    border-left: 1px solid #e5e5e5;
    flex: 1;
    .tab-top-item {
      height: 50px;
      display: flex;
      padding-right: 100px;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 20px;
      li {
        flex: 1;
        div {
          width: 30px;
          height: 50px;
          margin: 0 auto;
          line-height: 50px;
          text-align: center;
          font-size: 15px;
          color: #666c7a;
          cursor: pointer;
        }
      }
      li.active {
        div {
          color: #716aca;
          border-bottom: 1px solid #716aca;
        }
      }
    }
    .right-tab-content {
      .tab-top-content-box {
        .tab-top-content {
          li {
            height: 40px;
            line-height: 40px;
            color: #666c7a;
            padding-left: 40px;
            position: relative;
          }
          li:first-child::before {
            content: none;
          }
          li:after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ecedf2;
            top: 15px;
            left: 15px;
          }
          li:before {
            content: "";
            position: absolute;
            width: 2px;
            height: 40px;
            background: #ecedf2;
            top: -25px;
            left: 19px;
          }
        }
      }
      .tab-title {
        height: 60px;
        line-height: 80px;
        font-weight: bold;
        font-size: 18px;
        padding-left: 20px;
      }
    }
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
        content: "";
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
