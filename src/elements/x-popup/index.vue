<template>
  <div class="pc-x-popup" element-path="pc/x-popup">
    {{viewModel}}
  </div>
</template>

<script>
  export default {
    name: 'x-popup',
    props: {
      elementData: {}
    },
    data () {
      return {
        viewModel: ''
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
