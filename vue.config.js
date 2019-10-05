
module.exports = {
    lintOnSave: false,
    chainWebpack: config => {

        // Webworker Loader
        config.module
            .rule('worker-loader')
            .test(/\.worker\.js$/)
            .use('worker-loader')
            .loader('worker-loader')
            .options({
                inline: true
            })
            .end()
    }
}
