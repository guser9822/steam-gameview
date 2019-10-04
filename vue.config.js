module.exports = {
    lintOnSave: false,
    parallel: false,
    chainWebpack: config => {
        // Webworker Loader
        config.module
        .rule('worker-loader')
        .test(/\.worker\.js$/)
        .use('worker-loader')
          .loader('worker-loader')
          .end()
    }
}
