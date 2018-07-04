<template>
	<div class="app-wrapper" :class="classObj">
  <Left></Left>
    <Top></Top>
    <Right></Right>
		<Footer></Footer>
	</div>
</template>

<script>
import { AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import Footer from './components/Footer'
import Left from './components/Left'
import Right from './components/Right'
import Top from './components/Top'
export default {
  name: 'layout',
  components: {
    Footer,
    Right,
    Left,
    Top,
    AppMain
  },
  data() {
    return {

    }
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  padding-left: 80px;
  display: flex;
}
</style>
