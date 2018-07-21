<template>
  <div class="zk-newpage" v-if="showBox">
    <div class="page_name">
      <span class="page_title">
        <i class="flaticon-cogwheel-2"></i>
        Page Settings</span>
      <el-button class="page_close" @click="Pagesetting_close()">
        <i class="flaticon-close el-icon--left"></i>
        关闭
      </el-button>
      <el-button type="primary" class="page_save">
        <i class="el-icon-check el-icon--left"></i>
        保存
      </el-button>
    </div>
    <div class="page_setting">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="页面标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="背景颜色">
          <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select> -->
          <el-color-picker v-model="color2"></el-color-picker>
        </el-form-item>
        <el-form-item label="背景图片">
          <!-- <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col> -->
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="背景平铺">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="页面弹性">
          <el-switch v-model="form.elasticity"></el-switch>
        </el-form-item>
        <el-form-item label="分享">
          <el-select v-model="form.region" placeholder="选择分享方式">
            <el-option label="微信" value="weiixn"></el-option>
            <el-option label="QQ" value="qq"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="页面边距">
          <el-select v-model="form.backGauge" placeholder="页面边距">
            <el-option label="1px" value="one"></el-option>
            <el-option label="2px" value="two"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">返回顶部按钮</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'newpage',
    data () {
      return {
        showBox: false,
        form: {
          title: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          elasticity: '',
          backGauge: ''
        },
        color2: null,
        pagesettingclosed: false,
        fileList: [
          { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
        ]
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.$on('child', function (newpageVisible) {
          console.log('newpageVisible', newpageVisible)
          this.showBox = newpageVisible
        })
      })
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      async Pagesetting_close () {
        this.showBox = false
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleExceed (files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove (file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      }
    }
  }
</script>




<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>
