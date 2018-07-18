<template>
<el-dialog title="Web安全色" :visible.sync="dialogTableVisible" v-show="closed" class="zk-websafecolor">
    <div slot="footer">
        <!-- <header>
            <div class="header-box">
                <template v-for="(item,index) of wordColor">
                    <span :key="index" :style="item.color">{{item.word}}</span>
                </template>
            </div>
            <span class="closed" @click="isshow">
            </span>
        </header> -->
        <body slot="footer" >
            <ul class="color-boxs">
                <li v-for="(item,index) of basecolor" :key="index">
                    <div class="colors">
                        <template v-for="(item,index) of item.colors">
                            <span :key="index" :style="{backgroundColor:item.color}">{{item.color}}</span>
                        </template>
                    </div>
                </li>
            </ul>
        </body>
    </div>
</el-dialog>
</template>

<script>
    export default {
        data () {
            return {
                wordColor: [
                    {
                        word: 'Web',
                        color: {
                            color: '#999999'
                        }
                    },
                    {
                        word: '安全',
                        color: {
                            color: '#666666'
                        }
                    },
                    {
                        word: '色',
                        color: {
                            color: '#333333'
                        }
                    }
                ],
                basecolor: [
                    {
                        colors: [
                            { color: '#000000' },
                            { color: '#000033' },
                            { color: '#000066' },
                            { color: '#000099' },
                            { color: '#0000CC' },
                            { color: '#0000FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#003300' },
                            { color: '#003333' },
                            { color: '#003366' },
                            { color: '#003399' },
                            { color: '#0033CC' },
                            { color: '#0033FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#006600' },
                            { color: '#006633' },
                            { color: '#006666' },
                            { color: '#006699' },
                            { color: '#0066CC' },
                            { color: '#0066FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#009900' },
                            { color: '#009933' },
                            { color: '#009966' },
                            { color: '#009999' },
                            { color: '#0099CC' },
                            { color: '#0099FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#00CC00' },
                            { color: '#00CC33' },
                            { color: '#00CC66' },
                            { color: '#00CC99' },
                            { color: '#00CCCC' },
                            { color: '#00CCFF' }
                        ]
                    }, {
                        colors: [
                            { color: '#00FF00' },
                            { color: '#00FF33' },
                            { color: '#00FF66' },
                            { color: '#00FF99' },
                            { color: '#00FFCC' },
                            { color: '#00FFFF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#330000' },
                            { color: '#330033' },
                            { color: '#330066' },
                            { color: '#330099' },
                            { color: '#3300CC' },
                            { color: '#3300FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#333300' },
                            { color: '#333333' },
                            { color: '#333366' },
                            { color: '#333399' },
                            { color: '#3333CC' },
                            { color: '#3333FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#336600' },
                            { color: '#336633' },
                            { color: '#336633' },
                            { color: '#336699' },
                            { color: '#3366CC' },
                            { color: '#3366FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#339900' },
                            { color: '#339933' },
                            { color: '#339966' },
                            { color: '#339999' },
                            { color: '#3399CC' },
                            { color: '#3399FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#33CC00' },
                            { color: '#33CC33' },
                            { color: '#33CC66' },
                            { color: '#33CC99' },
                            { color: '#33CCCC' },
                            { color: '#33CCFF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#33FF00' },
                            { color: '#33FF33' },
                            { color: '#33FF66' },
                            { color: '#33FF99' },
                            { color: '#33FFCC' },
                            { color: '#33FFFF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#660000' },
                            { color: '#660033' },
                            { color: '#660066' },
                            { color: '#660099' },
                            { color: '#6600CC' },
                            { color: '#6600FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#663300' },
                            { color: '#663333' },
                            { color: '#663366' },
                            { color: '#663399' },
                            { color: '#6633CC' },
                            { color: '#6633FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#666600' },
                            { color: '#666633' },
                            { color: '#666666' },
                            { color: '#666699' },
                            { color: '#6666CC' },
                            { color: '#6666FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#669900' },
                            { color: '#669933' },
                            { color: '#669966' },
                            { color: '#669999' },
                            { color: '#6699CC' },
                            { color: '#6699FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#66CC00' },
                            { color: '#66CC33' },
                            { color: '#66CC66' },
                            { color: '#66CC99' },
                            { color: '#66CCCC' },
                            { color: '#66CCFF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#66FF00' },
                            { color: '#66FF33' },
                            { color: '#66FF66' },
                            { color: '#66FF99' },
                            { color: '#66FFCC' },
                            { color: '#66FFFF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#990000' },
                            { color: '#990033' },
                            { color: '#990066' },
                            { color: '#990099' },
                            { color: '#9900CC' },
                            { color: '#9900FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#993300' },
                            { color: '#993333' },
                            { color: '#993366' },
                            { color: '#993399' },
                            { color: '#9933CC' },
                            { color: '#9933FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#996600' },
                            { color: '#996633' },
                            { color: '#996666' },
                            { color: '#996699' },
                            { color: '#9966CC' },
                            { color: '#9966FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#999900' },
                            { color: '#999933' },
                            { color: '#999966' },
                            { color: '#999999' },
                            { color: '#9999CC' },
                            { color: '#9999FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#99CC00' },
                            { color: '#99CC33' },
                            { color: '#99CC66' },
                            { color: '#99CC99' },
                            { color: '#99CCCC' },
                            { color: '#99CCFF' }
                        ]
                    }, {
                        colors: [
                            { color: '#99FF00' },
                            { color: '#99FF33' },
                            { color: '#99FF66' },
                            { color: '#99FF99' },
                            { color: '#99FFCC' },
                            { color: '#99FFFF' }
                        ]
                    }, {
                        colors: [
                            { color: '#CC0000' },
                            { color: '#CC0033' },
                            { color: '#CC0066' },
                            { color: '#CC0099' },
                            { color: '#CC00CC' },
                            { color: '#CC00FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#CC3300' },
                            { color: '#CC3333' },
                            { color: '#CC3366' },
                            { color: '#CC3399' },
                            { color: '#CC33CC' },
                            { color: '#CC33FF' }]
                    }, {
                        colors: [
                            { color: '#CC6600' },
                            { color: '#CC6633' },
                            { color: '#CC6666' },
                            { color: '#CC6699' },
                            { color: '#CC66CC' },
                            { color: '#CC66FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#CC9900' },
                            { color: '#CC9933' },
                            { color: '#CC9966' },
                            { color: '#CC9999' },
                            { color: '#CC99CC' },
                            { color: '#CC99FF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#CCCC00' },
                            { color: '#CCCC33' },
                            { color: '#CCCC66' },
                            { color: '#CCCC99' },
                            { color: '#CCCCCC' },
                            { color: '#CCCCFF' }
                        ]
                    },
                    {
                        colors: [
                            { color: '#CCFF00' },
                            { color: '#CCFF33' },
                            { color: '#CCFF66' },
                            { color: '#CCFF99' },
                            { color: '#CCFFCC' },
                            { color: '#CCFFFF' }
                        ]
                    }, {
                        colors: [
                            { color: '#FF0000' },
                            { color: '#FF0033' },
                            { color: '#FF0066' },
                            { color: '#FF0099' },
                            { color: '#FF00CC' },
                            { color: '#FF00FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#FF3300' },
                            { color: '#FF3333' },
                            { color: '#FF3366' },
                            { color: '#FF3399' },
                            { color: '#FF33CC' },
                            { color: '#FF33FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#FF6600' },
                            { color: '#FF6633' },
                            { color: '#FF6666' },
                            { color: '#FF6699' },
                            { color: '#FF66CC' },
                            { color: '#FF66FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#FF9900' },
                            { color: '#FF9933' },
                            { color: '#FF9966' },
                            { color: '#FF9999' },
                            { color: '#FF99CC' },
                            { color: '#FF99FF' }
                        ]
                    }, {
                        colors: [
                            { color: '#FFCC00' },
                            { color: '#FFCC33' },
                            { color: '#FFCC66' },
                            { color: '#FFCC99' },
                            { color: '#FFCCCC' },
                            { color: '#FFCCFF' }
                        ]
                    }, {
                        colors: [
                            { color: '#FFFF00' },
                            { color: '#FFFF33' },
                            { color: '#FFFF66' },
                            { color: '#FFFF99' },
                            { color: '#FFFFCC' },
                            { color: '#FFFFFF' }
                        ]
                    }
                ],
                closed: true
            }
        },
        mounted () {
            this.$nextTick(function () {
                this.$on('child', function (safeWebcolorsVisible) {
                    console.log('safeWebcolorsVisible2', safeWebcolorsVisible)
                    this.closed = safeWebcolorsVisible
                })
            })
        },
        methods: {
            isshow () {
                this.closed = false
            }

        }

    }
</script>

<style lang="scss" scoped>
    .zk-websafecolor {
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -636px;
      margin-top: -380px;
      width: 1073px;
      padding: 30px 0px;
      body {
        margin-top: 30px;
        height: 300px;
        border: 1px solid #ccc;
        padding: 2px 10px;
        // background-color: red;
        .color-boxs {
          margin-top: 1px;
          width: auto;
          overflow: hidden;
          li {
            .colors {
              display: flex;
              justify-content: space-around;
              span {
                color: #ffffff;
                display: inline-block;
                width: 100px;
                height:40px;
                border: 1px solid #ccc;
                border-radius: 5px;
                line-height: 40px;
                text-align: center;
              }
            }
          }
        }
      }
    }
</style>


