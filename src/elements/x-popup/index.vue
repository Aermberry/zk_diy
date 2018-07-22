<template>
  <div class="pc-x-popup" element-path="pc/x-popup">
    <el-popover :placement="placement" :width="width" :trigger="trigger">
      <div class="popup-page-box " :style="'left:'+left+';top:'+top+''">
        <div class="page-top">
          <div class="page-top-left">
            {{title}}
          </div>
          <div class="page-top-right">
            <slot name="rightMenu"></slot>
          </div>
        </div>
        <div class="page-center">
          <slot name="bodyContent"></slot>
        </div>
      </div>
      <div slot="reference">
        <slot name="reference" v-if="$slots.reference"></slot>
        <a slot="reference" v-if="!$slots.reference">点击</a>
      </div>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: 'x-popup',
    props: {
      elementData: {},
      label: {
        type: String,
        default: '点击'
      },
      top: {
        type: String,
        default: '-24px'
      },
      left: {
        type: String,
        default: '-13px'
      },
      title: {
        type: String,
        default: '页面标题'
      },
      width: {
        type: String,
        default: '300px'
      },
      placement: {
        type: String,
        default: 'right',
        validator: value => ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(value) > -1
      },
      trigger: {
        type: String,
        default: 'hover',
        validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
      }
    },
    data () {
      return {
        viewModel: '',
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async init () {
        if (this.elementData === undefined) {
          this.viewModel = this.elementData
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped >
  @import 'src/assets/styles/variables.scss';
  @import 'src/assets/styles/mixin.scss';
  .pc-x-popup {
  	.el-popover {
  		position: absolute;
  		background: #fff;
  		min-width: 150px;
  		border-radius: 4px;
  		display: none;
  		padding: 12px;
  		z-index: 2000;
  		color: #606266;
  		line-height: 1.4;
  		text-align: justify;
  		font-size: 14px;
  		-webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  	}
  }
  .popup-page-box {
  	position: absolute;
  	left: -300px;
  	width: 300px;
  	z-index: 9999;
  	background: white;
  	-webkit-transition: all 0.3s ease;
  	-moz-transition: all 0.3s ease;
  	-ms-transition: all 0.3s ease;
  	-o-transition: all 0.3s ease;
  	transition: all 0.3s ease;
  	-webkit-transform: translateY(0);
  	-moz-transform: translateY(0);
  	-ms-transform: translateY(0);
  	-o-transform: translateY(0);
  	transform: translateY(0);
  	-webkit-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  	-moz-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  	.page-top {
  		display: flex;
  		height: 40px;
  		padding: 0 5px;
  		background-color: #716aca;
  		.page-top-left {
  			font-size: 12px;
  			color: #ffffff;
  			height: 100%;
  			line-height: 40px;
  			font-weight: 400;
  			.page-box-close {
  				color: #ffffff;
  				cursor: pointer;
  			}
  		}
  		.page-top-right {
  			flex: 1;
  			height: 40px;
  			display: flex;
  			font-size: 12px;
  			line-height: 40px;
  			justify-content: flex-end;
  			color: #ffffff;
  			i {
  				transform: translate(-50%, 0%);
  			}
  		}
  	}
  	.page-center {
  		overflow: auto;
  		height: 86vh;
  		.el-menu {
  			height: 100%;
  			.el-submenu /deep/ .el-submenu__title {
  				height: 35px;
  				line-height: 35px;
  			}
  		}
  		.el-submenu .el-menu-item {
  			height: 35px;
  			line-height: 35px;
  		}
  		.el-menu-item .icon-right {
  			float: right;
  			justify-content: flex-end;
  			margin-right: -25px;
  		}
  	}
  }
</style>
