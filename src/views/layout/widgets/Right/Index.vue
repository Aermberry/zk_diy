<template>
  <div class="layout-right">
    <div class="layout-right-tab-box">
      <ul class="tab-top-item">
        <li class="active" @click="tabRight=1">
          <div>
            <i class="icon flaticon-interface-8"></i>属性</div>
        </li>
        <li @click="tabRight=2">

          <div>
            <i class="icon flaticon-map"></i>树图</div>
        </li>
        <li @click="tabRight=3">

          <div>
            <i class="icon flaticon-time-2"></i>历史</div>
        </li>
      </ul>
      <div class="right-tab-content" v-if="tabRight===1">
        <div class="right-tab-top">
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
        <div class="right-tab-center">
          <div class="tab-title">
            biaotititititittititi
          </div>
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
        <div class="right-tab-bottom">
          <div class="tab-title">
            biaotititititittititi
          </div>
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-tab-content" v-if="tabRight===2">
        <div class="right-tab-top">
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
        <div class="right-tab-center">
          <div class="tab-title">
            biaotititititittititi
          </div>
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-tab-content" v-if="tabRight===3">
        <div class="right-tab-top">
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
        <div class="right-tab-center">
          <div class="tab-title">
            biaotititititittititi
          </div>
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
        <div class="right-tab-bottom">
          <div class="tab-title">
            74+8949849849849849848
          </div>
          <div class="tab-top-content-box">
            <ul class="tab-top-content">
              <li>Nemwwewewewewe</li>
              <li>yuyuyuyuyuyuyuyu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        tabRight: 1
      }
    },
    computed: {},
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/assets/styles/mixin.scss';
  .layout-right {
    width: 270px;
    display: flex;
    margin-top: 80px;
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
            width: auto;
            height: 50px;
            margin: 0 auto;
            padding-left: 10px;
            line-height: 50px;
            text-align: center;
            font-size: 15px;
            color: #666c7a;
            cursor: pointer;
            .icon {
              display: inline-block;
              font: 12px;
              padding-right: 5px;
            }
          }
        }
        li.active {
          div {
            color: #716aca;
            border-bottom: 1px solid #716aca;
            padding: 0;
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
              content: '';
              position: absolute;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #ecedf2;
              top: 15px;
              left: 15px;
            }
            li:before {
              content: '';
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
</style>
