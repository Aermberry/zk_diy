<template>
    <el-dialog v-el-drag-dialog @dragDialog="handleDrag" :title="titile" :visible.sync="dialogVisible" width="80%" class="zk-widget-data">

        <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
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
</style>
