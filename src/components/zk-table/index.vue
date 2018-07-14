<template>
    <el-table :data="tableData" style="width: 100%" max-height="580">
        <el-table-column fixed :prop="item.field" :label="item.name" :width="item.width" v-for="(item,index) in viewPropertys" :key="index">
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
    export default {
        props: ['viewPropertys', 'widgetDataId'],
        data () {
            return {
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

            }
        }
    }
</script>