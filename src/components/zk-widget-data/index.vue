<template>
    <el-dialog v-el-drag-dialog @dragDialog="handleDrag" :title="title" :visible.sync="dialogVisible" width="60%" class="zk-widget-data">

        <div class="module-content">
            <div class="content-left">
                <el-table>
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
            </div>
            <div class="content-right">
                <el-collapse v-model="activeNames" @change="historyDataChange">
                    <el-collapse-item title="一致性" name="1">
                        <div>与现实生活一致：与现实生活的流程、</div>
                        <div class="time">2018-7-10 08:26:53</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 " name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    </el-collapse-item>
                </el-collapse>
            </div>

        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">关 闭</el-button>
            <el-dropdown split-button type="primary">
                保存
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>保存并另存</el-dropdown-item>
                    <el-dropdown-item>另存为</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
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
                viewModel: null,
                activeNames: '1',
                title: 'Cell(导航管理)',
                themePageModel: null // 站点URL
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
            },
            // 改变历史数据
            historyDataChange () {

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import 'src/assets/styles/mixin.scss';
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
    .module-content {
    	height: 500px;
    	display: flex;
    	border-bottom: 1px solid $--border-color-extra-light;
    	.content-right {
    		width: 140px;
    		height: 445px;
    		border-left: 1px solid $--border-color-extra-light;
    		ul {
    			overflow: auto;
    			overflow-x: hidden;
    			li {
    				height: 35px;
    				line-height: 35px;
    				padding-left: 5px;
    				color: #29292a;
    			}
    			li.active {
    				background: #3899ed;
    				color: #fff;
    			}
    		}
    		.el-alert {
    			margin-bottom: 0px;
    			overflow: hidden;
    			width: 138px;
    		}
    		div {
    			padding: 8px 0px;
    		}
    	}
    	.content-left {
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
</style>
