<template>
  <div class="zk-newpage">
    <div class="page_name">
      <span class="page_title">
        <i class="flaticon-cogwheel-2"></i>
        Page Settings</span>
      <el-button class="page_close">
        <i class="flaticon-close el-icon--left"></i>
        close
      </el-button>
      <el-button type="success" class="page_save">
        <i class="el-icon-check el-icon--left"></i>
        save
      </el-button>
    </div>
    <div class="page_setting">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="页面名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="是否公开">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="内容">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="选项" name="type"></el-checkbox>
            <el-checkbox label="" name="type"></el-checkbox>
            <el-checkbox label="选项" name="type"></el-checkbox>
            <el-checkbox label="选项" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="商品"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .zk-newpage {
    width: 800px;
    height: auto;
    background: #ffffff;
    border: 1px solid #eeeeee;
    .page_name {
      padding: 20px 0;
      padding-left: 12px;
      // background-color: red;
      display: flex;
      line-height: 40px;
      // padding-bottom: 24px;
      justify-content: flex-start;
      border-bottom: 20px solid #eeeeee;
      .page_title {
        // background-color: #fff;
        font-weight: 900;
        flex-basis: 569px;
      }
    }
    .page_setting {
      padding: 20px 50px;
    }
  }
</style>


