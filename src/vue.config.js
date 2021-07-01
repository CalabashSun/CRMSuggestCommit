// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? './': '/',
  // 构建项目生成的目录
  outputDir: process.env.NODE_ENV === "production" ? "/huaweicrm" : "devDist",
  // 关闭语法的自动检测
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`,
      },
    },
  },
  devServer: {
    overlay: {
        warnings: true,
        errors: true
    }
  }
};
