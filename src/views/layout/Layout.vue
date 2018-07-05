<template>
  <div class="app-wrapper">
    <layout-left></layout-left>
    <Top></Top>
    <!-- <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="diyUrl"></iframe> -->
    <Right></Right>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
  import { AppMain } from './components'
  import Footer from './components/Footer'
  import Left from './components/Left'
  import Right from './components/Right'
  import Top from './components/Top'
  export default {
    name: 'layout',
    components: {
      'layout-footer': Footer,
      'layout-left': Left,
      Right,
      Left,
      Top,
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
      async  init () {
        this.diyUrl = 'http://www.yiqipingou.com/'
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
  }
</style>
