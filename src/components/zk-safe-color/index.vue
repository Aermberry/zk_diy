<template>
    <zk-dialog ref="ref_zk_dialog" title="web安全色" width="60%">
        <div slot="body" class="zk-safe-color">
            <div class="color-box">
                <el-row :gutter="6" class='colors' v-for='(item,index) in baseColors' :key='index'>
                    <el-col :span="4" v-for='(color,colorIndex) in item.colors' :key='colorIndex'>
                        <span :style='{backgroundColor:color.color}' @click='copyed' v-html='color.color' :data-clipboard-text='color.color' class='color'></span>
                    </el-col>
                </el-row>
            </div>
        </div>
    </zk-dialog>
</template>

<script>
    import Clipboard from 'clipboard'
    import safeColor from './color'
    export default {
        name: 'zk-safe-color',
        props: {
            dialogModel: {}
        },
        data () {
            return {
                baseColors: ''
            }
        },
        mounted () {
            this.init()
            this.$nextTick(function () {
                this.$on('child', function (dialogCloseVisible) {
                    // console.info('zk-test父组件点击')
                    this.$refs.ref_zk_dialog.$emit('child', this.dialogCloseVisible)
                })
            })
        },
        methods: {
            async  init () {
                this.baseColors = safeColor
            },
            copyed () {
                const btnCopy = new Clipboard('.color')
                if (btnCopy) {
                    this.$message({
                        message: '颜色值已成功复制',
                        type: 'success'
                    })
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import './style.scss';
</style>

