<template>
    <el-dialog v-el-drag-dialog @dragDialog="handleDrag" :title="title" :visible.sync="dialogVisible" width="80%" class="zk-widget-data">

        <div class="module-content">
            <div class="content-left">
                <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
            </div>
            <div class="content-right">
                <ul>
                    <li>数据一</li>
                    <li>数据一</li>
                    <li>数据一</li>
                    <li>数据一</li>
                    <li>数据一</li>
                </ul>
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
                viewModel: null,
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
    		height: 500px;
    		border-left: 1px solid $--border-color-extra-light;
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
