<template>
    <el-dialog v-el-drag-dialog @dragDialog="handleDrag" :title="title" :visible.sync="dialogVisible" width="60%" class="zk-widget-data">

        <div class="module-content">

            <el-row :gutter="10" v-if="asyncFlag">
                <el-col :span="21">
                    <zk-table :viewPropertys="viewModel.propertys" :dataValues="viewModel.values" v-if="viewModel.pageType===2" v-loading="loading"></zk-table>
                    <zk-auto-form :viewForm="viewModel.AutoForm" v-if="viewModel.pageType===1"></zk-auto-form>
                </el-col>
                <el-col :span="3" class="content-right">
                    <el-alert title="双击使用历史数据" :closable="false" type="success" class="widget-alert">
                    </el-alert>
                    <ul>
                        <li>数据一</li>
                        <li>数据一</li>
                        <li>数据一</li>
                        <li>数据一</li>
                        <li>数据一</li>
                    </ul>
                </el-col>
            </el-row>
        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">关 闭</el-button>
            <el-dropdown split-button type="primary" :loading="saveLoading" @click="saveClick(1)" @command="saveClick(2)">
                保存
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @command="saveClick(2)">保存并另存</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </span>
    </el-dialog>
</template>

<script>
    import elDragDialog from '@/directive/el-dragDialog'
    import { WIDGETDATA_GETVIEW_GET, WIDGETDATA_SAVE_POST } from '@/service/api/apiUrl'
    export default {
        name: 'layout-left',
        directives: { elDragDialog },
        props: ['themePageInfo', 'dialogVisible', 'widgetId'],
        data () {
            return {
                viewModel: null,
                asyncFlag: false,
                saveLoading: false,
                loading: false,
                title: 'Cell(导航管理)',
                themePageModel: null // 站点URL
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            async init () {
                this.loading = true
                this.viewModel = await this.$api.get(WIDGETDATA_GETVIEW_GET, 'widgetId=' + this.widgetId)
                console.info('表格数据', this.viewModel)
                this.loading = false
                this.asyncFlag = true
            },
            handleDrag () {
                this.$refs.select.blur()
            },
            async saveClick (type) {
                const savePara = {
                    widgetId: this.widgetId,
                    themeId: this.themePageInfo.themeId,
                    widgetDataId: '',
                    themePageId: this.themePageInfo.themePageId,
                    saveType: type
                }
                console.info('保存参数', savePara)
                this.saveLoading = true
                var result = this.$api.post(WIDGETDATA_SAVE_POST, savePara)
                this.saveLoading = false
                console.info('保存结果', result)
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
    	padding-left: 5px;
    	height: 500px;
    	display: flex;
    	border-bottom: 1px solid $--border-color-extra-light;
    	.content-right {
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
    			width: 100%;
    		}
    		div {
    			padding: 8px 0px;
    		}
    	}
    }
</style>
