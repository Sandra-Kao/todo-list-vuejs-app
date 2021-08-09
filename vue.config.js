// const { VueLoaderPlugin } = require('vue-loader')
// const isDebug_mode = process.env.NODE_ENV !== 'production';

module.exports = {
    // debug: isDebug_mode,
    // devtools: isDebug_mode,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/todo-list-vuejs-app/'
        : '/',
    filenameHashing: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Todo App";
                return args;
            })

        // .rule('vue')
        // .use('vue-loader')
        // .tap(options => {
        //     // 修改它的选项...
        //     return options
        // })
    }
}
