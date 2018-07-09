<template>
	<el-dialog v-el-drag-dialog @dragDialog="handleDrag" title="文件管理" :visible.sync="dialogVisible" width="80%" class="zk-file">
		<div class="module-nav">
			<ul>
				<li class="active">
					图片管理
				</li>
				<li>
					图标管理
				</li>
				<li>
					视频管理
				</li>
				<li>
					音频管理
				</li>
				<li>
					云空间
				</li>
			</ul>
		</div>
		<div class="module-search">
			<div class="search-left">
				双击文件，拖动到可视化区域
			</div>
			<div class="search-right">
				<el-input style='width:222px;' placeholder="搜索" prefix-icon="el-icon-search" v-model="moduleSearch"></el-input>
				<el-button style='' type="primary" icon="search"> 搜索</el-button>
			</div>
		</div>
		<div class="module-content">
			<div class="content-left">
				<ul>
					<li v-for="(item, index) in fileClass" :key="index">{{item.value}}</li>
				</ul>
			</div>
			<div class="content-right">
				<el-row>
					<el-col :span="4" v-for="(item ,index) in viewModel" :key="index" class="content-box" :widget-id="item.id" :widget-componentPath="item.componentPath">
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
		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">关 闭</el-button>
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import elDragDialog from '@/directive/el-dragDialog'
	import { WIDGET_GETLIST_GET, WIDGET_CLASS_GET } from '@/service/api/apiUrl'
	export default {
		name: 'layout-left',
		directives: { elDragDialog },
		props: ['themePageInfo', 'dialogVisible'],
		data () {
			return {
				moduleSearch: '',
				viewModel: null,
				fileClass: '',
				themePageModel: null, // 站点URL
				fileClassId: 0 // 文件分类Id
			}
		},
		mounted () {
			this.init()
		},
		methods: {
			async init () {
				// 文件、文件分类导入
				const para = {
					relationId: this.fileClassId // 根据参数获取列表
				}
				this.fileClass = await this.$api.get(WIDGET_CLASS_GET, '', 'widget_class')
				this.viewModel = await this.$api.get(WIDGET_GETLIST_GET, para, 'widget_list')
			},
			handleDrag () {
				this.$refs.select.blur()
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import 'src/assets/styles/mixin.scss';

	.zk-file {
		padding: 0;
		.el-dialog__body {
			padding: 0px;
		}
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
					border-right: 1px solid $--border-color-extra-light;
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
			border-bottom: 1px solid $--border-color-extra-light;
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
				padding-right: 5px;
				.el-button {
					margin-left: 10px;
				}
			}
		}
		.module-content {
			height: 500px;
			display: flex;
			border-bottom: 1px solid $--border-color-extra-light;
			.content-left {
				width: 140px;
				height: 500px;
				border-right: 1px solid $--border-color-extra-light;
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
	}
</style>
