
  <template>
  <x-popup title="全局设置" placement="right" width="550px" left="-562px" top="40px">
    <div class="entire-set" slot="bodyContent">
      <div class="page_setting">
        <div class="entire-set-box">
          <div class="main-item">
            <div class="main-item_title">
              主色
            </div>
            <div class="main-item_content">
              <el-color-picker v-model="color.main"></el-color-picker>
            </div>
          </div>
          <div class="minor-item">
            <div class="minor-item_title">
              辅助色
            </div>
            <div class="minor-item_content-box">
              <ul>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    brand
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.brand"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    metal
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.metal"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    light
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.light"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    accent
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.accent"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    focus
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.focus"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    primary
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.primary"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    success
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.success"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    info
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.info"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    warning
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.warning"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    danger
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="color.danger"></el-color-picker>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="minor-item">
            <div class="minor-item_title">
              中性色
            </div>
            <div class="minor-item_content-box">
              <ul>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    主要文字
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.main"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    常规文字
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.common"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    次要文字
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.minor"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    占位字体
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="fontColeor.placeholder"></el-color-picker>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="minor-item">
            <div class="minor-item_title">
              边框颜色
            </div>
            <div class="minor-item_content-box">
              <ul>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    一级边框
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="borderColor.one"></el-color-picker>
                  </div>
                </li>
                <li class="content-tiem">
                  <div class="content-tiem-left">
                    二级边框
                  </div>
                  <div class="content-tiem-right">
                    <el-color-picker v-model="borderColor.two"></el-color-picker>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="minor-btn">
            <el-button style='' type="primary">
              <i class="flaticon-open-box "></i>
              保存
            </el-button>
          </div>
        </div>
        <div class="past-records">
          <div class="past-records_title">
            历史记录
          </div>
          <div class="past-records_content">
            <ul>
              <li class="content-item">
                历史纪录1
              </li>
              <li class="content-item">
                历史记录2
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <el-button class="global_button" slot="reference">
      <i class="flaticon-open-box "></i>
      全局设置
    </el-button>
  </x-popup>
</template>
 

<script>
  export default {
    data () {
      return {
        color: {
          main: '#409EFF',
          brand: '#409EFF',
          metal: '#575962',
          light: '#ffffff',
          accent: '#00c5dc',
          focus: '#9816f4',
          primary: '#5867dd',
          success: '#34bfa3',
          info: '#36a3f7',
          warning: '#ffb822',
          danger: '#f4516c'
        },
        fontColeor: {
          main: '#303133',
          common: '#606266',
          minor: '#909399',
          placeholder: '#dcdfe6'
        },
        borderColor: {
          one: '#dcdfe6',
          two: '#f2f6fc'
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .global_button {
  	height: 55px;
  	border-radius: 0px;
  }
  .entire-set {
  	position: fixed;
  	min-width: 400px;
  	min-height: 500px;
  	background: #fff;
  	box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
  	.page_setting {
  		padding: 20px 50px;
  		display: flex;
  		.past-records {
  			width: 140px;
  			.past-records_title {
  				font-size: 12px;
  				line-height: 44px;
  				padding-left: 12px;
  				-webkit-box-sizing: border-box;
  				box-sizing: border-box;
  				border-bottom: 1px solid #e5e5e5;
  			}
  			.past-records_content {
  				ul {
  					margin-top: 20px;
  					.content-item {
  						height: 30px;
  						line-height: 30px;
  						padding-left: 12px;
  						font-size: 12px;
  						color: #606266;
  						font-weight: 700;
  						cursor: pointer;
  					}
  				}
  			}
  		}
  		.entire-set-box {
  			width: 300px;
  			border-right: 1px solid #e5e5e5;
  			.main-item {
  				display: flex;
  				border-bottom: 1px solid #eeeeee;
  				margin-bottom: 20px;
  				position: relative;
  				.main-item_title {
  					width: 60px;
  					font-size: 12px;
  					color: #606266;
  					line-height: 40px;
  					padding: 0 12px 0 0;
  					-webkit-box-sizing: border-box;
  					box-sizing: border-box;
  					font-weight: 700;
  				}
  			}
  			.minor-item {
  				border-bottom: 1px solid #eeeeee;
  				.minor-item_title {
  					width: 92px;
  					font-size: 12px;
  					color: #606266;
  					line-height: 40px;
  					padding: 0 12px 0 0;
  					-webkit-box-sizing: border-box;
  					box-sizing: border-box;
  					font-weight: 700;
  				}
  				.minor-item_content-box {
  					ul {
  						.content-tiem {
  							float: left;
  							width: 50%;
  							height: 40px;
  							line-height: 40px;
  							padding: 0 12px;
  							display: flex;
  							.content-tiem-left {
  								width: 70px;
  								font-size: 12px;
  								color: #606266;
  								font-weight: 700;
  								padding-right: 10px;
  							}
  						}
  					}
  					ul:after {
  						content: '';
  						display: block;
  						clear: both;
  					}
  				}
  			}
  			.minor-btn {
  				text-align: right;
  				margin-top: 20px;
  				padding-right: 20px;
  			}
  		}
  		.past-records {
  		}
  	}
  }
</style>
