<template>
  <div class="app-wrapper">
    <layout-top></layout-top>
    <layout-left></layout-left>
    <div class="iphone-x">
      <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="diyUrl" class="show-iframe"></iframe>
    </div>
    <layout-right></layout-right>
    <layout-footer></layout-footer>
  </div>
</template>
<script>
  import { AppMain } from './widgets'
  import Footer from './widgets/Footer'
  import Left from './widgets/Left'
  import Right from './widgets/Right'
  import Top from './widgets/Top'
  export default {
    name: 'layout',
    components: {
      'layout-footer': Footer,
      'layout-left': Left,
      'layout-top': Top,
      'layout-right': Right,
      AppMain
    },
    data () {
      return {
        diyUrl: ''
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async init () {
        // this.diyUrl = 'http://www.yiqipingou.com/'
        this.diyUrl = 'http://localhost:2000/pages/index'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/assets/styles/mixin.scss';
  .app-wrapper {
  	@include clearfix;
  	position: relative;
  	height: 100%;
  	width: 100%;
  	padding-left: 80px;
  	display: flex;
  	.iphone-x {
  		// background: url(./../../assets/img/iphonex.png) no-repeat;
  		border: 10xp solid red;
  		border-top-width: 30px;
  		border-image: url(./../../assets/img/iphonex.png);
  		transform: translate(-250%, 15%);
  		display: flex;
  		width: 490px;
  		border-radius: 30px;
  		overflow: hidden;
  		height: 726px;
  		position: relative;
  		.show-iframe {
  			width: 480px;
  			overflow-x: hidden;
  			overflow-y: auto;
  		}
  	}
  }
</style>
