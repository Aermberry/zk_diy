<template>
    <el-dialog title='Web安全色' :visible.sync='dialogCloseVisible' v-show="dialogModel" @dragDialog="handleDrag" class='zk-safe-color' :before-close='handleClose' width="60%">
        <div class="color-box">
            <el-row :gutter="6" class='colors' v-for='(item,index) in baseColors' :key='index'>
                <el-col :span="4" v-for='(color,colorIndex) in item.colors' :key='colorIndex'>
                    <span :style='{backgroundColor:color.color}' @click='copyed' v-html='color.color' :data-clipboard-text='color.color' class='color'></span>
                </el-col>
            </el-row>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleClose">关闭</el-button>
        </span>
    </el-dialog>
</template>


<script>
    import Clipboard from 'clipboard'
    import safeColor from './color'
    import elDragDialog from '@/directive/el-dragDialog'
    export default {
        directives: { elDragDialog },
        props: {
            dialogModel: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                dialogCloseVisible: false,
                baseColors: ''
            }
        },
        mounted () {
            this.init()
            this.$nextTick(function () {
                this.$on('child', function (dialogCloseVisible) {
                    this.dialogCloseVisible = dialogCloseVisible
                })
            })
        },
        methods: {
            init () {
                console.info('支持', this.dialogModel)
                this.dialogCloseVisible = this.dialogModel
                this.baseColors = safeColor
                // console.info(this.baseColors)
            },
            handleClose () {
                this.dialogCloseVisible = false
            },
            handleDrag () {
                this.$refs.select.blur()
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

