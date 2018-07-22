<template>
  <div class="pc-x-popup" element-path="pc/x-popup">
    <el-popover :placement="placement" width="400" :trigger="trigger">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <a slot="reference">{{label}}</a>
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
      placement: {
        type: String,
        default: 'right',
        validator: value => ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(value) > -1
      },
      trigger: {
        type: String,
        default: 'click',
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

<style scoped >
  .pc-x-popup {
  	font-size: 12px;
  }
</style>
