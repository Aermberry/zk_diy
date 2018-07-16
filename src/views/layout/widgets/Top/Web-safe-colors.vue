<template>
    <div class="zk-websafecolor">
        <header>
            <div class="header-box">
                <template v-for="(item,index) of wordColor">
                    <span :key="index" :style="item.color">{{item.word}}</span>
                </template>
            </div>
        </header>

        <body>
            <ul class="color-boxs">
                <li v-for="(item1,index) of basecolor1" :key="index">
                    <div class="colors">
                        <template v-for="(item,index) of basecolor">
                            <span :key="index">{{item}}</span>
                        </template>
                    </div>
                </li>
            </ul>
        </body>
    </div>
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
                        word: 'Safe',
                        color: {
                            color: '#666666'
                        }
                    },
                    {
                        word: 'Color',
                        color: {
                            color: '#333333'
                        }
                    }
                ],
                basecolor: [
                    '#000000', '#000033', '#000066', '#000099', '#0000CC', '#0000FF'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .zk-websafecolor {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -636px;
      margin-top: -380px;
      width: 1073px;
      height: 670px;
      border: 1px solid #cccccc;
      padding: 30px 50px;
      border-radius: 10px;
      background-color: #ffffff;
      header {
        .header-box {
          padding: 0px 20px;
          border-bottom: 1px solid #cccccc;
          span {
            font-size: 53.45px;
            font-weight: 700;
          }
        }
      }
      body {
        .color-boxs {
          .colors {
            display: flex;
            justify-content: space-around;
            span {
              display: inline-block;
              width: 155px;
              height: 60px;
              margin-top: 50px;
              background-color: aquamarine;
              border: 1px solid #ccc;
              border-radius: 5px;
              line-height: 60px;
              text-align: center;
            }
          }
        }
      }
    }
</style>


