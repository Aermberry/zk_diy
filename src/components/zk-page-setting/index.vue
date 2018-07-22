<template>
    <x-popup title="页面设置" top="-8px" left="-8px" trigger="click">
        <a @click="newpages()" slot="reference">
            <i class="el-icon-plus"></i>新增页面</a>
        <div slot="bodyContent">
            内容
        </div>
    </x-popup>
</template>

<script>
    export default {
        name: 'zk-page',
        props: {
            themePageInfo: {}
        },
        data () {
            return {
                themePageModel: null, // 站点URL
                asyncflag: false
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            async  init () {

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import './style.scss';
    .popup-newpage {
    	position: absolute;
    	top: 56px;
    	left: -150%;
    	z-index: 50;
    }

    .page-newpage-visible {
    	left: 355px;
    }
</style>

