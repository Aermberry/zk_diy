<template>
  <x-popup>
    <li class="m-menu__item  m-menu__item--active" slot="reference">
      <a class="m-menu__link " @click="pageBox()">
        <span class="m-menu__item-here"></span>
        <i class="m-menu__link-icon flaticon-web "></i>
        <span class="m-menu__link-text">
          页面
        </span>
      </a>
    </li>
  </x-popup>
</template>

<script>
  import { THEME_GETVALUE_GET } from '@/service/api/apiUrl'
  export default {
    name: 'zk-page',
    props: {
      widget: {}
    },
    data () {
      return {
        viewModel: '',
        asyncflag: false
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async  init () {
        this.asyncflag = true
        const parameter = {
          dataId: this.widget && this.widget.dataId,
          defaultId: '5b406cddfef00000a0000001'
        }
        this.viewModel = await this.$api.get(THEME_GETVALUE_GET, parameter)
        // console.info('zk-page数据',this.viewModel)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './style.scss';
</style>

