<template>
  <div class="app-wrapper" :class="classObj">
    <div class="layout-left">
      <div class="layout-logo-box">
        <router-link to="" class="layout-logo">
          <img src="" alt="">
        </router-link>
      </div>
      <div class="layout-left-nav">
        <ul class="layout-left-item-box">
          <li class="left-item">
            <div @click="ceshi()">
              <i class="left-item-icon">

              </i>
              <span class="left-item-text"  >
                  首页
              </span>
            </div>
          </li>
          <li class="left-item">
            <div  @click="dialogTableVisible = true,eject = false">
              <i class="left-item-icon">

              </i>
              <span class="left-item-text"  >
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
             <el-button v-on:click="createpage">新建页面</el-button>
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>
        </div>
      </div>
      <!-- <app-main></app-main> -->
      <draggable class="dragArea" v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id" style="border: 2px solid #FFCCCC;margin:10px;" @click="loadProperty(element)"> 
     <img src="" alt="" style="width: 100%;
    height: 150px;
    border-bottom: 2px solid #f1f1f1;
">
              <div class="content-text">
                <p>{{element.name}}</p>
                <span>{{element.desc}}</span>
              </div>
   </div>
</draggable>
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
        <div class="layout-right-tab-box">
          <ul class="tab-top-item">
                  <li class="active" @click="tabRight=1">
                    <div>属性</div>
                  </li>
                  <li @click="tabRight=2">
                    <div>树图</div>
                  </li>
                  <li @click="tabRight=3">
                    <div>历史</div>
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
    <div class="layout-bottom">
      <div class="bottom-p"></div>
      <div class="bottom-right">
      <div class="layout-bottom-left">
        20178484448444849
      </div>
      <div class="layout-bottom-right">
        <ul>
          <li>qwe</li>
          <li>wqe</li>
          <li>ewq</li>
          <li>ewq</li>
        </ul>
        </div>
      </div>
    </div>
    <el-dialog v-el-drag-dialog @dragDialog="handleDrag" title="qweqweqwewq" :visible.sync="dialogTableVisible" class="popup-module">
      <!-- <div class="module-title">
        qweqweqwewq
      </div> -->
      <div class="module-nav">
        <ul>
          <li>
              qwe
          </li>
          <li class="active">
            asd
          </li>
        </ul>
      </div>
      <div class="module-search">
        <div class="search-left">
          qweqweqweqe
        </div>
        <div class="search-right">
          <el-input style='width:222px;' placeholder="搜索" prefix-icon="el-icon-search" v-model="moduleSearch"></el-input>
          <el-button style='' type="primary" icon="search"> 搜索</el-button>
        </div>
      </div>
      <div class="module-content">
        <div class="content-left">
          <ul>
            <li :class="{'active':showContent===1}"  @click="showContent=1">789</li>
            <li :class="{'active':showContent===2}"  @click="showContent=2">456</li>
          </ul>
        </div>
        <div class="content-right">
          <ul class="content-box" v-if="showContent===1">
            <li v-for="item in comps" v-bind:key="item.key" @click="selectitem(item)">
              <img src="" alt="">
              <div class="content-text">
                <p>{{item.name}}</p>
                <span>{{item.desc}}</span>
              </div>
            </li>  
          </ul>
          <ul class="content-box" v-if="showContent===2">
            <li v-for="item in comps" v-bind:key="item.key" @click="selectitem(item)">
              <img src="" alt="">
              <div class="content-text">
                <p>{{item.name}}</p>
                <span>{{item.desc}}</span>
              </div>
            </li>  
          </ul>
        </div>
      </div>
      <div class="module-bottom">
        <div class="bottom-sumbit">
          <el-button style='' @click="addcomponenttoplate" type="primary" > 提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import Screenfull from '@/components/Screenfull'
import ErrorLog from '@/components/ErrorLog'
import elDragDialog from '@/directive/el-dragDialog' // base on element-ui
import draggable from 'vuedraggable'

