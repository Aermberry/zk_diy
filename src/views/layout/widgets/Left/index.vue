<template>
	<div>
		<el-aside width="55px" class="app-left m-aside-menu">
			<div class="nav-logo">
				<img src="../../../../assets/img/logo.png" alt="匠芯云DIY平台" class="logo-icon">
				<ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
					<li class="m-menu__item  m-menu__item--active">
						<a class="m-menu__link " @click="pageBox()">
							<span class="m-menu__item-here"></span>
							<i class="m-menu__link-icon flaticon-web "></i>
							<span class="m-menu__link-text">
								页面
							</span>
						</a>
					</li>
					<li class="m-menu__item">
						<a @click="widgetClick()" class="m-menu__link " title="添加模块">
							<i class="m-menu__link-icon flaticon-app "></i>
							<span class="m-menu__link-title">
								<span class="m-menu__link-wrap">
									<span class="m-menu__link-text" title="添加模块">
										添加
									</span>
								</span>
							</span>
						</a>
					</li>
					<li class="m-menu__item">
						<a @click="layoutBox()" class="m-menu__link " title="添加布局">
							<i class="m-menu__link-icon flaticon-browser "></i>
							<span class="m-menu__link-title">
								<span class="m-menu__link-wrap">
									<span class="m-menu__link-text" title="添加布局">
										布局
									</span>
								</span>
							</span>
						</a>
					</li>
					<li class="m-menu__item">
						<a class="m-menu__link " title="Api接口">
							<i class="m-menu__link-icon flaticon-multimedia-1  "></i>
							<span class="m-menu__link-title">
								<span class="m-menu__link-wrap">
									<span class="m-menu__link-text" title="添加模块">
										Api
									</span>
								</span>
							</span>
						</a>
					</li>
					<li class="m-menu__item">
						<a href="/" class="m-menu__link " title="添加模块">
							<i class="m-menu__link-icon flaticon-coins  "></i>
							<span class="m-menu__link-title">
								<span class="m-menu__link-wrap">
									<span class="m-menu__link-text" title="添加模块">
										文件
									</span>
								</span>
							</span>
						</a>
					</li>
					<li class="m-menu__item">
						<a href="/" class="m-menu__link " title="添加模块">
							<i class="m-menu__link-icon flaticon-info "></i>
							<span class="m-menu__link-title">
								<span class="m-menu__link-wrap">
									<span class="m-menu__link-text" title="添加模块">
										帮助
									</span>
								</span>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</el-aside>
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
						<li v-for="(item, index) in widgetClass" :key="index">{{item.value}}</li>
					</ul>
				</div>
				<div class="content-right">
					<el-row>
						<el-col :span="4" v-for="(item ,index) in viewModel" :key="index" class="content-box">
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
			<div class="module-bottom">
				<div class="bottom-sumbit">
					<el-button style='' type="primary"> 提交</el-button>
				</div>
			</div>
		</el-dialog>
		<div class="popup-page-box" :class="{'page-box-visible':pageBoxVisible}">
			<div class="page-top">
				<div class="page-top-left">
					页面设置
					<i class="page-box-close" @click="pageBox()">×</i>
				</div>
				<div class="page-top-right">
					<a>
						<i class="el-icon-plus"></i>新增页面</a>
				</div>
			</div>
			<div class="page-center">
				<el-menu :default-openeds="['_0']">
					<el-submenu :index="'_'+index" v-for="(item ,index) in themeModel" :key="index">
						<template slot="title">
							<i class="el-icon-menu"></i>{{item.title}}</template>
						<el-menu-item :index="'_'+index+'_'+pageIndex" v-for="(page ,pageIndex) in item.pages" :key="pageIndex">
							<i class="flaticon-more-v4"></i>{{page.title}}
							<i class="flaticon-settings-1 icon-right" :title="item.url"></i>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</div>
		</div>
		<div class="popup-page-box" :class="{'layout-box-visible':layoutBoxVisible}">
			<div class="page-top">
				<div class="page-top-left">
					布局
					<i class="page-box-close" @click="layoutBox()">×</i>
				</div>
			</div>
			<div class="page-center layout-box">
				<el-row>
					<el-col :span="12" v-for="(item,index) in layoutModel" :key="index">
						<el-card :body-style="{ padding: '2px' }">
							<img src="http://localhost:5000/fileCenter/layout/layout.jpg">
							<div style="padding: 2px;">
								<span>{{item.name}}</span>
							</div>
						</el-card>
					</el-col>

				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	import elDragDialog from '@/directive/el-dragDialog'
	import { WIDGET_GETLIST_GET, LAYOUT_GETLIST_GET, WIDGET_CLASS_GET, THEMEPAGE_GETTHEMEPAGELIST_GET } from '@/service/api/apiUrl'
	export default {
		name: 'layout-left',
		directives: { elDragDialog },
		data () {
			return {
				pageBoxVisible: false, // 页面窗口是否显示
				layoutBoxVisible: false, // 页面窗口是否显示
				dialogTableVisible: false, // 模块弹出窗口
				moduleSearch: '',
				viewModel: null,
				widgetClass: '',
				clientType: '2',
				themeModel: null, // 站点URL
				layoutModel: null, // 布局
				widgetClassId: 0, // 模块分类Id
				showContent: 1
			}
		},
		mounted () {
			this.init()
		},
		methods: {
			async pageBox () {
				this.pageBoxVisible = !this.pageBoxVisible
				this.layoutBoxVisible = false
			},
			async layoutBox () {
				this.layoutBoxVisible = !this.layoutBoxVisible
				this.pageBoxVisible = false
			},
			async widgetClick () {
				this.dialogTableVisible = !this.pageBoxVisible
				this.pageBoxVisible = false
				this.layoutBoxVisible = false
			},
			async init () {
				// 模块、模块分类导入
				const para = {
					relationId: this.widgetClassId // 根据参数获取列表
				}
				this.widgetClass = await this.$api.get(WIDGET_CLASS_GET, '', 'widget_class')
				this.viewModel = await this.$api.get(WIDGET_GETLIST_GET, para, 'widget_list')

				// 页面初始化
				const themeInput = {
					siteId: '5b4029cd3cb0ee4fdc47cfa5',
					clientType: this.clientType
				}
				this.themeModel = await this.$api.get(THEMEPAGE_GETTHEMEPAGELIST_GET, themeInput, 'themePage_' + this.clientType)

				// 布局
				const layoutPara = {
					clientType: this.clientType
				}
				this.layoutModel = await this.$api.get(LAYOUT_GETLIST_GET, layoutPara, 'layout_list_' + this.clientType)
			},
			handleDrag () {
				this.$refs.select.blur()
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import 'src/assets/styles/mixin.scss';
	.popup-page-box {
		position: absolute;
		top: 57px;
		left: -300px;
		width: 300px;
		height: 100vh;
		background: white;
		z-index: 50;
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
					transform: translate(-50%, -50%);
				}
			}
		}
		.page-center {
			.el-submenu .el-menu-item {
				height: 35px;
				line-height: 35px;
			}
			.el-submenu__title {
				padding: 0px;
			}
			.el-menu-item .icon-right {
				float: right;
				justify-content: flex-end;
				margin-right: -25px;
			}
		}
	}
	.page-box-visible {
		left: 55px;
	}
	.layout-box-visible {
		left: 55px;
	}
	.layout-left {
		position: fixed;
		top: 70px;
		left: 0;
		width: 69px;
		height: 100vh;
		display: flex;
		flex-flow: column;
		z-index: 9999;
		.layout-left-nav {
			width: 100%;
			flex: 1;
			padding: 0;
			position: relative;
			padding-top: 150px;
			ul.layout-left-item-box {
				width: 69px;
				height: 100%;
				position: absolute;
				top: 0px;
				padding-top: 40px;
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
							color: #515151;
							display: block;
							text-align: center;
						}

						span.left-item-text.zk-active {
							color: white;
						}

						.svg-icon {
							width: 30px !important;
							height: 30px !important;
							position: absolute;
							top: -14px;
							left: 20px;
						}
					}
				}
			}
		}
	}
	.layout-box {
		.el-card {
			float: left;
			width: 132px;
			height: 170px;
			border-radius: 5px;
			margin: 8px;
			overflow: hidden;
		}
		img {
			width: 100%;
			height: 132px;
			margin-left: -2px;
			margin-top: -2px;
			width: 132px;
			border-bottom: 2px solid #f1f1f1;
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
						content: '';
					}
					.clearfix:after {
						clear: both;
					}
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
</style>
