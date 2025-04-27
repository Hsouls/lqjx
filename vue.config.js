const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/lqjx/'  // 例如：'/lqjx/'（根据你的仓库名 https://github.com/Hsouls/lqjx 填写）
    : '/'  // 开发环境用根路径
};