export default {
  name: 'layout',
  directives: { elDragDialog },
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Screenfull,
    ErrorLog,
    draggable
  },
  data() {
    return {
      myArray: [],
      eject: false,
      tabRight: 1,
      dialogTableVisible: false,
      moduleSearch: '',
      showContent: 1,
      newpage: '',
      comps: [
        {
          key: 'BackToTop/index.vue',
          name: '回到顶部',
          desc: '',
          category: ''
        },
        {
          key: 'Breadcrumb/index.vue',
          name: '面包屑',
          desc: '',
          category: ''
        },
        {
          key: 'Charts/mixChart.vue',
          name: '图表',
          desc: '',
          category: ''
        },
        {
          key: 'DndList/index.vue',
          name: 'DndList',
          desc: '',
          category: ''
        },
        {
          key: 'Dropzone/index.vue',
          name: 'Dropzone',
          desc: '',
          category: ''
        },
        {
          key: 'ErrorLog/index.vue',
          name: '错误日志',
          desc: '',
          category: ''
        },
        {
          key: 'GithubCorner/index.vue',
          name: 'GithubCorner',
          desc: '',
          category: ''
        },
        {
          key: 'Hamburger/index.vue',
          name: 'Hamburger',
          desc: '',
          category: ''
        },
        {
          key: 'ImageCropper/index.vue',
          name: 'ImageCropper',
          desc: '',
          category: ''
        }
      ],
      currentCompent: ''
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
    data () {
      return {
        diyUrl: ''
      }
    },
    // v-el-drag-dialog onDrag callback function
    handleDrag() {
      this.$refs.select.blur()
    },
    createpage() {
      this.newpage = draggable
    },
    selectitem(si) {
      this.currentCompent = si
    },
    loadProperty() {

    },
    addcomponenttoplate() {
      if (this.currentCompent !== null && this.currentCompent !== '') {
        this.myArray.push(this.currentCompent)
        this.dialogTableVisible = false
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/assets/styles/mixin.scss';
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    padding-left: 80px;
    display: flex;
    flex-flow: column;
    .layout-right-navbar{
      height:70px;
      display: flex;
      .right-item-box{
        height:70px;
        display: flex;
        width:100%;
        border-top:1px solid #e5e5e5;
        border-bottom:1px solid #e5e5e5;
        li.right-item{
        display: flex;
        flex:1;
        align-items:center;
        justify-content:center;
        height:70px;
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
    .layout-right-tab-box{
      padding-left:10px;
      height:100vh;
      padding-bottom:45px;
      border-left:1px solid #e5e5e5;
      flex:1;
      .tab-top-item{
        height:50px;
        display: flex;
        padding-right:100px;
        border-bottom:1px solid #e5e5e5;
        margin-bottom:20px;
        li{
          flex:1;
          div{
            width:30px;
            height:50px;
            margin:0 auto;
            line-height: 50px;
            text-align: center;
            font-size:15px;
            color:#666c7a;
            cursor: pointer;
          }
        }
        li.active{
          div{
            color:#716aca;
            border-bottom:1px solid #716aca
          }
        }
      }
      .right-tab-content{
      .tab-top-content-box{
        .tab-top-content{
          li{
            height:40px;
            line-height: 40px;
            color:#666c7a;
            padding-left:40px;
            position: relative;
          }
          li:first-child::before{
            content:none;
          }
          li:after{
            content:'';
            position: absolute;
            width:10px;
            height:10px;
            border-radius: 50%;
            background: #ecedf2;
            top:15px;
            left:15px;
          }
          li:before{
            content:'';
            position: absolute;
            width:2px;
            height:40px;
            background: #ecedf2;
            top:-25px;
            left:19px;
          }
        }
      }
      .tab-title{
        height:60px;
        line-height: 80px;
        font-weight: bold;
        font-size:18px;
        padding-left:20px;
      }
      }

    }
  }
  .layout-bottom{
    width:100%;
    height:45px;
    position: fixed;
    left:0;
    bottom:0;
    border-top:2px solid #e5e5e5;
    z-index: 9998;
    background: white;
    display: flex;
    .bottom-p{
      width:80px;
      height:45px;
    }
    .bottom-right{
      flex: 1;
      display: flex;
    }
    .layout-bottom-left{
      height:45px;
      line-height: 55px;
      color:#666c7a;
      padding-left:30px;
    }
    .layout-bottom-right{
      flex:1;
      height:45px;
      ul{
        display: flex;
        height:45px;
        justify-content:flex-end ;
        align-items:center;
        padding-right:200px;
        li{
          height:45px;
          padding: 0 20px;
          line-height: 45px;
          color:#666c7a;
        }
      }
    }
  }
  .popup-module{
    padding:0;
    .module-title{
      height:50px;
      line-height: 50px;
      color: #3899ed;
      padding-left:20px;
      font-size:18px;
    }
    .module-nav{
      height:50px;
      border-top:1px solid #d4ecfe;
      border-bottom:1px solid #d4ecfe;
      background: #ebf7ff;
      ul{
        li{
          float: left;
          height:50px;
          line-height: 50px;
          color:#0b5672;
          padding:0 40px;
          border-right:1px solid #dae1e8
        }
        li.active{
          background: #fff;
        }
      }
    }
    .module-search{
      margin-top:1px;
      height:50px;
      display: flex;
      border-bottom:1px solid #dae1e8;
      .search-left{
        height:50px;
        flex:1;
        line-height: 50px;
        color:#7d94a6;
        padding-left:20px;
      }
      .search-right{
        height:50px;
        display: flex;
        align-items:center;
        padding-right:50px;
        .el-button{
          margin-left:10px;
        }
      }
    }
    .module-content{
      height:500px;
      display: flex;
      .content-left{
        width:140px;
        height:500px;
        border-right:1px solid #dae1e8;
        ul{
          height:500px;
          overflow: auto;
          li{
            height:40px;
            line-height: 40px;
            padding-left:30px;
            color:#29292a;
          }
          li.active{
            background: #3899ed;
            color:#fff;
          }
        }
      }
      .content-right{
        padding:12px;
        height:500px;
        flex:1;
        ul.content-box{
          width:100%;
          height:500px;
          overflow: auto;
          li{
            float: left;
            width:260px;
            height:200px;
            border-radius: 5px;
            border:1px solid #f3f3f3;
            margin-right:10px;
            margin-bottom:10px;
            img{
              width:100%;
              height:150px;
              border-bottom:2px solid #f1f1f1
            }
            .content-text{
              padding:5px 10px;
              p{
                color:#808581;
                font-size:16px;
              }
              span{
                margin-top:5px;
                color:#808581;
                font-size:15px;
              }
            }
          }
        }
        ul:after{
          content:'';
          display: block;
          clear: both;
        }
      }
    }
    .module-bottom{
      height:50px;
      border-top:1px solid #d7d7d7;
      position: relative;
      .bottom-sumbit{
        position: absolute;
        top:50%;
        right:50px;
        transform: translateY(-50%);
      }
    }
  }
  .popup-module /deep/ .el-dialog{
    width:1600px;
    z-index: 9999;
  }
  .popup-module /deep/ .el-dialog__header{
    // padding:0;
  }
  .popup-module /deep/ .el-dialog__body{
    padding:0;
    width:1600px;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
</style>
