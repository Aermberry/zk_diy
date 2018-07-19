<template>
<div class="zk-image">
<el-tabs type="border-card">
  <el-tab-pane label="图片管理">
    <template v-for="(item,index) of images">
       <el-row :key="index">

         <template v-for="(item,index) of item.urls ">
           <el-col :span="4" :key="index">
            <div class="grid-content bg-purple">
             <span>
              <img src="item.url" alt="">
             </span>
            </div>
           </el-col>
         </template>
       </el-row>

    </template>

  </el-tab-pane>
<el-tab-pane label="配置管理">
<el-row>
  <el-col :span="4">
    <div class="grid-content bg-purple">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple-light">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple-light">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple-light">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
</el-row>
</el-tab-pane>
<el-tab-pane label="角色管理">
  <el-row>
  <el-col :span="4">
    <div class="grid-content bg-purple">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple-light">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple-light">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple-light">
      <span>
        <img src="" alt="">
        </span>
    </div>
    </el-col>
</el-row>
</el-tab-pane>
</el-tabs>
</div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          urls: [
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          urls: [
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          urls: [
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          urls: [
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          urls: [
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        },
        {
          urls: [
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' },
            { url: '' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-image {
  position: absolute;
  top: 10%;
  left: 30%;
  z-index: 5000;
  width: auto;
  .el-row {
    padding: 0 10px;
    .el-col {
      .grid-content {
        padding: 0 10px;
        padding-top: 10px;
        span {
          display: inline-block;
          border: 1px solid #cccccc;
          img {
            display: block;
            width: 105px;
            height: 105px;
          }
        }
      }
    }
  }
}
</style>


