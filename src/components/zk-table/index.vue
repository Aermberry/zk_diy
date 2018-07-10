<template>
    <el-table :data="tableData4" v-loading="loading" style="width: 100%" max-height="580" v-if="asyncFlag">
        <el-table-column fixed :prop="item.prop" :label="item.label" :width="item.width" v-for="(item,index) in tableViewData" :key="index">
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
    import Sortable from 'sortablejs'
    export default {
        mounted () {
            this.init()
        },
        methods: {
            deleteRow (index, rows) {
                rows.splice(index, 1)
            },
            init () {
                this.loading = false
                this.tableViewData = [{
                    label: '日期',
                    prop: 'date',
                    width: '150'
                }, {
                    label: 'name',
                    prop: 'name',
                    width: '150'
                }, {
                    label: 'province',
                    prop: 'province',
                    width: '150'
                }, {
                    label: 'city',
                    prop: 'city',
                    width: '150'
                }, {
                    label: 'address',
                    prop: 'address',
                    width: '300'
                }, {
                    label: 'zip',
                    prop: 'zip',
                    width: '150'
                }
                ]
                this.asyncFlag = true
            }
        },
        data () {
            return {
                loading: false,
                asyncFlag: false,
                tableViewData: '', // 构建表格的数据
                tableData4: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }]
            }
        },
        getList () {
            this.listLoading = true
            // fetchList(this.listQuery).then(response => {
            //     this.list = response.data.items
            //     this.total = response.data.total
            //     this.listLoading = false
            //     this.oldList = this.list.map(v => v.id)
            //     this.newList = this.oldList.slice()
            //     this.$nextTick(() => {
            //         this.setSort()
            //     })
            // })
        },
        setSort () {
            const el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
            this.sortable = Sortable.create(el, {
                ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
                setData: function (dataTransfer) {
                    dataTransfer.setData('Text', '')
                    // to avoid Firefox bug
                    // Detail see : https://github.com/RubaXa/Sortable/issues/1012
                },
                onEnd: evt => {
                    const targetRow = this.list.splice(evt.oldIndex, 1)[0]
                    this.list.splice(evt.newIndex, 0, targetRow)

                    // for show the changes, you can delete in you code
                    const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
                    this.newList.splice(evt.newIndex, 0, tempIndex)
                }
            })
        }
    }
</script>