<template>
    <el-table :data="tableData" v-loading="loading" style="width: 100%" max-height="580" v-if="asyncFlag">
        <el-table-column fixed :prop="item.field" :label="item.name" :width="item.width" v-for="(item,index) in tableViewData.propertys" :key="index">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="danger" icon="el-icon-delete" circle size="mini"></el-button>
                <i class="el-icon-upload el-icon--right"></i>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    import { WIDGETDATA_GETVIEW_GET } from '@/service/api/apiUrl'
    export default {
        props: ['widgetId', 'widgetDataId'],
        data () {
            return {
                loading: false,
                asyncFlag: false,
                tableViewData: [], // 构建表格的数据
                tableData: ''
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            deleteRow (index, rows) {
                rows.splice(index, 1)
            },
            async init () {
                this.loading = true
                this.widgetId = '5b45350e55f7b54a285630b4'
                this.tableViewData = await this.$api.get(WIDGETDATA_GETVIEW_GET, 'widgetId=' + this.widgetId)
                console.info('表格数据', this.tableViewData)
                this.loading = false
                this.asyncFlag = true
            }
        }
    }
</script>