const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:3000,
    open:true, //启动项目自动打开浏览器
    proxy:{
      '/api':{
        // 请求时，把域名https://heimahr.itheima.net替换为/api
        target:'https://heimahr.itheima.net'
      },
      // 可写多个
      // '/api1':{
      //   // 请求时，把域名https://heimahr.itheima.net替换为/api
      //   target:'https://heimahr.itheima.net'
      // }
    }
  }
})
