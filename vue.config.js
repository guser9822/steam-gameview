
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

            /*
            * Exclude workers from default js rule of vue-cli
            * https://github.com/webpack-contrib/worker-loader/issues/195S
            */
            config.module.rule('js').exclude.add(/\.worker\.js$/)

    }
}
