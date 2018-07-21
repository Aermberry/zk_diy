<template>
    <div>
        <el-button type="text" @click="click">点击打开 Dialog</el-button>
        <zk-dialog :dialogModel="colorModel" ref="web_safecolors"></zk-dialog>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                colorModel: true
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            async init () {
                this.colorModel = true
            },
            click () {
                this.colorModel = true
                console.info('点击')
            }
        }
    }
</script>
