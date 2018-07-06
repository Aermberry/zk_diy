<template>
  <div class="layout-right">
    <el-tabs v-model="tabModel">
      <el-tab-pane name="property">
        <span slot="label">
          <i class="icon flaticon-interface-8"></i> 属性</span>
        用户管理</el-tab-pane>
      <el-tab-pane name="tree">
        <span slot="label">
          <i class="icon flaticon-map"></i> 树图</span>树图</el-tab-pane>
      <el-tab-pane label="角色管理" name="history">
        <span slot="label">
          <i class="icon flaticon-time-2"></i> 历史</span>
        <div class="tab-top-content-box">
          <ul class="tab-top-content">
            <li>Nemwwewewewewe</li>
            <li>yuyuyuyuyuyuyuyu</li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        tabModel: 'property'
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
  	height: 100vh;
  	flex-flow: column;
  	.el-tabs__item .is-active {
  		color: #716aca;
  	}
  	.el-tabs__nav {
  		.el-tabs__active-bar {
  			background: #716aca;
  		}
  	}

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
  				height: 35px;
  				background: #ecedf2;
  				top: -20px;
  				left: 19px;
  			}
  		}
  	}
  	.tab-title {
  		height: 60px;
  		line-height: 80px;
  		font-weight: bold;
  		font-size: 12px;
  		padding-left: 12px;
  	}
  }
</style>
