// module.exports = {
//   proxyList: {
//     '/webs': {
//       // 测试环境
//       target: 'http://localhost:2000/', // 接口域名
//       changeOrigin: true, //是否跨域
//       pathRewrite: {
//         '^/index': 'pages/index' //需要rewrite重写的,
//       }
//     }
//   }
// }

module.exports = {
  proxyList: {
    '/webs': {
      // 测试环境
      target: 'https://www.baidu.com/', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/index': 'index.html' //需要rewrite重写的,
      }
    },
    '/iframe': {
      target: 'http://127.0.0.1:2000',
      changeOrigin: true,
      pathRewrite: {
        '^/iframe': ''
      }
    },
  }
}
